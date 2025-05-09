import { Request,Response } from 'express'
import z from 'zod'
import { prismaClient as client} from '@repo/db/client'

export default async function addCountry(req:Request, res:Response){
    

    const UserInput = z.object({
        country:z.string()

    })

    const isValid = UserInput.safeParse({
        country:req.body.country
    })

    if(!isValid.success){
        const errorMessage = isValid.error.formErrors
        res.status(411).json({
            country:errorMessage.fieldErrors.country
        })

        return;
    }


    try{

        const exist = await client.countries.findFirst({where:{country:req.body.country}})

        if(exist){
            res.status(403).json({
                message:"country already exist"
            })
            return;
        }
        
        const roomId = await client.chat.create({
            data:{
                chatType:"GROUP",
                adminId:req.body.userId, 
                roomLink: req.body.country,
                chatName: req.body.country
            }
        })

        await client.countries.create({data:{

            country:req.body.country
        }})
        res.status(200).json({
            roomId : roomId.id, 
            message:"country added"
        })

       

    }catch(err:any){
        if(err?.code == 11000){
            res.status(411).json({
                message:"country already exists"
            })
            return 
        }

        console.log(err)
        res.status(500).json({
            message:"internal server error",
            error:err
        })
    }


}