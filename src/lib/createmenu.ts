import { Beer, FormResultsClass } from "./beers"
import { selectBeers } from "./utils"

export function createMenu(formResults: FormResultsClass, beerList: Beer[]) {

  const { businessName, numberOfHandles, minnesotaOnly, fanciness } = formResults;

  if (minnesotaOnly) {
    beerList = beerList.filter((beer) => beer.region === "Minnesota")
    console.log()
  }

  // Start off by choosing a few basic lagers and IPAs.
  let menu: Beer[] = [];
  const numberOfBasics = Math.floor(numberOfHandles/4);

  const basicStyles = ["IPA", "Hazy IPA", "Light Lager"];

  basicStyles.forEach((style) => {menu.concat(selectBeers(style, numberOfBasics, beerList, menu, fanciness))})

  const numberOfMiscBeers = numberOfHandles - menu.length;
  menu = menu.concat(selectBeers("misc", numberOfMiscBeers, beerList, menu, fanciness));

  return menu;
}