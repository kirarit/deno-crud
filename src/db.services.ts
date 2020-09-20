import { MongoClient } from "https://deno.land/x/mongo@v0.12.1/mod.ts";
const client = new MongoClient();

const DB_URL = "mongodb://localhost:27017";
const DB = "denocrud";
const COLLECTION = "users";
client.connectWithUri(DB_URL);
const users = client.database(DB).collection(COLLECTION); 

export async function getAllUsers() {
    const result = await users.find();
    return result;
}

export async function addUser(user:any) {
    const result = await users.insertOne(user);
    return result;
}

export async function deleteUser(user:any) {
    const result = await users.deleteOne(user);
    return result;
}

export async function updateUser(user:any) {
    const result = await users.updateOne(user,user);
    return result;
}