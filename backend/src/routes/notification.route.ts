import express from "express"
import { protectRoute } from "../middleware/auth.middleware"
import { deleteNotification, getUserNotifications, markNotification } from "../controller/notification.controller"

const router = express.Router()

router.get("/", protectRoute, getUserNotifications)
router.put("/:id/read", protectRoute, markNotification)
router.put("/:id", protectRoute, deleteNotification)

export default router
