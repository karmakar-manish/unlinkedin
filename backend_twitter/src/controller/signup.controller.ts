import { Hono } from "hono";
import getPrisma from "../lib/db";
import { env } from "hono/adapter";
import bcrypt from "bcryptjs";
import { sign } from "hono/jwt";
import { setCookie } from "hono/cookie";
import sendWelcomeEmail from "../emails/emailHandlers";


export const signupController = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>

signupController.get("/test", async (c) => {
    return c.json({
        message: "Signup controller"
    })
})

signupController.post("/", async (c) => {
    const body = await c.req.json()
    const {name, email, password, username} = body

    if(!name || !email || !password || !username)
        return c.json({message:"All fields are required!"}, 400)

    
    const client = getPrisma(c)
    try {
        //check if email is already taken
        const existingEmail = await client.userSchema.findFirst({
            where: {
                email: email
            }
        })
        if (existingEmail)   //incase email is taken
            return c.json({ message: "Email already taken" }, 400)
        

        //check if username is already taken
        const existingUsername = await client.userSchema.findFirst({
            where: {
                email: username
            }
        })
        if (existingUsername)   //incase email is taken
            return c.json({ message: "Username already taken" }, 400)
        

        //check password length
        if(password.length < 6)
            return c.json({message: "Password must be atleast 6 characters"})

        //hash the password before storing
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //create a new User
        const user = await client.userSchema.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
                username: username
            }
        })

        const JWT_SECRET = env(c).JWT_SECRET || ""

        //create a token now
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


        const profileUrl = env(c).CLIENT_URL+"/profile/"+user.username
        
        //todo : send welcome email
        try{
            await sendWelcomeEmail(c,{
                email: user.email, 
                name: user.name, 
                profileUrl})
                
        }catch(err)
        {
            console.log("Error sending welcome email : ", err);
        }

        return c.json({
            message: "User registered successfully!",
            token: token
        })
    } catch (err) {
        console.log("Error from signup route: ", err);
        return c.json({message: "Internal server error"}, 500)
    }
})