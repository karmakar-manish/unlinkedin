import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
const prisma = new PrismaClient();


async function protectRoute(req: any,res: any,next:any) 
{

    const token = req.cookies?.token    //get the token from cookie
    if(!token){
        return res.status(401).json({message: "Unauthorized - No token provided!"})
    }

    try{
        //decode the token    
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {id: number}

        const user = await prisma.userSchema.findFirst({
            where: {
                id: decoded.id
            },
            include: {
                connections: {
                    select: {
                        id: true,
                        username: true,
                        profilePicture: true,
                        headline: true
                    }
                }
            }
        })

        if(!user)
        {
            return res.status(401).json({message: "User not found!"})
        }

        //setting in the request body
        req.user = user
        
        next()

    }catch(err)
    {
        console.log("Error from auth middleware: ", err)
        return res.json({message: "Invalid token!"})
    }
}

//function to get the current user details set by the middleware
function getCurrentUser(req: any, res: any)
{
    try{
        return res.json(req.user)

    }catch(err)
    {
        console.log("Error from getCurrentUser from auth middleware");
        return res.status(500).json({message: "Server error"})
    }
}

export { protectRoute, getCurrentUser}