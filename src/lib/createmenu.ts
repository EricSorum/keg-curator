import { Beer, FormResultsClass } from "./beers"
import picker from "./picker";

export default function createMenu(formResults: FormResultsClass, beerList: Beer[]) {

  const { numberOfHandles, minnesotaOnly, craftOnly, fanciness } = formResults;
  if (minnesotaOnly) {
    beerList = beerList.filter((beer) => beer.region === "Minnesota");
  }

  if (craftOnly) {
    beerList = beerList.filter((beer) => beer.origin === "Craft");
  }

// instead of choosing same basic styles, just choose misc for now
// then add a form to include custom beers the user requests
// so a field where you can add cards for each style, and the card has a counter to increase
// number of that style

/// run one loop for each handle... guarantee that it will return a beer
// use slice that will alter array each time it adds a beer...

  let menu: Beer[] = [];

  for (let i = 0; i < numberOfHandles; i++) {
    const newBeer = picker("misc", beerList, 0);
    menu.push(newBeer);
    beerList.splice(beerList.indexOf(newBeer), 1);
  }
  


  return menu;
}