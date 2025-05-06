import { Beer, FormResultsClass, emptyBeer } from "./beers"
// import { selectBeers } from "./utils"
import picker from "./picker";

export default function createMenu(formResults: FormResultsClass, beerList: Beer[]) {

  const { numberOfHandles, minnesotaOnly, craftOnly, fanciness } = formResults;
  if (minnesotaOnly) {
    beerList = beerList.filter((beer) => beer.region === "Minnesota");
  }

  // filter by craft beer only?
  if (craftOnly) {
    beerList = beerList.filter((beer) => beer.origin === "Craft");
  }
  // Filter by region/origin according to cuisine?

  // Start off by choosing a few basic lagers and IPAs.
  let menu: Beer[] = [];

  const basicStyles = ["IPA", "Hazy IPA", "Lager"];
  const numberOfBasics = Math.floor(numberOfHandles/(basicStyles.length));
  function selectStyles(num: number, style: string) {
    for (let i = 0; i < num; i++) {
      menu.push(picker(style, beerList, menu, fanciness));
    }
  }
  basicStyles.forEach((style) => {
    selectStyles(numberOfBasics, style);
  });

  const numberOfMiscBeers = numberOfHandles - menu.length;

  for (let i = 0; i < numberOfMiscBeers; i++) {
    selectStyles(numberOfMiscBeers, "misc");

  }

  // can i just put it al in on for loop counting down the number of handles?

  if (menu.length < numberOfHandles) {
    selectStyles(menu.length - numberOfHandles, "misc")
  }

  return menu;
}