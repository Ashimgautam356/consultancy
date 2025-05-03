import { Request,Response } from "express";
import { prismaClient as client } from "@repo/db/client";



export default async function oneChat (req:Request, res:Response){


    const userId = (req as any).userId; 
    const chatId:number = Number(req.params.specificChat) 

    try{
        const groupChats = await client.chat.findMany({where:{
            id:chatId
        }})
        const countmember = await client.chatParticipant.count({where:{
            chatId: chatId
        }})

        res.status(200).json({
            groupChats,
            countmember
        })
    }catch(err){
        console.log(err)
    }
}