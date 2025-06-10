import { Beer } from './beers';
import { fancinessFunc, randomIndex } from './utils';
  
export default function picker(style: string, beerList: Beer[], fanciness: number) : Beer {

  let newBeer: Beer = beerList[randomIndex(beerList.length)];
  const getFanciness = fancinessFunc(fanciness);

  function findBeer(): Beer {
    // This makes an attempt to find a beer with both matching style and value.
    let styleAndValue = beerList.slice(0, 15).find((beer) => beer.style === style && beer.value === getFanciness)
    // Otherwise it just returns a matching style.
    if (styleAndValue) {
      return styleAndValue;
    } else  {
      let styleOnly = beerList.find((beer) => beer.style === style);
      return styleOnly ? styleOnly : beerList[0];
    }
  }
  newBeer = findBeer();

  return newBeer;

}