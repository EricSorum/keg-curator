import { Beer } from './beers';
import { fancinessFunc, randomIndex } from './utils';
import { emptyBeer } from './beers';
  
export function chooseBeer(style: string, beerList: Beer[], menu: Beer[], fanciness: number) : Beer {

  // Filter out all beers that are already in the menu
  let styleList: Beer[] = beerList.filter((beer) => !menu.includes(beer));
  
  const standardStyles: string[] = ["IPA", "Hazy IPA", "Lager", "Light Lager", "International Lager"]
  if (style === "misc") {
    styleList = beerList.filter((beer) => !standardStyles.includes(beer.style));
  } else {
    styleList = beerList.filter((beer) => beer.style === style);
  }
  // const shuffleList: Beer[] = shuffle(styleList);


  const getFanciness = fancinessFunc(fanciness);
  styleList = styleList.filter((beer) => beer.value !== getFanciness);

  // Need utility to find a random index from an array of a certain length.
  console.log("style list random index: " + randomIndex(styleList.length))

  // Return one beer from the selected list or return empty beer
  return styleList.length ? styleList[randomIndex(styleList.length)] : emptyBeer;

  // return default beer object that basically shows empty beer if no beer.

}