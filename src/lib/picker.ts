import { Beer, emptyBeer } from './beers';
import { fancinessFunc, randomIndex } from './utils';
  
export default function picker(style: string, beerList: Beer[], fanciness: number) : Beer {

  // const getFanciness = fancinessFunc(fanciness);
  // beerList = beerList.filter((beer) => beer.value === getFanciness);

  return beerList[randomIndex(beerList.length)];
}