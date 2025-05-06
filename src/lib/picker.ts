import { Beer, emptyBeer } from './beers';
import { fancinessFunc, randomIndex } from './utils';
  
export default function picker(style: string, beerList: Beer[], menu: Beer[], fanciness: number) : Beer {

  // Filter out all beers that are already in the menu
  beerList = beerList.filter((beer) => !menu.includes(beer));
  
  const standardStyles: string[] = ["IPA", "Hazy IPA", "Lager", "Light Lager", "International Lager"]
  if (style === "misc") {
    beerList = beerList.filter((beer) => !standardStyles.includes(beer.style));
  } else {
    beerList = beerList.filter((beer) => beer.style === style);
  }

  const getFanciness = fancinessFunc(fanciness);
  beerList = beerList.filter((beer) => beer.value === getFanciness);

  // Need utility to find a random index from an array of a certain length.
  // console.log("style list random index: " + randomIndex(beerList.length))

  // Return one beer from the selected list or return empty beer
  // const returnedBeer = beerList[randomIndex(beerList.length)];
  return beerList.length ? beerList[randomIndex(beerList.length)] : emptyBeer;
  // if (returnedBeer) {
  //   return returnedBeer;
  // }
}