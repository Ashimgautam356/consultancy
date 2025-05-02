import {Response,Request,NextFunction} from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export async function auth(req:Request,res:Response,next:NextFunction) {
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: 'Unauthorized: Token missing' });
      return
    }

    try {
      const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`) as { id: string };
      console.log(decoded)

      req.userId = decoded.id;

      next();

    } catch (err) {
      console.error('JWT error:', err);
      res.status(403).json({ message: 'Forbidden: Invalid or expired token' });
      return
    }
  } else {
    res.status(401).json({ message: 'Unauthorized: No token provided' });
    return 
  }
    
}