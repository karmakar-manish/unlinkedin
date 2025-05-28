import { Hono } from "hono";
import { signinController } from "../controller/signin.controller";
import { signupController } from "../controller/signup.controller";
import { logoutController } from "../controller/logout.controller";
import { protectRoute, getCurrentUser } from "../middleware/auth.middleware";

// Hono router instance
export const authRoute = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>()

authRoute.route("/signin", signinController)
authRoute.route("/signup", signupController)
authRoute.route("/logout", logoutController)

//route to get the details of the logged in user
authRoute.get("/me", protectRoute, getCurrentUser)
