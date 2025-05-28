import { Hono } from "hono";
import { cors } from "hono/cors";
import {authRoute} from "./routes/auth.route"
import { userRoute } from "./routes/user.route";
import { postRoute } from "./routes/post.route";
import { notificationRoutes } from "./routes/notification.route";
import { connectionRoutes } from "./routes/connection.route";

const app = new Hono()


app.use("/*", cors({
	origin: "http://localhost:5173",	//frontend url
	credentials: true	//for cookie
}))

app.route("/api/v1/auth", authRoute)
app.route("/api/v1/users", userRoute)
app.route("/api/v1/post", postRoute)
app.route("/api/v1/notifications", notificationRoutes)
app.route("/api/v1/connections", connectionRoutes)

export default app;