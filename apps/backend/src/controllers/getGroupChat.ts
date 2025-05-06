import { Request,Response } from "express";
import { prismaClient as client } from "@repo/db/client";



export default async function getGroupChat (req:Request, res:Response){


    try{
        const groupChats = await client.chat.findMany()

        res.status(200).json({
            groupChats
        })
    }catch(err){
        console.log(err)
    }
}