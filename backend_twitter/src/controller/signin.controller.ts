import { Hono } from "hono";
import zod from "zod"
import getPrisma from "../lib/db";
import bcrypt from "bcryptjs";
import { env } from "hono/adapter";
import { sign } from "hono/jwt";
import { setCookie } from "hono/cookie";

export const signinController = new Hono <{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>

const signInSchema = zod.object({
    username: zod.string().min(1),
    password: zod.string().min(6)
})

signinController.post("/",async(c)=>{
    const body = await c.req.json()
    const response = signInSchema.safeParse(body)
    const client = getPrisma(c)

    //incase of not success
    if(!response.success)
    {
        return c.json({message: "Invalid credentials!"}, 400)
    }

    //find user in database
    const user = await client.userSchema.findFirst({
        where: {
            username: body.username
        }
    })

    //incase of no user
    if(!user)
    {
        return c.json({message: "Invalid credentials"}, 400)
    }

    const isMatch = bcrypt.compare(user.password, body.password)
    //incase of no matching password
    if(!isMatch)
    {
        return c.json({message: "Invalid credentials"}, 400)
    }

    const JWT_SECRET = env(c).JWT_SECRET || ""
    //create jwt token
    const token = await sign({
        id: user.id,
        email: user.email
    }, JWT_SECRET)   

    //create a cookie
    setCookie(c, "token", token, {
        httpOnly: true, //cannot access with javascript (prevent XSS attack)
        path:"/",
        maxAge: 86400,
        sameSite: "None",
        secure: true    
    })

    return c.json({
        message: "Logged in successfully!"
    })
})