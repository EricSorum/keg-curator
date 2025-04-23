import { Beer, FormResultsClass } from "./beers"
import { selectBeers } from "./utils"

export function createMenu(formResults: FormResultsClass, beerList: Beer[]) {

  const { numberOfHandles, minnesotaOnly, craftOnly, fanciness } = formResults;

  if (minnesotaOnly) {
    beerList = beerList.filter((beer) => beer.region === "Minnesota")
  }

  // filter by craft beer only?
  if (craftOnly) {
    beerList = beerList.filter((beer) => beer.origin === "Craft")
  }
  // Filter by region/origin according to cuisine?

  // Start off by choosing a few basic lagers and IPAs.
  let menu: Beer[] = [];
  const numberOfBasics = Math.floor(numberOfHandles/4);

  const basicStyles = ["IPA", "Hazy IPA", "Light Lager"];

  basicStyles.forEach((style) => {
    menu.concat(selectBeers(style, numberOfBasics, beerList, fanciness, menu))})

  const numberOfMiscBeers = numberOfHandles - menu.length;
  console.log(numberOfMiscBeers)
  let newBeers = selectBeers("misc", numberOfMiscBeers, beerList, fanciness, menu)
  menu = menu.concat(newBeers);

  return menu;
}