import { client } from '@/lib/client';
import { Beer } from '@/lib/beers';
import type { NextApiRequest, NextApiResponse } from 'next';
import { readFile } from 'fs/promises';
import path from 'path';

type ResponseData = {
  message: string;
  insertedCount?: number;
};

// REST API to reset the database with new data

async function getRawBeers(): Promise<Beer[]> {
  try {
    // Find JSON file created by the local script
    const beerListSrc = path.join(process.cwd(), 'scripts/data/beerjson.json');
    const fileContent = await readFile(beerListSrc, 'utf-8');
    // JSON file becomes the raw data we use in this API
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Could not find JSON data:`, error);
    // Return empty array to prevent crash and align with function return type.
    return [];
  }
}

export default async function resetDatabase(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  if (process.env.NODE_ENV !== "development") {
    return res.status(403).json({ message: "This API is only available in development mode." });
  }

  // Make sure method is POST
  if (req.method !== 'POST') {
    return res.status(405)
    .setHeader("Allow", "POST")
    .json({ message: `REST API requires POST method.  Your method is ${req.method}` });
  }

  try {
    await client.connect();
    const db = client.db('keg_curator');
    const beerCollection = db.collection('beer_list');

    // Drop current data collection
    const collections = await db.listCollections({ name: 'beer_list' }).toArray();
    if (collections.length > 0) {
      await beerCollection.drop();
      console.log('Dropped current beer_list collection.');
    }

    // Create new beer_list collection
    // await db.createCollection('beer_list');
    // console.log('Successfully created new beer_list collection');

    // Add new beers to beer_list
    const rawBeers = await getRawBeers();
    if (!rawBeers || rawBeers.length === 0) {
      return res.status(400).json({ message: 'There is no raw data to insert.' });
    }

    // Use MongoDB method insertMany to add beers to beer_list collection
    const result = await db.collection<Beer>('beer_list').insertMany(rawBeers);
    console.log(`Inserted ${result.insertedCount} documents into beer_list collection.`);

    res.status(200).json({ message: 'Successfully reset database!', insertedCount: result.insertedCount });
  } catch (error) {
    console.error("Reset error:", error)
    res.status(500).json({ message: "An error occurred while resetting the database." });
  } finally {
    client && await client.close();
  }
}
