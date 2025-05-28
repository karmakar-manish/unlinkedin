import { Hono } from "hono";
import { protectRoute } from "../middleware/auth.middleware";
import { getUserNotifications, markNotification, deleteNotification } from "../controller/notification.controller";

export const notificationRoutes = new Hono <{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>

notificationRoutes.get("/", protectRoute, getUserNotifications)
notificationRoutes.put("/:id/read", protectRoute, markNotification)
notificationRoutes.get("/:id", protectRoute, deleteNotification)
