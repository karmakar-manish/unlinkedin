import { Context } from "hono";
import getPrisma from "../lib/db";
import { configureCloudinary } from "../lib/cloudinary";
import { env } from "hono/adapter";
import { sendCommentNotificationEmail } from "../emails/emailHandlers";

export async function getFeedPosts(c: Context)
{
    const client = getPrisma(c)
    try{
        const user = c.get("user")  //set by the middleware
        const connections = user.connections    //array of connections
        
        //find the posts of the connected users

        const post = await client.postSchema.findMany({
            where: {
                authorId: {in: connections}
            },
            include: {
                Author: {
                    select: {
                        name: true,
                        username: true,
                        profilePicture: true,
                        headline: true
                    }
                }, 
                comments: {
                    include: {
                        User: {
                            select: {
                                name: true,
                                profilePicture: true
                            }
                        }
                    }
                }
            }, 
            orderBy: {
                createdAt: 'desc'
            }
        })

        return c.json(post)
    
    }catch(err)
    {
        console.log("Error in getFeedPosts controller");
        return c.json({message: "Server error"}, 500)
    }
}


export async function createPost(c: Context)
{
    const client = getPrisma(c)
    const user = c.get("user")  //get the user details set by middleware

    const body = await c.req.json() 
    //get the content and image from the body
    const {content, image} = body;

    try{

        let newPost;

        //incase user has sent an image, upload it to cloudinary
        if(image)
        {
            const cloudinary = configureCloudinary(c)
            //get the url after uploading in cloudinary
            const imgResult = await cloudinary.uploader.upload(image)
            
            newPost = await client.postSchema.create({
                data: {
                    authorId: user.id,
                    content: content,
                    image: imgResult.secure_url //the url of the image uploaded
                }
            })
        }   
        else    //the user has not posted an image
        {
            newPost = await client.postSchema.create({
                data:{
                    authorId: user.id,
                    content
                }
            })
        }
        
        return c.json(newPost)

    }catch(err)
    {
        console.log("Error in createFeed controller");
        return c.json({message: "Server error"}, 500)
    }
}

export async function deletePost(c: Context)
{
    const postId = c.req.param("id")
    const user = c.get("user")
    const userId = user.id

    const client = getPrisma(c)

    try{
        //find the post details using the postId
        const post = await client.postSchema.findFirst({
            where: {
                id: Number(postId)
            }
        })

        //incase no post is found
        if(!post)
        {
            return c.json({message: "Post not found!"}, 404)
        }

        //check if the same author have posted the post
        if(post.authorId !== userId)
        {
            //you are not the owner of the post
            return c.json({message: "You are not authorized to delete this post!"}, 403)
        }

        const cloudinary = configureCloudinary(c)
        //check if the post has an image
        if(post.image)
        {
            const url = post.image.split("/upload")[1]?.split(".")[0]
            // https://res.cloudinary.com/dgnv2vpwd/image/upload/v1747252769/cld-sample-5.jpg
            //we want just this => cld-sample-5
            await cloudinary.uploader.destroy(url)
        }

        //delete the post
        await client.postSchema.delete({
            where: {id: Number(postId)}
        })

        return c.json({message: "Post deleted successfully"})
    }catch(err)
    {
        console.log("Error in deletePost controller");
        return c.json({message: "Server error"}, 500)
    }

}

export async function getPostById(c: Context)
{
    const postId = c.req.param("id")    //get the id from the params
    const client = getPrisma(c)

    try{
        const post = await client.postSchema.findFirst({
            where: {
                id: Number(postId)
            }, 
            include: {
                Author: {
                    select: {
                        name: true,
                        username: true,
                        profilePicture: true,
                        headline: true
                    }
                }, 
                comments: {
                    include: {
                        User: {
                            select:{
                                name: true,
                                profilePicture: true,
                                username: true,
                                headline: true
                            }
                        }
                    }
                }
            }
        })

        return c.json(post) //return the post   
    }catch(err)
    {
        console.log("Error in getPostById controller");
        return c.json({message: "Server error"}, 500)
    }

}

export async function createComment(c: Context)
{
    const client = getPrisma(c)
    const body = await c.req.json()
    const postId = c.req.param("id")    //the post id
    const user = c.get("user")  //set by the middleware

    try{
        //create the comment
        const comment = await client.comment.create({
            data: {
                content: body.content,
                userId: user.id,
                postId: Number(postId)
            }
        })

        //get the post details along with the author
        const post = await client.postSchema.findUnique({
            where:{
                id: Number(postId)
            },
            include: {
                Author:{
                    select: {
                        name: true,
                        email: true,
                        username: true,
                        headline: true,
                        profilePicture: true
                    }
                }
            }
        })

        //create a notification if the comment owner is not the post owner
        if(post?.authorId !== user.id)
        {
            await client.notifications.create({
                data: {
                    recipientId: post?.authorId!,    //notification will be sent to him
                    relatedUserId: user.id,
                    relatedPostId: Number(postId),
                    type: "comment"
                }
            })

            try{
                const postUrl = env(c).CLIENT_URL + "/post/" + postId

                await sendCommentNotificationEmail(c, {
                    receipientEmail: post?.Author.email!, 
                    recipientName: post?.Author.name!, 
                    commenterName: user.name, 
                    postUrl: postUrl, 
                    commentContent: body.content})
            }catch(err)
            {
                console.log("Error in sending comment notification email: ", err);
            }
        }
        return c.json({message: "Comment added successfully", post})

    }catch(err)
    {
        console.log("Error in createComment controller");
        return c.json({message: "Server error"}, 500)
    }
}

export async function likePost(c: Context) {
    const postId = c.req.param("id")
    const userId = c.get("user").id
    const body = await c.req.json()

    const client = getPrisma(c)

    
    try{
        //find if the user has already liked the post
        const existingLike = await client.postLikes.findUnique({
            where: {
                userId_postId: {
                    userId: userId,
                    postId: Number(postId)
                }
            }
        })

        //incase the user has already liked the post, dislike it
        if(existingLike)
        {
            await client.postLikes.delete({
                where: {
                userId_postId: {
                    userId: userId,
                    postId: Number(postId)
                }
            }
            })
            return c.json({liked : false})
        }
        else
        {
            //like the post, create like in table
            await client.postLikes.create({
                data: {
                    userId: userId,
                    postId: Number(postId)
                }  
            })

            //find the post to get the author
            const post = await client.postSchema.findUnique({
                where: {id: Number(postId)}
            })


            //send notification if the user is not the creater of the post
            if(post && post.authorId !== userId)
            {
                await client.notifications.create({
                    data: {
                        recipientId: post.authorId,
                        type: "like",
                        relatedUserId: userId,
                        relatedPostId: Number(postId)
                    }
                })
            }
            return c.json({liked: true})
        }


    }catch(err)
    {
        console.log("Like / Unlike Error: ", err);
        return c.json({error: "Something went wrong"}, 500)
    }
}8