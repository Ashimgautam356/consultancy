import { Request,Response } from "express";
import { prismaClient as client } from "@repo/db/client";



export default async function getGroupChat (req:Request, res:Response){

    const userId = (req as any).userId

    try{
        const groupChats = await client.chat.findMany({where:{
            chatType: "GROUP"
        }})

        res.status(200).json({
            groupChats
        })
    }catch(err){
        console.log(err)
    }
}