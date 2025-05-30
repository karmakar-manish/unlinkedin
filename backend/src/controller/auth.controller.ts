import express from 'express'
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import sendWelcomeEmail from "../emails/emailHandlers"
import zod from "zod"
import { PrismaClient } from "@prisma/client"
const client = new PrismaClient()

const router = express.Router()

//Signup function
export async function signup(req:any, res:any)
{
    const {name, email, password, username} = req.body

    if(!name || !email || !password || !username)
        return res.status(400).json({message:"All fields are required!"})

    try {
        //check if email is already taken
        const existingEmail = await client.userSchema.findFirst({
            where: {
                email: email
            }
        })
        if (existingEmail)   //incase email is taken
            return res.status(400).json({ message: "Email already taken" })
        

        //check if username is already taken
        const existingUsername = await client.userSchema.findFirst({
            where: {
                username: username
            }
        })
        if (existingUsername)   //incase email is taken
            return res.status(400).json({ message: "Username already taken" })
        

        //check password length
        if(password.length < 6)
            return res.status(400).json({message: "Password must be atleast 6 characters"})

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

        const JWT_SECRET = process.env.JWT_SECRET || ""
        
        //create a token now
        const token = jwt.sign({id: user?.id}, JWT_SECRET, {expiresIn: "3d"})
        
        //create a cookie
        res.cookie("token", token,{
            httpOnly: true, //cannot access with javascript (prevent XSS attack)
            path:"/",
            maxAge: 86400,
            sameSite: "strict",
            secure: true 
        })

        const profileUrl = process.env.CLIENT_URL+"/profile/"+user.username
        
        //todo : send welcome email
        try{
            await sendWelcomeEmail({
                email: user.email, 
                name: user.name, 
                profileUrl})
                
        }catch(err)
        {
            console.log("Error sending welcome email : ", err);
        }


        return res.status(200).json({
            message: "User registered successfully!",
            token: token
        })
    } catch (err) {
        console.log("Error from signup route: ", err);
        return res.status(500).json({message: "Internal server error"})
    }
}


const signInSchema = zod.object({
    username: zod.string().min(1),
    password: zod.string().min(6)
})

//login function
export async function login(req:any, res:any){

    const body = req.body
    const response = signInSchema.safeParse(body)

    //incase of not success
    if(!response.success)
    {
        return res.status(400).json({message: "Invalid credentials!"})
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
        return res.status(400).json({message: "Invalid credentials"})
    }

    const isMatch = await bcrypt.compare(body.password, user.password)
    //incase of no matching password
    if(!isMatch)
    {
        return res.status(400).json({message: "Invalid credentials"})
    }

    const JWT_SECRET = process.env.JWT_SECRET || ""
    //create jwt token
    const token = jwt.sign({id: user?.id}, JWT_SECRET, {expiresIn: "3d"})   

    //create a cookie
    res.cookie("token", token, {
        httpOnly: true, //cannot access with javascript (prevent XSS attack)
        path:"/",
        maxAge: 3*24*60*60*1000,
        sameSite: "strict",
        secure: true    
    })

    return res.json({
        message: "Logged in successfully!"
    })
}


//logout function
export function logout(req:any, res:any){

    //clear the cookie
    res.clearCookie("token")

    return res.json({
        message: "Logged out successfully!"
    })
}



export default router;