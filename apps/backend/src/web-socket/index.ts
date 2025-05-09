import {WebSocketServer,WebSocket} from 'ws'
import jwt from 'jsonwebtoken'
import {prismaClient as client} from '@repo/db/client'
import { number, string } from 'zod';
import 'dotenv/config'


const wss = new WebSocketServer({port:8080})


interface User{
    ws:WebSocket,
    rooms:string[],
    userId: number,
}

const users: User[]=[];
 


function checkUser(token:string): string | null{
    try{

        const decoded = jwt.verify(token,`${process.env.JWT_SECRET}`);
        
        
        if(typeof decoded =='string'){
            return null;
        }
    
        if(!decoded || !decoded.id){
            return null;
        }
        
        return decoded.id
    }catch(er){
        console.log(er)
        return null
    }
}

wss.on('connection',function connection(ws,request){
    const url = request.url; 
    if(!url){
        return; 
    } 

    const queryParams = new URLSearchParams(url.split('?')[1]);
    const token = queryParams.get('token')?? "";
    const userId = checkUser(token) as unknown as number;
    // here we have to check is this user is in the db or not 
    if(userId == null){
        ws.close()
        return null; 
    }

    

    users.push({
        userId,
        rooms:[],
        ws:ws
    })


    ws.on("message",async function message(data){
    // parsing data into json first
    const parsedData = JSON.parse(data as unknown as string);

    if(parsedData.type === "join-room"){
        // for now any one can join the room , we have to first  check the db first that this room does 
        // exist or not , and then we can do other moidficaiton like this user can join or not and other modification

        console.log(parsedData)
        
        const isRoomExist = await client.chat.findFirst({where:{
            id:parsedData.roomId
        }})

        if(!isRoomExist){
            console.log("room doesn't exist")
            return null
        }


        const user = users.find(x => x.ws ===ws )
        user?.rooms.push(parsedData.roomId);

    }

    if(parsedData.type === 'leave-room'){
        const user = users.find(x => x.ws ===ws )
        if(!user){
            return; 
        }

        user.rooms = user?.rooms.filter(x => x===parsedData.room);
    }

    if(parsedData.type === 'chat'){

        const roomId = parsedData.roomId;
        const message = JSON.parse(parsedData.message); 
        // this arch is slow i have to put this in a que to make it more optimitze

        const existingParticipant = await client.chatParticipant.findUnique({
            where: {
              chatId_userId: { chatId: roomId, userId: userId }
            },
            include:{
                User:{
                    select:{
                        id:true,
                        name:true,
                        imgUrl:true
                    }
                }
            }
          });
        
        const userOne = await client.user.findUnique({
            where:{id: userId}
        })


        //   insert admin frist when he/she create the room

          if (!existingParticipant) {
            await client.chatParticipant.create({
              data: {
                chatId: roomId,
                userId: userId,
              }
            });
          }
          
        await client.message.create({
            data:{
                chatId:roomId, 
                senderId:userId,
                message: message.newMessage
            }
        })

        users.forEach(user=>{
            if(user.rooms.includes(roomId)){
                user.ws.send(JSON.stringify({
                    type:"chat",
                    message:message.newMessage,
                    roomId,
                    senderId:userId,
                    sender:{
                        id: userOne?.id,
                        name:userOne?.name, 
                        image:userOne?.imgUrl
                    }
                }))
            }
        })
    }

    
    })
    
})