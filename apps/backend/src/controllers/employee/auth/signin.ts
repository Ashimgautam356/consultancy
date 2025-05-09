import { Request,Response } from 'express'
import z from 'zod'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { prismaClient as client } from '@repo/db/client'

export default async function signin(req:Request,res:Response){
    const UserInput = z.object({
        email: z.string().max(30).min(3).trim().toLowerCase(),
        password:z.string().min(6),
    })

    const isValid = UserInput.safeParse({
        email:req.body.email,
        password:req.body.password,
    })

    if(!isValid.success){
        const errorMessage = isValid.error.formErrors
        res.status(411).json({
            email:errorMessage.fieldErrors.email,
            password:errorMessage.fieldErrors.password,
        })

        return;
    }


    const isUserValid = await client.employee.findFirst({where:{email:req.body.email}});
    if(!isUserValid){
        res.status(404).json({
            message:"user not availabel"
        })
        return;
    }

    const isCorrectPassword = await bcrypt.compare(req.body.password,String(isUserValid.passwordHash))
    if(!isCorrectPassword){
        res.status(411).json({
            message:"password is incorrect"
        })
        return; 
    }
    
    const token = jwt.sign({
        userId: isUserValid.id
    },`${process.env.NEXTAUTH_SECRET}`)

    res.status(200).json({
        message:"login sucessfull",
        name:isUserValid.firstName,
        token: token
    })


}