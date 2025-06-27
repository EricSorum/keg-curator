import { client } from '@/lib/client';
import { Beer } from'@/lib/beers';
import type { NextApiRequest, NextApiResponse } from 'next'
import { readFile } from 'fs/promises';
import path from 'path';

type ResponseData = {
  message: string;
}

export default async function resetDatabase(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
  ) {

  async function getRawBeers(): Promise<Beer[]> {
    try {
      const beerListSrc = path.join(process.cwd(), 'src/lib/beerjson.json');
      
      const fileContent = await readFile(beerListSrc, 'utf-8');
      
      const beers = JSON.parse(fileContent);
      return beers;
    } catch (error) {
      return [];
    }
  }

  try {
    await client.connect();
    
    const db = client.db("keg_curator");
    const beerCollection = db.collection("beer_list");
    
    const rawBeers = await getRawBeers();
    
    if (rawBeers && rawBeers.length > 0) {

      const result = await beerCollection.insertMany(rawBeers);
      console.log('Inserted documents:', result.insertedCount);
      res.status(200).json({ message: "Database reset successful!" });
    } else {
      res.status(400).json({ message: "No beers found to insert" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error resetting database" });
  } finally {
    await client.close();
  }
} 