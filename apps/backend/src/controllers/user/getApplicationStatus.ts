import { Request, Response } from "express";
import { prismaClient as prisma } from "@repo/db/client";


export default async function getApplicationStatus(req:Request, res:Response) {

    const userId = (req as any).userId; 

    try{
        const studentInfo = await prisma.user.findFirst({
            where:{
                id:userId
            }
        })

        if(studentInfo?.role !== 'STUDENT'){
            res.status(403).json({
                message:"invalid user request"
            })
            return
        }

        const studentId = await prisma.student.findFirst({
            where:{
                email:studentInfo.email
            }
        })

        console.log(studentId)
        const status = await prisma.applicationStatus.findFirst({
            where:{
                userId: studentId?.id
            }
        });
        console.log(status)

        res.status(200).json({
            status
        })
    }catch(err){
        console.log(err)
    }
}