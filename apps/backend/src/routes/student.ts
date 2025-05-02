import { Router } from "express";
import signup from "../controllers/user/auth/signup";

export const userRouter:Router = Router()

userRouter.post("/signup",signup)

