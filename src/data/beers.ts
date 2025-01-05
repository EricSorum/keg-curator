// only use Beer class to construct the beerlist.json.
// use state to deal with data in React itself.
export class Beer {
  constructor(name: string, brewery: string, style: string, origin: string, region: string, value: string) {
    this.name = name;
    this.brewery = brewery;
    this.style = style;
    this.origin = origin;
    this.region = region;
    this.value = value;
  }
  name: string;
  brewery: string;
  style: string;
  origin: string;
  region: string;
  value: string;
}

// Get the list of beers from beerlist.txt and return as json
export async function BeerList(): Promise<Beer[]> {
  const beerListSrc = 'src/data/beerlist.txt';
  const response = await fetch(beerListSrc);
  const rawBeerList = await response.text();

  let beers: Beer[] = [];
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


