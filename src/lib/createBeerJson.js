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
    ) {}
  }

  // const fs = require('fs');
  // const beerListSrc = './beerlist.txt';
  // const response = await fetch(beerListSrc);
  // const rawBeerList = await response.text();
  const rawBeerList = await readTxtFile("./beerlist.txt")
  const beers = [];
  let beersArr = [];

  if (rawBeerList && rawBeerList.length) {
   beersArr = rawBeerList.split(/\r?\n/).filter((e) => e.length);
  }
  
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

  const beerString = JSON.stringify(beers);
  const callback = (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File written successfully!');
    writeFile('beerlist.json', beerString, 'utf8', callback(err));
  
  // console.log("getRawBeers...." + beers[0])
  }
}
getRawBeers();
// console.log("beers")

async function readTxtFile(filename) {
  try {
    const data = await readFile(filename, "utf8");
    return data;
  } catch (error) {
    console.error(`Error reading ${filename}: ${error}`);
    return [];
  }
}