import { Hono } from "hono";
import { protectRoute } from "../middleware/auth.middleware";
import { sendConnectionRequest, acceptConnectionRequest, rejectConnectionRequest, getConnectionRequests, getUserConnections, removeConnection,getConnectionStatus } from "../controller/connection.controller";

export const connectionRoutes = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>

connectionRoutes.get("/request/:userId", protectRoute, sendConnectionRequest)
connectionRoutes.put("/accept/:requestId", protectRoute, acceptConnectionRequest)
connectionRoutes.put("/reject/:requestId", protectRoute, rejectConnectionRequest)

//get all connection request for the current user
connectionRoutes.get("/requests", protectRoute, getConnectionRequests)

//get all connections for a user
connectionRoutes.get("/", protectRoute, getUserConnections)

connectionRoutes.delete("/:userId", protectRoute, removeConnection)
connectionRoutes.get("/status/:userId", protectRoute, getConnectionStatus)
