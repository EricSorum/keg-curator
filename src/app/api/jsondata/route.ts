import { NextResponse } from 'next/server';
import { client } from '@/lib/client';
import Beer from '@/models/Beer';

export async function GET() {
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
      return NextResponse.json(beers)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch beers' }, { status: 500 })
  } finally {
    await client.close();
  }
}
