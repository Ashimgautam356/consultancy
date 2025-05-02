import {Response,Request,NextFunction} from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'


export async function auth(req:Request,res:Response,next:NextFunction) {
    
    // const token = req.cookies.authToken as String | any; 
    const authHeader = req.headers.authorization;

    if (authHeader?.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        if(!token){
            res.status(401).json({
                message:"unauthorized"
            })
            return; 
        }
        try {
          const decoded:{userId:string,iat:number}|any = jwt.verify(token, `${process.env.NEXTAUTH_SECRET}`);

          req.body.userId = decoded.userId;

          next();
        } catch (err) {
          
            res.status(403).json({ message: 'Invalid or expired token' });
            return
        }
      } else {
        res.status(401).json({ message: 'No token provided' });
        return
      }

    // try{
    //     const isValid:{userId:string,iat:number}|any = jwt.verify(token,`${process.env.JWT_SECRET}`)
     
    //     if(!isValid){
    //         res.status(403).json({
    //         message:"token not valid"
    //         })
    //         return;
    //     }


    //     req.body.userId = isValid.userId; 
    //     next()
    // }catch(err){
    //     res.status(500).json({
    //         message:"internal server error"
    //     })
    // }

    
}