import { createClient } from 'redis';
import { v4 as uuidv4 } from 'uuid';

const client = createClient({url: process.env.REDIS_URL});

async function connectToClient(){
    if(!client.isOpen){
        await client.connect();
    }
}

export async function createRoom(data) {
    await connectToClient();

    const id = uuidv4();

    await client.json.set(`room:${id}`, '$', data)

    return id;
}

export async function addToRoom(data) {
    console.log('add to called')
    await connectToClient();
    const key = data.key
    const value = data.value
    const id = data.id

    const resp = await client.json.set(`room:${id}`, `$.${key}`, value)

    return resp;
}