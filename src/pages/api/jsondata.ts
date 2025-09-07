import { Beer } from '@/lib/beers';
import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../lib/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      await client.connect();
      const db = client.db("keg_curator");
      const rawBeers = db.collection("beer_list");
      const beerArr = await rawBeers.find().toArray();
      let beers: Beer[] =[];
      for (let i = 0; i < beerArr.length; i++) {
        const doc = beerArr[i];
        beers.push(new Beer(doc.name, doc.brewery, doc.style, doc.origin, doc.region, doc.value, doc.cuisine, 0));

      }
      // Sendinging beers through the API here would take away any methods on the Beer class.
      // I could rehydrate the method on the other end, 
      // but I might as well use a utility function instead of a method.
      res.status(200).json(beers);
  } catch (error) {
      res.status(500).json({ error: 'Failed to fetch beers' });
  } finally {
      await client.close();
  }
}
