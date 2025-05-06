import { Beer } from './beers';

export async function getRawBeers(): Promise<Beer[]> {
  // const beerListSrc = '/beerlist.txt';


  // const filePath = path.join(process.cwd(), 'src', 'lib', 'beerlist.txt');

  // const beertxt = fs.readFileSync(filePath, 'utf-8');


  // const response = await beertxt;
  
  const rawBeerList = "1";

  const beers: Beer[] = [];
  let beersArr: string[] = [];
  if (rawBeerList && rawBeerList.length) {
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
  console.log(beers[0])
  return beers;
}