import { getRoom } from "@/lib/redis";

export default async function handler(req,res) {
    const { id } = req.query;
    console.log(id)
    try {
        const room = await getRoom(id);
        res.status(200).json({room})    
        } catch{
        res.status(400).send('Failed to get room')            
        }
        
}