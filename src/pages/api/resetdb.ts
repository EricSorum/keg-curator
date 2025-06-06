import { client } from '@/lib/client';
import { Beer } from'@/lib/beers';
import type { NextApiRequest, NextApiResponse } from 'next'
import { readFile } from 'fs/promises';
import path from 'path';

type ResponseData = {
  message: string
}

export default async function resetDatabase(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log('API endpoint called');

  async function getRawBeers(): Promise<Beer[]> {
    try {
      const beerListSrc = path.join(process.cwd(), 'src/lib/beerjson.json');
      console.log('Attempting to read file from:', beerListSrc);
      
      const fileContent = await readFile(beerListSrc, 'utf-8');
      console.log('File content length:', fileContent.length);
      
      const beers = JSON.parse(fileContent);
      console.log('Parsed beers:', beers.length);
      return beers;
    } catch (error) {
      console.error('Error reading beer JSON:', error);
      return [];
    }
  }

  try {
    console.log('Attempting to connect to database...');
    await client.connect();
    console.log('Database connected successfully');
    
    const db = client.db("keg_curator");
    const beerCollection = db.collection("beer_list");
    
    const rawBeers = await getRawBeers();    
    console.log('Number of beers to insert:', rawBeers?.length);
    
    if (rawBeers && rawBeers.length > 0) {
      console.log('First beer object:', JSON.stringify(rawBeers[0], null, 2));
      // const result = await beerCollection.insertMany(rawBeers);
      // console.log('Inserted documents:', result.insertedCount);
      res.status(200).json({ message: "Database reset successful" });
    } else {
      console.log('No beers found in the data');
      res.status(400).json({ message: "No beers found to insert" });
    }
  } catch (error) {
    console.error("Error resetting database:", error);
    res.status(500).json({ message: "Error resetting database" });
  } finally {
    console.log('Closing database connection');
    await client.close();
  }
} 