import { Hono } from "hono";
import { protectRoute } from "../middleware/auth.middleware";
import { getSuggestedConnections, getPublicProfile, updateProfile } from "../controller/user.controller";

export const userRoute = new Hono <{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>

userRoute.get("/test", async(c)=>{
    return c.json({
        message: "Hi from user route"
    })
})

userRoute.get("/suggestions", protectRoute, getSuggestedConnections)    //route to get the suggested new connections
userRoute.get("/:username", protectRoute, getPublicProfile) //get the new user's profile
userRoute.put("/profile", protectRoute, updateProfile)  //route to update the profile of user
