import { fancinessFunc, shuffle } from "./utils";
// import picker from "./picker";

export class Beer {
  constructor(
    public name: string,
    public brewery: string,
    public style: string,
    public origin: string,
    public region: string,
    public value: string,
    public cuisine: string[],
    public score: number,
  ) {
      this.name = name;
      this.brewery = brewery;
      this.style = style;
      this.origin = origin;
      this.region = region;
      this.value = value;
      this.cuisine = cuisine;
      this.score = 0;
    }
}

export function calculateScore(beer: Beer, formResults: FormResultsClass) {
  const { minnesotaOnly, craftOnly, fanciness, chosenCuisine } = formResults;
  const { name, brewery, origin, region, value, cuisine } = beer;
  const scoreObj = {
    breweryScore: preferredBreweries.includes(brewery) ? 1 : 0,
    originScore: craftOnly && origin === "Craft" ? 3 : 0,
    regionScore: minnesotaOnly && region === "Minnesota" ? 3 : 0,
    valueScore: value === fancinessFunc(fanciness) ? 2 : 0,
    cuisineScore: cuisine.includes(chosenCuisine) ? 4 : 0,
  };
  
  // Add up each value in scoreObj
  const score = Object.values(scoreObj).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  beer.score = score;
}


export function sortMenu(formResults: FormResultsClass, beerList: Beer[]): Beer[] {
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
    console.log(newBeer.name, newBeer.score)
    // I avoid added duplicate beers by splicing each beer from the list.
    list.splice(0, 1);
  }

  return menu;
}

export class FormResultsClass {
  constructor(
    public businessName: string,
    public numberOfHandles: number,
    public minnesotaOnly: boolean,
    public craftOnly: boolean,
    public fanciness: number,
    public chosenCuisine: string,
  ) {}
}

export const preferredBreweries: string[] = [];

function compareScore(a: Beer, b: Beer) {
  if (a.score > b.score) {
    return -1;
  } else if (a.score < b.score) {
    return 1;
  }
  return 0;
}