import { Beer, emptyBeer } from './beers';
import { fancinessFunc, randomIndex } from './utils';
  
export default function picker(style: string, beerList: Beer[], fanciness: number) : Beer {
  let newBeer: Beer = beerList[randomIndex(beerList.length)];
  // const getFanciness = fancinessFunc(fanciness);
  // beerList = beerList.filter((beer) => beer.value === getFanciness);

  // so need various levels of specificity
  // the algorithm should increase likeliness of choosing a beer that fits the type
  // first try to find one that meets all criteria - e.g. style, cuisine, fanciness
  // if not then find one that at least fits the style.
  // if not then find anything

  // so i can either eliminate them

  // maybe i should sort the array first? before using picker

  // maybe one big sort function?
  // or several sort functions...

  

  return newBeer;

}