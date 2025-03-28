import { Beer } from '@/lib/beers';
import { client } from './client';
import { beertxt } from '@/lib/beertxt';
export async function BeerList(): Promise<Beer[]> {
  // const beerListSrc = '/beerlist.txt';
  const response = await fetch(beertxt);
  const rawBeerList = await response.text();

  const beers: Beer[] = [];
  let beersArr: string[] = [];
  if (rawBeerList && typeof rawBeerList === 'string' && rawBeerList.length) {
   beersArr = rawBeerList.split(/\r?\n/).filter((e) => e.length);
  }
  while (beersArr.length > 6) {  
    const newBeerArr:string[] = beersArr.splice(0, 6);
    // const newBeer = new Beer(...newBeerArr); ------- results in ts error...?
    const newBeer = new Beer(
      newBeerArr[0], // name
      newBeerArr[1], // brewery
      newBeerArr[2], // style
      newBeerArr[3], // origin
      newBeerArr[4], // region
      newBeerArr[5]  // value
    );
    beers.push(newBeer);
  }
  return beers;
}


export default async function resetDatabase() {
  const db = client.db("keg_curator");
  const rawBeers = db.collection("beer_list");

  // use drop() to remove all entries
  // rawBeers.drop();

  const completeList = await BeerList();    
  console.log(typeof completeList, typeof rawBeers);        
  // then bulkWrite() to add BeerList
  // rawBeers.insertMany(completeList)
}
