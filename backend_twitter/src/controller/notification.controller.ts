import { Context } from "hono";
import getPrisma from "../lib/db";

export async function getUserNotifications(c: Context){
    const client = getPrisma(c)
    const user = c.get("user")  //set by the middleware

    try{

        const notifications = await client.notifications.findMany({
            where: {
                recipientId: user.id
            }, 
            include: {
                RelatedUser: {
                    select: {
                        name: true,
                        username: true,
                        profilePicture: true
                    }
                },
                Post: {
                    select: {
                        content: true,
                        image: true
                    }
                }
            }, 
            orderBy: {
                createdAt: 'desc'
            }
        })
    }catch(err)
    {
        console.log("Error in getUserNotification controller: ", err);
        return c.json({message: "Internal server error"}, 500)
    }
}

export async function markNotification(c: Context){
    const user = c.get("user")  //set by the middleware
    const client = getPrisma(c)
    const notificationId = c.req.param("id")    //from the parameter

    try{
        const notifications = await client.notifications.updateMany({
            where: {
                AND: [
                    {id: Number(notificationId)},
                    {recipientId: user.id}
                ]
            },
            data: {
                read: true
            }
        })

        return c.json(notifications)

    }catch(err)
    {
        console.log("Error from markNotification controller: ", err);
        return c.json({message: "Internal server error"}, 500)
    }
}

export async function deleteNotification(c: Context){
    const user = c.get("user")  //set by the middleware
    const client = getPrisma(c)
    const notificationId = Number(c.req.param("id")
)
    try{
        await client.notifications.deleteMany({
            where: {
                AND: [
                    {id: notificationId},
                    {recipientId: user.id}
                ]
            }
        })

        return c.json({message: "Notification deleted successfully!"})
        
    }catch(err)
    {
        console.log("Error from delelteNotification controller: ", err);
        return c.json({message: "Internal server error"}, 500)
    }
}

