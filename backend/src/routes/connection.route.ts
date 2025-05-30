import express from "express"
import { getCurrentUser, protectRoute } from "../middleware/auth.middleware"
import { sendConnectionRequest, acceptConnectionRequest, rejectConnectionRequest, getConnectionRequests, getUserConnections, removeConnection, getConnectionStatus } from "../controller/connection.controller";


const router = express.Router()

router.post("/request/:userId", protectRoute, sendConnectionRequest)
router.put("/accept/:requestId", protectRoute, acceptConnectionRequest)
router.put("/reject/:requestId", protectRoute, rejectConnectionRequest)

//get all connection request for the current user
router.get("/requests", protectRoute, getConnectionRequests)

//get all connections for a user
router.get("/", protectRoute, getUserConnections)

router.delete("/:userId", protectRoute, removeConnection)
router.get("/status/:userId", protectRoute, getConnectionStatus)


export default router;