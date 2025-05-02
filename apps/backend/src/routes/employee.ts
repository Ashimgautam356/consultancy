import { Router } from "express";
import signup from "../controllers/employee/auth/signup";
import createUser from "../controllers/employee/createUsers";
import { auth } from "../middleware/authenticate";


export const employeeRouter:Router = Router()

employeeRouter.post("/signup",signup)

employeeRouter.use(auth)
employeeRouter.post("/create-user",createUser)
