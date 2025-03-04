import { Beer, FormResultsClass } from "./beers"
import { selectBeers } from "./utils"

export function createMenu(formResults: FormResultsClass, beerList: Beer[]) {

  const { businessName, numberOfHandles, minnesotaOnly, fanciness } = formResults;

  if (minnesotaOnly) {
    beerList = beerList.filter((beer) => beer.region === "Minnesota")
    console.log()
  }


  // remove certain perecentage of fancy/budget beers...?
  // make results a certain percentage of budget/premium/presitige
  

  // Start off by choosing a few basic lagers and IPAs.
  let menu: Beer[] = [];
  const numberOfBasics = Math.floor(numberOfHandles/4);



  menu = menu.concat(selectBeers("IPA", numberOfBasics, beerList, menu))
  menu = menu.concat(selectBeers("Hazy IPA", numberOfBasics, beerList, menu))
  menu = menu.concat(selectBeers("Lager", numberOfBasics, beerList, menu))

  const numberOfMiscBeers = numberOfHandles - menu.length;
  menu = menu.concat(selectBeers("misc", numberOfMiscBeers, beerList, menu));

  return menu;
}