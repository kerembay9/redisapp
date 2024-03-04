import { createClient } from 'redis';
import { v4 as uuidv4 } from 'uuid';

const client = createClient({url: process.env.REDIS_URL});

async function connectToClient(){
    try {
        if (!client.isOpen) {
          await client.connect();
        }
      } catch (error) {
        console.error('Error connecting to Redis:', error);
        throw new Error('Failed to connect to Redis');
    }
}

export async function createRoom(data) {
    try {
        await connectToClient();
    
        const id = uuidv4();
    
        await client.json.set(`room:${id}`, '$', data);
    
        return id;
      } catch (error) {
        console.error('Error creating room:', error);
        throw new Error('Failed to create room');
      }
}

export async function getRoom(id) {
    try {
        await connectToClient();
    
        const room = await client.json.get(`room:${id}`);
    
        return room;
      } catch (error) {
        console.error('Error getting room:', error);
        throw new Error('Failed to get room');
      }
}



export async function addToRoom(id,key,value) {
    try {
    
        await connectToClient();
        console.log(`id:${id},key:${key},value:${value}`)
        const resp = await client.json.set(`room:${id}`, `$.${key}`, value)
        console.log(4)
        return resp;
    } catch (error){
        console.error('Error adding to room: ', error);
        throw new Error('Failed to add to room');
    }
}

export async function updateRoom(id, updates) {
    try {
      await connectToClient();
  
      // Assuming `updates` is an object with key-value pairs to update
      for (const [key, value] of Object.entries(updates)) {
        await client.json.set(`room:${id}`, `$.${key}`, value);
      }
  
      return true; // or any other success indicator
    } catch (error) {
      console.error('Error updating room:', error);
      throw new Error('Failed to update room');
    }
  }