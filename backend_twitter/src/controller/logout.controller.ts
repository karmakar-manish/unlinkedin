import { Hono } from "hono";
import { setCookie } from "hono/cookie";

export const logoutController = new Hono <{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>

logoutController.get("/",async(c)=>{
    //create a cookie
    setCookie(c, "token", "", {
        httpOnly: true, //cannot access with javascript (prevent XSS attack)
        path:"/",
        maxAge: 0 ,
        sameSite: "None",
        secure: true    
    })

    return c.json({
        message: "Logged out successfully!"
    })
})