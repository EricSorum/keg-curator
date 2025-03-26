import { Beer } from '@/lib/beers';
import { MongoClient } from 'mongodb';

import dotenv from 'dotenv';
dotenv.config();

if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not defined');
}

const client: MongoClient = new MongoClient(process.env.MONGODB_URI);

export async function getBeers(): Promise<Beer[]> {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
        const db = client.db("keg_curator");
        const rawBeers = db.collection("beer_list");
        const allbeers = await rawBeers.find().toArray();
        console.log(allbeers);
        return allbeers.map(doc => ({
            name: doc.name as string,
            brewery: doc.brewery as string,
            style: doc.style as string,
            origin: doc.origin as string,
            region: doc.region as string,
            value: doc.value as string,
            abv: doc.abv as number,
            ibu: doc.ibu as number
        }));
    } catch (err: unknown) {  
        if (err instanceof Error) {
            console.log(err.stack);
        }
        return [];
    }
    finally {
        await client.close();
    }
}

// run().catch(console.dir);