import { readFile, writeFile } from "fs/promises";
import path from "path";

async function getRawBeers() {

  class Beer {
    constructor(
      name,
      brewery,
      style,
      origin,
      region,
      value,
      cuisine
    ) {
      this.name = name;
      this.brewery = brewery;
      this.style = style;
      this.origin = origin;
      this.region = region;
      this.value = value;
      this.cuisine = cuisine;
    }
  }

  const rawBeerList = await readTxtFile(path.join(process.cwd(), 'scripts', 'data', 'beerlist.txt'))
  const beers = [];
  let beersArr = [];

  if (rawBeerList && rawBeerList.length) {
   beersArr = rawBeerList.split(/\r?\n/).filter((e) => e.length);
  }

  const numberOfKeys = 7;

  while (beersArr.length > numberOfKeys) {  
    const newBeerArr = beersArr.splice(0, numberOfKeys);
    const newBeer = new Beer(
      newBeerArr[0], // name
      newBeerArr[1], // brewery
      newBeerArr[2], // style
      newBeerArr[3], // origin
      newBeerArr[4], // region
      newBeerArr[5], // value
      newBeerArr[6].replace("Cuisine: ", "").split(", ") // cuisine
    );
    beers.push(newBeer);
  }

  const beerString = JSON.stringify(beers);
  await writeJsonFile(path.join(process.cwd(), 'scripts', 'data', 'beerjson.json'), beerString)
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