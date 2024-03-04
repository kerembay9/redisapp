import { addToRoom } from "@/lib/redis";

export default async function handler(req,res) {
    try {
    const id = req.query.id;
    console.log('id is', id)
    await addToRoom(id,req.body.key,req.body.value);
    return res.status(200).send('Successfully added to room')
    } catch{
    return res.status(400).send('Failed to add to room')              
    }
}