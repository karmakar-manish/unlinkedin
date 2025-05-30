import express from "express"
import { protectRoute } from "../middleware/auth.middleware"
import { getPublicProfile, getSuggestedConnections, updateProfile } from "../controller/user.controller"

const router = express.Router()


router.get("/suggestions", protectRoute, getSuggestedConnections)    //route to get the suggested new connections
router.get("/:username", protectRoute, getPublicProfile) //get the new user's profile
router.put("/profile", protectRoute, updateProfile)  //route to update the profile of user


export default router