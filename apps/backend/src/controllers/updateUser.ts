import { Request, Response } from "express";
import { prismaClient as client } from "@repo/db/client";


export default async function updateUser(req:Request, res:Response) {
    const userId = req.body.userId; 
    try{
        const userInfo = await client.user.findUnique({where:{id:userId}})
        await client.user.update({where:{id:userInfo?.id},data:{imgUrl:req.body.imgUrl, imgPublicId:req.body.imgPublicId}})
        if(userInfo?.role =="STUDENT"){
            const studentInfo = await client.student.update({where:{email:userInfo.email},data:{
                firstName:req.body.firstName,
                lastName: req.body.lastName,
                phone: req.body.phone,
                address:req.body.address
            }})
 
        }
        if(userInfo?.role =="ADMIN"){
            const studentInfo = await client.admin.update({where:{email:userInfo.email},data:{
                firstName:req.body.firstName,
                lastName: req.body.lastName,
                phone: req.body.phone,
                address:req.body.address
            }})
 
        }
        if(userInfo?.role == "EMPLOYEE"){
            const studentInfo = await client.employee.update({where:{email:userInfo.email},data:{
                firstName:req.body.firstName,
                lastName: req.body.lastName,
                phone: req.body.phone,
                address:req.body.address
            }})
 
        }

        res.status(200).json({
            message:"update successfull "
        })
    }catch(err){
        console.log(err)
    }
}