import { Router } from "express";
import signup from "../controllers/user/auth/signup";
import getApplicationStatus from "../controllers/user/getApplicationStatus";
import { auth } from "../middleware/authenticate";
export const userRouter:Router = Router()

userRouter.post("/signup",signup)

userRouter.use(auth)

userRouter.get("/application-status",getApplicationStatus)