import { client } from '@/lib/client';
import { getRawBeers } from '@/lib/getrawbeers';

export default async function resetDatabase() {
  console.log("rest running")

  const db = client.db("keg_curator");
  const beerCollection = db.collection("beer_list");

//   beerCollection.insertMany([{
//     name: "Test beer",
//     brewery: "test",
//     style: "test",
//     origin: "test",
//     region: "test",
//     value: "test",
//   },
//   {
//   name: "Test beer2",
//   brewery: "test",
//   style: "test",
//   origin: "test",
//   region: "test",
//   value: "test",
// }
// ])
  
  const rawBeers = await getRawBeers();    
  if (rawBeers) {
    beerCollection.insertMany(rawBeers);
  }
}