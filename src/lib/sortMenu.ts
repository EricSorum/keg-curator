import { fancinessFunc, shuffle } from "./utils";
import { Beer, FormResultsClass, preferredBreweries, compareScore } from "./beers";
import calculateScore from "./calculateScore";

export default function sortMenu(formResults: FormResultsClass, beerList: Beer[]): Beer[] {
  const { numberOfHandles, minnesotaOnly, craftOnly, fanciness, chosenCuisine } = formResults;
  
  // We use a deep copy of beerList for sorting, so we can remove items as they are picked.
  // We shuffle the list as well, to create enough variety.
  let list = shuffle([...beerList]);
  list.forEach((beer) => {
    calculateScore(beer, formResults)
  })
  // sort menu by score
  list = list.sort(compareScore)

  let menu: Beer[] = [];

  for (let i = 0; i < numberOfHandles; i++) {
    const newBeer = list[0];
    menu.push(newBeer);
    // Why is Tropica Fun Pants scoring 4?
    console.log(newBeer.name, newBeer.score, newBeer.cuisine)
    // I avoid added duplicate beers by splicing each beer from the list.
    list.splice(0, 1);
  }

  return menu;
}