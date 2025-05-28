import { Hono } from "hono"
import { protectRoute } from "../middleware/auth.middleware"
import { getFeedPosts, createPost, deletePost, getPostById, createComment, likePost } from "../controller/post.controller"


export const postRoute = new Hono <{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>

postRoute.get("/", protectRoute, getFeedPosts)
postRoute.post("/create", protectRoute, createPost)
postRoute.delete("/delete/:id", protectRoute, deletePost)
postRoute.get("/:id", protectRoute, getPostById)
postRoute.post("/:id/comment", protectRoute, createComment)
postRoute.post("/:id/like", protectRoute, likePost)