import { client } from '@/lib/client';
import { NextResponse } from 'next/server';
import { Beer } from '@/lib/beers';
import { readFile } from 'fs/promises';
import path from 'path';

// REST API to reset the database with new data

export async function POST() {

  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { message: "This API is only available in development mode." },
      { status: 403 }
    );
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

    // Add new beers to beer_list 
    const rawBeers = await getRawBeers();
    if (!rawBeers || rawBeers.length === 0) {
      return NextResponse.json(
        { message: 'There is no raw data to insert.' },
        { status: 400 }
      );
    }

    // Use MongoDB method insertMany to add beers to beer_list collection
    // (automatically adds beer_list collection again)
    const result = await db.collection<Beer>('beer_list').insertMany(rawBeers);
    console.log(`Inserted ${result.insertedCount} documents into beer_list collection.`);
   return NextResponse.json(
      { message: 'Successfully reset database!', insertedCount: result.insertedCount },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reset error:", error)
    return NextResponse.json(
      { message: "An error occurred while resetting the database." },
      { status: 500 }
    );
  } finally {
    client && await client.close();
  }
}

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