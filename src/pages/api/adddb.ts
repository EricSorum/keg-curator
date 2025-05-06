import { client } from '@/lib/client';

export default async function resetDatabase() {
  console.log("rest running")

  const db = client.db("keg_curator");
  // recreate beer_list
  db.createCollection("beer_list");


}