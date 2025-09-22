import { shuffle, compareScore } from "./utils";
import Beer from "@/models/Beer";
import FormResultsClass from "@/models/FormResults";
import calculateScore from "./calculateScore";

export default function sortMenu(formResults: FormResultsClass, beerList: Beer[]): Beer[] {
  const { numberOfHandles } = formResults;
  
  // We use a deep copy of beerList for sorting, so we can remove items as they are picked.
  // We first shuffle the list as well, to ensure variety.
  let list = shuffle([...beerList]);

  // Each beer is assigned a score.
  list.forEach((beer) => {
    calculateScore(beer, formResults)
  })

  // Sort menu by score
  list = list.sort(compareScore)

  for (let i = 0; i < 40; i++) {
    console.log(list[i].name, list[i].score)
  }

  let menu: Beer[] = [];

  for (let i = 0; i < numberOfHandles; i++) {
    const newBeer = list[0];
    
    // Add the beer to the menu.
    menu.push(newBeer);

    // We avoid adding duplicate beers by splicing each beer from the list.
    list.splice(0, 1);
  }

  return menu;
}