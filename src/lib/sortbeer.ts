import { Beer } from "../data/beers"

export default function sortBeer(arr: Beer[], numberOfHandles: number) {
  console.log('sortbeer ' + arr);
  // put logic here to prioritize lagers and ipas
  // create a function to make proper ratio between beers
  // up to 3 lagers and 3 ipas... then misc..?
  let numberOfIpas: number = 0;
  let numberOfLagers: number = 0;
  let numberOfMisc: number = 0;
  if (numberOfHandles < 5) {
    numberOfIpas = 1;
    numberOfLagers = numberOfHandles - 1;
  } else if (numberOfHandles < 7) {
    numberOfIpas = 2;
    numberOfLagers = numberOfHandles - 1;
  } else {
    numberOfIpas = Math.floor(numberOfHandles*.40);
    numberOfLagers = Math.floor(numberOfHandles*.40);
    numberOfMisc = numberOfHandles - numberOfIpas - numberOfLagers;
  }
  console.log(numberOfIpas + '...' + numberOfLagers)

}