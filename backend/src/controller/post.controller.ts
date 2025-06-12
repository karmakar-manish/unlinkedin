import { PrismaClient } from "@prisma/client";
import { sendCommentNotificationEmail } from "../emails/emailHandlers";
import cloudinary from "../lib/cloudinary";
import dotenv from "dotenv"
dotenv.config() //for loading the env file contents

const client = new PrismaClient()

export async function getFeedPosts(req: any, res:any)
{
    
    try{
        const user = req.user  //set by the middleware
        const connections = user.connections    //array of connections
        
        //put all the connection ids in the new array
        const connectionIds = connections.map((conn: {id: number})=>conn.id)

        //find the posts of the connected users

        const post = await client.postSchema.findMany({
            where: {
                authorId: {in: [...connectionIds, user.id]}
            },
            include: {
                Author: {
                    select: {
                        id: true,
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
                },
                likes: {
                    select: {
                        id: true,
                        userId: true
                    }
                }
            }, 
            orderBy: {
                createdAt: 'desc'
            }
        })

        return res.json(post)
    
    }catch(err)
    {
        console.log("Error in getFeedPosts controller");
        return res.status(500).json({message: "Server error"})
    }
}


export async function createPost(req:any, res:any)
{
    
    const user = req.user  //get the user details set by middleware

    //get the content and image from the body
    const content = req.body.content;
    
    const image = req.file  //multer puts the binary file in req.file

    try{

        let imageUrl = null;

        //incase user has sent an image, upload and get the image url
        if(image)
        {
            //cloudinary expects a base64 string representation of that file.
            const base64 = `data:${image.mimetype};base64,${image.buffer.toString("base64")}`

            const imgResult = await cloudinary.uploader.upload(base64)

            imageUrl = imgResult.secure_url;
        }   
        
        const newPost = await client.postSchema.create({
            data:{
                authorId: user.id,
                content,
                image: imageUrl
            }
        })
        
        
        return res.json(newPost)

    }catch(err)
    {
        console.log("Error in createFeed controller");
        return res.status(500).json({message: "Server error"})
    }
}

export async function deletePost(req: any, res: any)
{
    const postId = req.params.id
    const userId = req.user.id

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
            return res.status(404).json({message: "Post not found!"})
        }

        //check if the same author have posted the post
        if(post.authorId !== userId)
        {
            //you are not the owner of the post
            return res.status(403).json({message: "You are not authorized to delete this post!"})
        }

        //incase there was a post image, delete it from cloudinary
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

        return res.json({message: "Post deleted successfully"})
    }catch(err)
    {
        console.log("Error in deletePost controller");
        return res.status(500).json({message: "Server error"})
    }

}

export async function getPostById(req:any, res:any)
{
    const postId = Number(req.params.id)    //get the id from the params
 
    try{
        const post = await client.postSchema.findFirst({
            where: {
                id: Number(postId)
            }, 
            include: {
                Author: {
                    select: {
                        id: true,
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
                },
                likes: {
                    select: {
                        id: true,
                        userId: true
                    }
                }
            }
        })
        return res.json(post) //return the post   

    }catch(err)
    {
        console.log("Error in getPostById controller");
        return res.status(500).json({message: "Server error"})
    }

}

export async function createComment(req:any, res:any)
{
    
    const content = req.body.content    //the comment sent in the body
    const postId = req.params.id    //the post id
    const user = req.user  //set by the middleware

    try{
        //create the comment
        const comment = await client.comment.create({
            data: {
                content: content,
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
                const postUrl = process.env.CLIENT_URL + "/post/" + postId

                await sendCommentNotificationEmail({
                    receipientEmail: post?.Author.email!, 
                    recipientName: post?.Author.name!, 
                    commenterName: user.name, 
                    postUrl: postUrl, 
                    commentContent: content})
            }catch(err)
            {
                console.log("Error in sending comment notification email: ", err);
            }
        }
        return res.json({message: "Comment added successfully", post})

    }catch(err)
    {
        console.log("Error in createComment controller");
        return res.status(500).json({message: "Server error"})
    }
}

//route to get all the comments of the given post
export async function getComments(req:any, res:any)
{
    const postId = req.params.id    //get the postId from the params
   
    try{
        const postComments = await client.comment.findMany({
            where: {
                postId: Number(postId)
            },
            include:{
                User:{
                    select: {
                        name: true,
                        username: true,
                        profilePicture: true,
                        headline: true
                    }
                }
            },
            orderBy: {createdAt: 'desc'}
        })
        
        return res.json(postComments)

    }catch(err){
        console.log("Error in getComments controller");
        return res.status(500).json({message:"Server Error"})
    }
}

export async function likePost(req:any, res:any) {
    const postId = req.params.id
    const userId = req.user.id
    
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

        //incase the user has already liked the post, "unlike" it
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
            return res.json({liked : false})
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
            return res.json({liked: true})
        }


    }catch(err)
    {
        console.log("Like / Unlike Error: ", err);
        return res.status(500).json({error: "Something went wrong"})
    }
}8