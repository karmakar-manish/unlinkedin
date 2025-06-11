import { PrismaClient } from "@prisma/client"
import cloudinary from "../lib/cloudinary"
const client = new PrismaClient()


export async function getSuggestedConnections(req:any, res: any)
{
    try{
        const userId = req.user?.id

        const currentUser = await client.userSchema.findUnique({
            where: {
                id: userId
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
        const connectedUserIds = currentUser?.connections.map((conn: {id: number})  => conn.id) || []

        //find users who are not connected, and also donot show our own profile
        const suggestedUsers = await client.userSchema.findMany({
            where: {
                id: {
                    notIn: [userId as number, ...connectedUserIds]   //exclude current user + connections
                }
            }, 
            select: {
                id: true,
                name: true,
                username: true,
                profilePicture: true,
                headline: true
            },
            take: 3 //Limit to 3 results
        })

        return res.json(suggestedUsers)

    }catch(err)
    {
        console.log("Error from userController: ", err);
    }
}

export async function getPublicProfile(req:any, res: any)
{
    const username = req.params.username
    try{
        const user = await client.userSchema.findUnique({
            where: {
                username: username
            }
        })

        //incase no user is there in database
        if(!user)
        {
            return res.status(404).json({message: "No user found!"})
        }

        return res.json(user)
    }catch(err)
    {
        console.log("Error from getPublicProfile route: ", err);
        return res.status(500).json({message: "Server Error!"})
    }
}

export async function updateProfile(req:any, res: any)
{
    const body = req.body

    
    try{
        const currUser = req.user

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

        //for uploading profile picture
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
                id: currUser?.id
            },
            data: updatedData
        })

        return res.json(updatedUser)

    }catch(err)
    {
        console.log("Error from update Profile route");
        return res.status(500).json({message: "Server Error! "})
    }
}