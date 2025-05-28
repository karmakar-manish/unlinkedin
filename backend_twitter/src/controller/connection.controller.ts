import { Context } from "hono";
import { env } from "hono/adapter";
import getPrisma from "../lib/db";
import { sendConnectionAcceptedEmail } from "../emails/emailHandlers";
import { string } from "zod";
import { requestId } from "hono/request-id";

export async function sendConnectionRequest(c: Context)
{
    //to whom the request is sent
    const receiverId = Number(c.req.param("userId"))    //got from the params
    const client = getPrisma(c)
    const senderId = c.get("user").id   //set by the middleware

    if(senderId === receiverId)
        return c.json({message: "You can't send request to yourself!"}, 400)

    
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
            (u) => u.id === receiverId
        )

        if(isAlreadyConnected)
            return c.json({message: "You are already connected!"}, 400)

        //check if the request already exists
        const existingRequest = await client.connectionRequest.findFirst({
            where: {
                senderId: senderId,
                receiverId: receiverId,
                status: "pending"
            }
        })

        if(existingRequest)
            return c.json({message: "A connection request already exists!"}, 400)


        //create a new connection request
        await client.connectionRequest.create({
            data: {
                senderId: senderId,
                receiverId: receiverId,
                status: "pending"
            }
        })

        return c.json({message: "Connection request sent successfully"}, 200)
    }catch(err)
    {
        console.log("Error in sendConnectionRequest controller: ", err);
        return c.json({message: "Internal server error"}, 500)
    }
}


export async function acceptConnectionRequest(c: Context)
{
    const requestId = Number(c.req.param("requestId"))
    const recipientId = c.get("user").id    //i am receiving the request
    const client = getPrisma(c)

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
            return c.json({message: "Connection request not found!"}, 404)

        //check if the request is for the current user, you cannot accpet request that are not for you
        if(request.receiverId !== recipientId)
            return c.json({message: "Not authorized to accept this request"}, 403)

        //check the status of the request
        if(request.status !== "pending")
            return c.json({message: "This request has already been processed"}, 400)
        

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
        const profileUrl = env(c).CLIENT_URL + "/profile/" + request.recipient.username 

        try{
            await sendConnectionAcceptedEmail(c, {senderEmail, senderName, recipientName, profileUrl})
            console.log("Connection accepted notification sent");

        }catch(err){
            console.log("Error while sending notification to connected user");
        }

        return c.json({ message: "Connection accepted successfully" }, 200);

    }catch(err)
    {
        console.log("Error in acceptConnectionRequest controller: ", err);
        return c.json({message: "Internal server error"}, 500)
    }

}


export async function rejectConnectionRequest(c: Context)
{
    const requestId = Number(c.req.param("requestId"))
    const userId = c.get("user").id 
    const client = getPrisma(c)

    try{

        const request = await client.connectionRequest.findFirst({
            where: {id: requestId}
        })

        //incase the request is not for the current user
        if(request?.receiverId !== userId)
            return c.json({message: "Not authorized to reject this request"}, 403)
        
        //incase the request is not pending
        if(request?.status !== "pending")
            return c.json({message: "This request has already been processed"}, 400)
        
        //change the status of the request to "rejected"
        await client.connectionRequest.update({
            where: {id :requestId},
            data: {status: "rejected"}
        })

        return c.json({message: "Connection request rejected"})

    }catch(err)
    {
        console.log("Error in rejectConnectionRequest controller: ", err);
        return c.json({message: "Internal server error"}, 500)
    }

}

//get all connection request for the current user
export async function getConnectionRequests(c: Context)
{
    const client = getPrisma(c)

    try{
        const userId = c.get("user").id

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

        return c.json(request)

    }catch(err)
    {
        console.log("Error in getConnectionRequests controller: ", err);
        return c.json({message: "Server Error"}, 500)
    }
}

//get all connections for a user
export async function getUserConnections(c: Context)
{
    const client = getPrisma(c)

    try{
        const userId = c.get("user").id

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

        return c.json(user?.connections || [])

    }catch(err)
    {
        console.log("Error in getUserConnections controller: ", err);
        return c.json({message: "Server Error"}, 500)
    }
}


export async function removeConnection(c: Context)
{
    const myId = c.get("user").id
    const userId = Number(c.req.param("userId"))

    const client = getPrisma(c)

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
        return c.json({message: "Server Error"}, 500)
    }

}


export async function getConnectionStatus(c: Context)
{
    const client = getPrisma(c)

    const targetUserId = Number(c.req.param("userId"))
    const currentUserId = c.get("user").id

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
        const isConnected = user?.connections.some(conn => conn.id===targetUserId)  

        if(isConnected)
            return c.json({status: "connected"})


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
                return c.json({status: "Pending"})
            else    
                return c.json({
                    status: "Received",
                    requestId: pendingRequest.id
                })
        }

        //3. No connection or request
        return c.json({status: "Not connected"})

    }catch(err)
    {
        console.log("Error in getConnectionStatus controller: ", err);
        return c.json({message: "Server Error"}, 500)
    }
}

