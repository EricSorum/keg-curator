import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { Beer } from '@/lib/beers';

if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not defined');
}

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await client.connect();
        const db = client.db("keg_curator");
        const rawBeers = db.collection("beer_list");
        const allbeers = await rawBeers.find().toArray();
        
        const beers: Beer[] = allbeers.map(doc => ({
            name: doc.name as string,
            brewery: doc.brewery as string,
            style: doc.style as string,
            origin: doc.origin as string,
            region: doc.region as string,
            value: doc.value as string,
        }));
        
        res.status(200).json(beers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch beers' });
    } finally {
        await client.close();
    }
} 