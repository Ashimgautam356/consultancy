import { Session } from "node:inspector/promises";
import  CredentialsProvider from "next-auth/providers/credentials";
import {prismaClient as prisma} from '@repo/db/client'
import jwt from 'jsonwebtoken'


export interface session extends Session {
    user: {
      id: string;
      jwtToken: string;
      role: string;
      email: string;
      name: string;
    };
  }

export const authOptions = {
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              email: { label: "email", type: "text", placeholder: "jsmith@gmail.com" },
              password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                try{
                    if(!credentials){
                        return null
                    }

                    console.log(credentials.email)
                    console.log(credentials.password)


                    const user = await prisma.user.findUnique({
                        where: { email: credentials.email },
                      });
                    
                      if (!user) return null;
                    
                    //   const isValid = await bcrypt.compare(credentials.password, user.password);
                    //   if (!isValid) return null;
                    
                      const myjwt = jwt.sign({ id: user.id },process.env.JWT_SECRET!,{expiresIn:'365d'});
        
                      await prisma.user.update({
                        where: { id: user.id },
                        data: { token: myjwt },
                      });
                    
                      return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        token: myjwt,
                        role: user.role,
                      };
                }catch(err){
                    console.log(err)
                }
                return null;
              }
              
          })
    ],
    secret: process.env.AUTH_SECRET
    ,
    callbacks: {
        async jwt({ token, user }:any) {
          if (user) {
            token.uid = user.id;
            token.jwtToken = (user as any).token;
            token.role = (user as any).role;
          }
          return token;
        },
        async session({ session, token }:any) {
            const newsession: session = session as session

          newsession.user.id = token.uid as string;
          newsession.user.jwtToken = token.jwtToken as string;
          newsession.user.role = token.role as string;
          return newsession;


        },
    },
    pages:{
        signIn:'/signin'
    }
      
}