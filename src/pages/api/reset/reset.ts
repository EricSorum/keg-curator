import { client } from '@/lib/client';
import { getRawBeers } from '@/lib/getrawbeers';

export default async function resetDatabase() {
  const db = client.db("keg_curator");
  const rawBeers = db.collection("beer_list");

  


  // use drop() to remove all entries
  if (rawBeers) {
    rawBeers.drop();
  }
  // recreate beer_list
  db.createCollection("beer_list");



  const completeList = await getRawBeers();    
  // then bulkWrite() to add BeerList
  if (completeList) {
    rawBeers.insertMany(completeList);
  }
}