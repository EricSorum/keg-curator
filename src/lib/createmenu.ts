import { Beer, FormResultsClass } from "./beers"
import { selectBeers } from "./utils"

export function createMenu(formResults: FormResultsClass, beerList: Beer[]) {

  const { numberOfHandles, minnesotaOnly } = formResults;

  if (minnesotaOnly) {
    beerList = beerList.filter((beer) => beer.region === "Minnesota")
    console.log()
  }

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