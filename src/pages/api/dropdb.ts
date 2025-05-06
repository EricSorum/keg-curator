import { client } from '@/lib/client';

export default async function resetDatabase() {

  const db = client.db("keg_curator");
  const beerCollection = db.collection("beer_list");
  
  // use drop() to remove all entries
  if (beerCollection) {
    beerCollection.drop();
  }

}