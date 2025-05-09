import { Request,Response } from 'express'
import z from 'zod'
import bcrypt from 'bcrypt'
import { prismaClient as client} from '@repo/db/client'

export default async function getUsers(req:Request, res:Response){
    

    try{
        const data= await client.user.findMany();

        res.status(200).json({
            users: data,
            message:"signup sucessfull"
        })

       

    }catch(err:any){

        console.log(err)
        res.status(500).json({
            message:"internal server error",
            error:err
        })
    }


}