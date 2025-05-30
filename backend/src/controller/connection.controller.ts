import { sendConnectionAcceptedEmail } from "../emails/emailHandlers";
import { PrismaClient } from "@prisma/client";
import { NextFunction, Response, Request } from "express";

const client = new PrismaClient()


export async function sendConnectionRequest(req:any, res:any, next:any)
{

    //to whom the request is sent
    const {receiverId} = req.params //got from the params
    
    const senderId = req.user?.id   //set by the middleware

    if(senderId?.toString() === receiverId)
        return res.status(400).json({message: "You can't send request to yourself!"})

    
    try{
        //get the ids of all the users who are connected to the current user
        const senderData = await client.userSchema.findUnique({
            where: { id: senderId},
            select: {
                connections: {
                    select: {id: true}
                }
            }
        })

        //check if the user is already connected
        const isAlreadyConnected = senderData?.connections.some(
            (u: any) => u.id === receiverId
        )

        if(isAlreadyConnected)
            return res.status(400).json({message: "You are already connected!"})

        //check if the request already exists
        const existingRequest = await client.connectionRequest.findFirst({
            where: {
                senderId: senderId,
                receiverId: Number(receiverId),
                status: "pending"
            }
        })

        if(existingRequest)
            return res.status(400).json({message: "A connection request already exists!"})


        //create a new connection request
        await client.connectionRequest.create({
            data: {
                senderId: senderId!,
                receiverId: Number(receiverId),
                status: "pending"
            }
        })

        return res.status(200).json({message: "Connection request sent successfully"})
    }catch(err)
    {
        console.log("Error in sendConnectionRequest controller: ", err);
        return res.status(500).json({message: "Internal server error"})
    }
}


export async function acceptConnectionRequest(req:any, res:any, next: any)
{
    const requestId = Number(req.params)
    const recipientId = req.user?.id    //i am receiving the request

    try{

        const request = await client.connectionRequest.findFirst({
            where: {id : requestId},
            include: {
                sender: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        username: true
                    }
                },
                recipient: {
                    select: {
                        id: true,
                        name: true,
                        username: true
                    }
                }
            }
        })

        //incase no request is found
        if(!request)
            return res.status(404).json({message: "Connection request not found!"})

        //check if the request is for the current user, you cannot accpet request that are not for you
        if(request.receiverId !== recipientId)
            return res.status(403).json({message: "Not authorized to accept this request"})

        //check the status of the request
        if(request.status !== "pending")
            return res.status(400).json({message: "This request has already been processed"})
        

        //change the status of the request to accepted
        await client.connectionRequest.update({
            where: {id: requestId},
            data: {status: "accepted"}
        })


        //who is sending the connection request
        const senderId = request.sender.id

        //if i am your friend, then you are also my friend
        await client.userSchema.update({
            where: {id: recipientId},
            data:{
                connections: {
                    connect: {id: senderId}
                }
            }
        })

        await client.userSchema.update({
            where: {id: senderId},
            data:{
                connections: {
                    connect: {id: recipientId}
                }
            }
        })

        //send a notification to the user who sent the request
        const notification = await client.notifications.create({
            data: {
                recipientId: senderId,
                type: "connectionAccepted",
                relatedUserId: recipientId
            }
        })

        //TODO: Send an email
        const senderEmail = request.sender.email
        const senderName = request.sender.name
        const recipientName = request.recipient.name
        const profileUrl = process.env.CLIENT_URL + "/profile/" + request.recipient.username 

        try{
            await sendConnectionAcceptedEmail({senderEmail, senderName, recipientName, profileUrl})
            console.log("Connection accepted notification sent");

        }catch(err){
            console.log("Error while sending notification to connected user");
        }

        return res.status(200).json({ message: "Connection accepted successfully" });

    }catch(err)
    {
        console.log("Error in acceptConnectionRequest controller: ", err);
        return res.status(500).json({message: "Internal server error"})
    }

}


export async function rejectConnectionRequest(req:any, res:any, next:any)
{
    const requestId = Number(req.params)
    const userId = req.user?.id

    try{

        const request = await client.connectionRequest.findFirst({
            where: {id: requestId}
        })

        //incase the request is not for the current user
        if(request?.receiverId !== userId)
            return res.status(403).json({message: "Not authorized to reject this request"})
        
        //incase the request is not pending
        if(request?.status !== "pending")
            return res.status(400).json({message: "This request has already been processed"})
        
        //change the status of the request to "rejected"
        await client.connectionRequest.update({
            where: {id :requestId},
            data: {status: "rejected"}
        })

        return res.json({message: "Connection request rejected"})

    }catch(err)
    {
        console.log("Error in rejectConnectionRequest controller: ", err);
        return res.status(500).json({message: "Internal server error"})
    }

}

//get all connection request for the current user
export async function getConnectionRequests(req:any, res:any, next:any)
{

    try{
        const userId = req.user?.id

        const request = await client.connectionRequest.findMany({
            where: {
                AND: [
                    {receiverId: userId},
                    {status: "pending"}
                ]
            }, 
            include: {
                sender: {
                    select: {
                        name: true,
                        username: true,
                        profilePicture: true,
                        headline: true,
                        connections: true
                    }
                }
            }
        })

        return res.json(request)

    }catch(err)
    {
        console.log("Error in getConnectionRequests controller: ", err);
        return res.status(500).json({message: "Server Error"})
    }
}

//get all connections for a user
export async function getUserConnections(req:any, res:any, next: any)
{

    try{
        const userId = req.user?.id

        const user = await client.userSchema.findUnique({
            where: {id: userId},
            include: {
                connections: {
                    select: {
                        id: true,
                        name: true,
                        username: true,
                        profilePicture: true,
                        headline: true,
                        connections: true
                    }
                }
            }
        })

        return res.json(user?.connections || [])

    }catch(err)
    {
        console.log("Error in getUserConnections controller: ", err);
        return res.status(500).json({message: "Server Error"})
    }
}


export async function removeConnection(req:any, res:any, next: any)
{
    const myId = req.user?.id
    const userId = Number(req.params)

    try{
        await client.userSchema.update({
            where: {id: myId},
            data: {
                connections: {
                    disconnect: {id: userId}
                }
            }
        })
        
        await client.userSchema.update({
            where: {id: userId},
            data: {
                connections: {
                    disconnect: {id: myId}
                }
            }
        })
    }catch(err)
    {
        console.log("Error in removeConnection controller: ", err);
        return res.status(500).json({message: "Server Error"})
    }

}


export async function getConnectionStatus(req:any, res:any, next: any)
{

    const targetUserId = Number(req.params)
    const currentUserId = req.user?.id

    try{
        //1. Check if the user is already connected
        const user = await client.userSchema.findUnique({
            where: {id: currentUserId},
            select: {
                connections: {
                    select: {id: true}
                }
            }
        })
        const isConnected = user?.connections.some((conn: {id: number}) => conn.id===targetUserId)  

        if(isConnected)
            return res.json({status: "connected"})


        //2. Check for pending connection request
        const pendingRequest = await client.connectionRequest.findFirst({
            where: {
                status: "pending",
                OR: [
                    {senderId: currentUserId, receiverId: targetUserId},
                    {senderId: targetUserId, receiverId: currentUserId}
                ]
            }
        })

        if(pendingRequest)
        {
            if(pendingRequest.senderId===currentUserId)
                return res.json({status: "Pending"})
            else    
                return res.json({
                    status: "Received",
                    requestId: pendingRequest.id
                })
        }

        //3. No connection or request
        return res.json({status: "Not connected"})

    }catch(err)
    {
        console.log("Error in getConnectionStatus controller: ", err);
        return res.status(500).json({message: "Server Error"})
    }
}

