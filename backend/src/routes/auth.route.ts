import express from "express"
import { signup, login, logout, providerLogin } from "../controller/auth.controller";
import { protectRoute, getCurrentUser } from "../middleware/auth.middleware";

const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/providerLogin", providerLogin)
router.post("/logout", logout)

//route to get the details of the logged in user
router.use("/me", protectRoute, getCurrentUser)

export default router