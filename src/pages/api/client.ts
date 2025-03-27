import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not defined');
}

export const client = new MongoClient(process.env.MONGODB_URI);