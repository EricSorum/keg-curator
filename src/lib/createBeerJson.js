// import { Beer } from './beers';

import { readFile, writeFile } from "fs/promises";

async function getRawBeers() {

  class Beer {
    constructor(
      name,
      brewery,
      style,
      origin,
      region,
      value
    ) {
      this.name = name;
      this.brewery = brewery;
      this.style = style;
      this.origin = origin;
      this.region = region;
      this.value = value;
    }
  }

  const rawBeerList = await readTxtFile("./beerlist.txt")
  // console.log(rawBeerList.length)
  const beers = [];
  let beersArr = [];

  if (rawBeerList && rawBeerList.length) {
   beersArr = rawBeerList.split(/\r?\n/).filter((e) => e.length);
  }
  // console.log(beersArr)
  while (beersArr.length > 6) {  
    const newBeerArr = beersArr.splice(0, 6);
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
  // console.log(JSON.stringify(beers[0]));
  const beerString = JSON.stringify(beers);
  // console.log(beerString)
  await writeJsonFile("./beerjson.json", beerString)
}
getRawBeers();

async function readTxtFile(filename) {
  try {
    const data = await readFile(filename, "utf8");
    return data;
  } catch (error) {
    if (error) {
    console.error(`Error reading ${filename}: ${error}`);
    return [];
    }
  }
}

async function writeJsonFile(filename, data) {
  try {
    await writeFile(filename, data, 'utf8');
    console.log('File written successfully!');  
  }
  catch (error) {
    if (error) {
      console.error('Error writing to file:', error);
      return;
    }
  }
}