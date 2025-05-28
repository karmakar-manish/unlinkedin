import { Context } from "hono";
import getPrisma from "../lib/db";
import { configureCloudinary } from "../lib/cloudinary"; 

export async function getSuggestedConnections(c:Context)
{
    const client = getPrisma(c)
    try{
        const user = c.get("user")

        const currentUser = await client.userSchema.findUnique({
            where: {
                id: user.id
            }, 
            include: {
                connections: {
                    select: {
                        id: true
                    }
                } //this will fetch connected users' id
            }
        })

        //get list of connected user IDs
        // ensures that connectedUserIds will be an empty array []
        const connectedUserIds = currentUser?.connections.map(conn => conn.id) || []

        console.log("Connected user ids : ", connectedUserIds);

        //find users who are not connected, and also donot show our own profile
        const suggestedUsers = await client.userSchema.findMany({
            where: {
                id: {
                    notIn: [user.id, ...connectedUserIds]   //exclude current user + connections
                }
            }, 
            select: {
                name: true,
                username: true,
                profilePicture: true,
                headline: true
            },
            take: 3 //Limit to 3 results
        })

        return c.json(suggestedUsers)

    }catch(err)
    {
        console.log("Error from userController: ", err);
    }
}

export async function getPublicProfile(c: Context)
{
    const client = getPrisma(c)
    
    try{
        const user = await client.userSchema.findUnique({
            where: {
                username: c.req.param("username")
            }
        })

        //incase no user is there in database
        if(!user)
        {
            return c.json({message: "No user found!"}, 404)
        }

        return c.json(user)
    }catch(err)
    {
        console.log("Error from getPublicProfile route: ", err);
        return c.json({message: "Server Error!"}, 500)
    }
}

export async function updateProfile(c: Context)
{
    const body = await c.req.json()
    const client = getPrisma(c)
    
    try{
        const currUser = c.get("user")

        //array of field names that can be updated
        const allowedFields = [
            "name",
            "username",
            "headline",
            "about",
            "location",
            "profilePicture",
            "bannerImg",
            "skills",
            "experience",
            "education"
        ]

        const updatedData: {[key: string]: any} = {}

        for(const field of allowedFields)
        {
            if(body[field] !== undefined)
                updatedData[field] = body[field]
        }

        const cloudinary = configureCloudinary(c)
        //for updating profile picture
        if(body.profilePicture)
        {
            const result = await cloudinary.uploader.upload(body.profilePicture)
            updatedData.profilePicture = result.secure_url  //store the url of the updated result
        }
        //for updating banner image
        if(body.bannerImg)
        {
            const result = await cloudinary.uploader.upload(body.bannerImg)
            updatedData.bannerImg = result.secure_url  //store the url of the updated result
        }

        const updatedUser = await client.userSchema.update({
            where: {
                id: currUser.id
            },
            data: updatedData
        })

        return c.json(updatedUser)

    }catch(err)
    {
        console.log("Error from update Profile route");
        return c.json({message: "Server Error! "}, 500)
    }
}