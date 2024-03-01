import { addToRoom } from "@/lib/redis";

export default async function handler(req,res) {
    try {
    await addToRoom(req.body);
    res.status(200)    
    } catch{
    res.status(400)            
    }
    
}