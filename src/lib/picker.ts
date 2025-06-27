import { Beer } from './beers';
import { fancinessFunc, randomIndex } from './utils';
  
export default function picker(style: string, beerList: Beer[], fanciness: number): Beer {

  const getFanciness: string = fancinessFunc(fanciness);
  function findBeer(): Beer {
    // This makes an attempt to find a beer with both matching style and value.

    // SOMETHING SEEMS TO BE WRONG WITH THE STYLE... NEED TO ADD STYLE ANYWAY.
    // it never sorts by value because there is never a style value
    // let styleAndValue = beerList.slice(0, 15).find((beer) => beer.style === style && beer.value === getFanciness)
    let styleAndValue = beerList.slice(0, 15).find((beer) => beer.value === getFanciness)
    // Otherwise it just returns a matching style.
    if (styleAndValue) {
      return styleAndValue;
    } else  {
      let styleOnly = beerList.find((beer) => beer.style === style);
      return styleOnly ? styleOnly : beerList[0];
    }
  }
  let newBeer: Beer = findBeer();
  return newBeer ? newBeer : beerList[randomIndex(beerList.length)];

}