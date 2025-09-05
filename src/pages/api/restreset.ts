import { client } from '@/lib/client';
import { Beer } from '@/lib/beers';
import type { NextApiRequest, NextApiResponse } from 'next';
import { readFile } from 'fs/promises';
import path from 'path';

type ResponseData = {
  message: string;
  insertedCount?: number;
};

async function getRawBeers(): Promise<Beer[]> {
  const beerListSrc = path.join(process.cwd(), 'src/lib/beerjson.json');
  const fileContent = await readFile(beerListSrc, 'utf-8');
  return JSON.parse(fileContent);
}

export default async function resetDatabase(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Enforce RESTful POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    await client.connect();
    const db = client.db('keg_curator');
    const beerCollection = db.collection('beer_list');

    // Step 1: Drop collection if it exists
    const collections = await db.listCollections({ name: 'beer_list' }).toArray();
    if (collections.length > 0) {
      await beerCollection.drop();
      console.log('Dropped existing beer_list collection');
    }

    // Step 2: Recreate collection
    await db.createCollection('beer_list');
    console.log('Created new beer_list collection');

    // Step 3: Insert fresh data
    const rawBeers = await getRawBeers();
    if (!rawBeers || rawBeers.length === 0) {
      return res.status(400).json({ message: 'No beers found to insert' });
    }

    const result = await db.collection('beer_list').insertMany(rawBeers);
    console.log(`Inserted ${result.insertedCount} documents`);

    res.status(200).json({ message: 'Database reset successful!', insertedCount: result.insertedCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error resetting database' });
  } finally {
    await client.close();
  }
}
