import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.route"
import userRoutes  from "./routes/user.route";
import postRoutes  from "./routes/post.route";
import notificationRoutes  from "./routes/notification.route";
import connectionRoutes  from "./routes/connection.route";

dotenv.config()	//for loading the env variables

const app = express()
const port = 3000
app.use(cookieParser())
app.use(express.json({ limit: "5mb"}))	//the size of the image in the body
app.use(cors({
	origin: process.env.CLIENT_URL || "http://localhost:5173",
	credentials: true	//for cookies
}))



app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/users", userRoutes)
app.use("/api/v1/post", postRoutes)
app.use("/api/v1/connections", connectionRoutes)
app.use("/api/v1/notifications", notificationRoutes)
app.use("/api/v1/connections", connectionRoutes)

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})