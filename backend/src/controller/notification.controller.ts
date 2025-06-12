import { PrismaClient } from "@prisma/client";
const client = new PrismaClient

export async function getUserNotifications(req:any, res:any){
    
    const userId = req.user?.id  //set by the middleware

    try{

        const notifications = await client.notifications.findMany({
            where: {
                recipientId: userId
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
                        id: true,
                        content: true,
                        image: true
                    }
                }
            }, 
            orderBy: {
                createdAt: 'desc'
            }
        })
        return res.json(notifications)
    }catch(err)
    {
        console.log("Error in getUserNotification controller: ", err);
        return res.status(500).json({message: "Internal server error"})
    }
}

export async function markNotification(req: any, res: any){
    const userId = req.user?.id  //set by the middleware
   
    const notificationId = Number(req.params.id) //from the parameter

    try{
        const notifications = await client.notifications.updateMany({
            where: {
                AND: [
                    {id: Number(notificationId)},
                    {recipientId: userId}
                ]
            },
            data: {
                read: true
            }
        })

        return res.json(notifications)

    }catch(err)
    {
        console.log("Error from markNotification controller: ", err);
        return res.status(500).json({message: "Internal server error"})
    }
}

export async function deleteNotification(req: any, res: any){
    const user = req.user  //set by the middleware
   
    const notificationId = Number(req.params.id)

    try{
        await client.notifications.deleteMany({
            where: {
                AND: [
                    {id: notificationId},
                    {recipientId: user?.id}
                ]
            }
        })

        return res.json({message: "Notification deleted successfully!"})
        
    }catch(err)
    {
        console.log("Error from delelteNotification controller: ", err);
        return res.status(500).json({message: "Internal server error"})
    }
}

