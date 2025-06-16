import { client } from '@/lib/client';

export default async function resetDatabase() {

  const db = client.db("keg_curator");
  // recreate beer_list
  db.createCollection("beer_list");


}