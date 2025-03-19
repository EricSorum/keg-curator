import { fetchMongoList } from "@/lib/mongoclient";
import { NextApiRequest, NextApiResponse } from 'next';
	
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
      const client = await fetchMongoList;
      const db = client.db("sample_mflix");
      const beers = await db
          .toArray();
      res.json(beers);
  } catch (e) {
      console.error(e);
  }
}