import { PrismaClient } from "../generated/prisma/client/index.js"



export const prismaClient = new PrismaClient()


// export const prisma = globalThis.prisma ||new PrismaClient();

// declare global {
//   var prisma:| PrismaClient| undefined;
// }

// if (process.env.NODE_ENV === "development") globalThis.prisma = prisma;