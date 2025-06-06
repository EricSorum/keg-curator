import { Beer } from './beers';
import { fancinessFunc, randomIndex } from './utils';
  
export default function picker(style: string, beerList: Beer[], fanciness: number) : Beer {

  // Ok so the array is sorted first.

  // need to pick beer that's first of all the right style
  // preferably the right fanciness.


  let newBeer: Beer = beerList[randomIndex(beerList.length)];
  const getFanciness = fancinessFunc(fanciness);
  beerList = beerList.filter((beer) => beer.value === getFanciness);

  // so need various levels of specificity
  // the algorithm should increase likeliness of choosing a beer that fits the type
  // first try to find one that meets all criteria - e.g. style, cuisine, fanciness
  // if not then find one that at least fits the style.
  // if not then find anything

  // so i can either eliminate them or find first instance 

  function findBeer(): Beer {
    // This makes an attempt to find a beer with both matching style and value.
    let styleAndValue = beerList.slice(0, 15).find((beer) => beer.style === style && beer.value === getFanciness)
    // Otherwise it just returns a matching style.
    let styleOnly = beerList.find((beer) => beer.style === style);
    let defaultSelection = beerList[0];

    if (styleAndValue) {
      return styleAndValue;
    } else if (styleOnly) {
      return styleOnly;
    } else {
      return defaultSelection;
    }
  }

  newBeer = findBeer();

  return newBeer;

}