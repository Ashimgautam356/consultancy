import { Request, Response } from "express";
import { prismaClient as prisma } from "@repo/db/client";


export default async function getCoutnry(req:Request, res:Response) {


    try{
        const countries = await prisma.countries.findMany();

        res.status(200).json({
            countries
        })
    }catch(err){
        console.log(err)
    }
}