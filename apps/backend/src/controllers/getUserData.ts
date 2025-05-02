

import { Request, Response } from "express";
import { prismaClient as client } from "@repo/db/client";


export default async function getUserData(req:Request, res:Response) {
    const userId = (req as any).userId; 

    try{
        const userInfo = await client.user.findUnique({where:{id:userId},select:{role:true,email:true,imgUrl:true,imgPublicId:true}})

        if(userInfo?.role =="STUDENT"){
            const personalInfo = await client.student.findUnique({where:{email:userInfo.email},select:{
                firstName:true,
                lastName:true,
                phone:true,
                address:true
            }})
            res.status(200).json({
                personalInfo, 
                userInfo

            })
            
            return
            
        }
        if(userInfo?.role =="ADMIN"){
            const personalInfo = await client.admin.findUnique({where:{email:userInfo.email},select:{
                firstName:true,
                lastName:true,
                phone:true,
                address:true
            }})
            res.status(200).json({
                personalInfo, 
                userInfo

            })
            
            return
        }
        if(userInfo?.role == 'EMPLOYEE'){
            const personalInfo = await client.employee.findUnique({
                where:{
                    email:userInfo.email
                },
                select:{
                    firstName:true,
                    lastName:true, 
                    phone:true,
                    address:true
                }
            })            
            res.status(200).json({
                personalInfo, 
                userInfo

            })
            
            return
        }
    }catch(err){
        res.status(500).json({
            message:"error"
        })
        console.log(err)
    }
}