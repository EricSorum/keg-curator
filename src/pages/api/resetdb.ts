import { client } from '@/lib/client';
// import { getRawBeers } from '@/lib/getrawbeers';
import { Beer } from'@/lib/beers';
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default async function resetDatabase(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    await client.connect();
    
    const db = client.db("keg_curator");
    const beerCollection = db.collection("beer_list");
    
    const rawBeers = await getRawBeers();    
    if (rawBeers) {
      await beerCollection.insertMany(rawBeers);
      res.status(200).json({ message: "Database reset successful" });
    } else {
      res.status(400).json({ message: "No beers found to insert" });
    }
  } catch (error) {
    console.error("Error resetting database:", error);
    res.status(500).json({ message: "Error resetting database" });
  } finally {
    await client.close();
  }
}

export async function getRawBeers(): Promise<Beer[]> {
  const beerListSrc = '/data/beers.json';
  const response = await fetch(beerListSrc);
  const beers = await response.json();
  return beers;
}