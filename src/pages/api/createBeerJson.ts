import { Beer } from '../../lib/beers';

export async function getRawBeers() {
  // const beerListSrc = '/beerlist.txt';


  // const filePath = path.join(process.cwd(), 'src', 'lib', 'beerlist.txt');

  // const beertxt = fs.readFileSync(filePath, 'utf-8');


  // const response = await beertxt;
  
  const beerListSrc = 'src/lib/beerlist.txt';
  const response = await fetch(beerListSrc);
  const rawBeerList = await response.text();

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

  const beerString = JSON.stringify(beers);
  const fs = require('fs');
  const callback = (err: Error) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File written successfully!');
  fs.writeFile('beerlist.json', beerString, 'utf8', callback(err));
  
  // console.log("getRawBeers...." + beers[0])
  }
}