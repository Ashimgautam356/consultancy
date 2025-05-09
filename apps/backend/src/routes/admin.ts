
import { Router } from "express";
import signup from "../controllers/admin/auth/signup";
import signin from "../controllers/admin/auth/signin";
import { auth } from "../middleware/authenticate";
import addCountry from "../controllers/admin/addCountry";
import deleteUser from "../controllers/admin/DeleteUsers";
import createUni from "../controllers/admin/uni/createUni";
import getUsers from "../controllers/admin/getUsers";
import addUsers from "../controllers/admin/addUsers";



export const adminRouter:Router = Router()

adminRouter.post("/signup",signup)
adminRouter.post("/signin",signin)


adminRouter.use(auth)

adminRouter.post("/add-country",addCountry)
adminRouter.post("/create-user", addUsers)
adminRouter.delete('/delete-user',deleteUser)

adminRouter.post('/uni/create',createUni)
adminRouter.get("/get-users",getUsers)