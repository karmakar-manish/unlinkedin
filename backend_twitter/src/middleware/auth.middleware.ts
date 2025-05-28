import { env } from "hono/adapter"
import { getCookie } from "hono/cookie"
import { verify } from "hono/jwt"
import getPrisma from "../lib/db"
import { Next, Context } from "hono"

export async function protectRoute(c: Context, next: Next)
{
    const JWT_SECRET = env(c).JWT_SECRET || ""
    
    const token = getCookie(c, "token") //get the token from cookie
    if(!token){
        return c.json({message: "Unauthorized - No token provided!"}, 401)
    }

    try{
        //decode the token    
        const decoded = await verify(token, JWT_SECRET) as {
            id: number,
            email: string | null
        }
        
        const client = getPrisma(c)
        const user = await client.userSchema.findFirst({
            where: {
                id: decoded.id
            }
        })

        if(!user)
        {
            return c.json({message: "User not found!"}, 401)
        }

        //setting in the request body
        c.set("user", user) 
        
        await next()

    }catch(err)
    {
        console.log("Error from auth middleware: ", err)
        return c.json({message: "Invalid token!"}, 401)
    }
}



export async function getCurrentUser(c: Context)
{
    try{
        const user = c.get("user")
        return c.json(user)
    }catch(err)
    {
        console.log("Error from getCurrentUser from auth middleware");
        return c.json({message: "Server error"}, 500)
    }
}