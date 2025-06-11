import express from "express"
import { protectRoute } from "../middleware/auth.middleware"
import { createComment, createPost, deletePost, getComments, getFeedPosts, getPostById, likePost } from "../controller/post.controller"
import multer from "multer"

const router = express.Router()
// Extract the image file from the FormData
const upload = multer({storage: multer.memoryStorage()})

router.get("/", protectRoute, getFeedPosts)
router.post("/create", protectRoute, upload.single("image"), createPost)
router.delete("/delete/:id", protectRoute, deletePost)
router.get("/:id", protectRoute, getPostById)
router.post("/:id/comment", protectRoute, createComment)
router.get("/:id/getComments", protectRoute, getComments)
router.post("/:id/like", protectRoute, likePost)

export default router