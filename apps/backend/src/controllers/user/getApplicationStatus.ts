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

        const status = await prisma.applicationStatus.findFirst({
            where:{
                userId: studentId?.id
            }
        });

        const appliedOn = await prisma.appliedIn.findMany({
            where:{
                studentId:studentInfo.id
            },
            include:{
                Universities:true, 
                Countries: true
            }
        })

        const documentStatus = await prisma.document.findMany({
            where:{
                userId: userId
            }
        })

        res.status(200).json({
            status,
            appliedOn,
            documentStatus
        })
    }catch(err){
        console.log(err)
    }
}