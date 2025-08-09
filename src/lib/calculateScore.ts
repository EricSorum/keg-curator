import { fancinessFunc } from "./utils";
import { Beer, FormResultsClass } from "./beers";

export default function calculateScore(beer: Beer, formResults: FormResultsClass) {
  const { minnesotaOnly, craftOnly, fanciness, chosenCuisine } = formResults;
  const { name, brewery, origin, region, value, cuisine } = beer;

  const calculateCuisineScore = (): number => {
    let returnScore = 0;
    const imports = ["Japanese", "Latin American"];

    // Shared makes sure that the above imports are exclusive.
    // i.e. there won't likely be Japanese beers alongside Latin American beers.

    const shared = imports.filter(e => cuisine.includes(e));

    // need another filter:
    // if the beer is not latin american, beers from mexico should not be included
    if (cuisine.length < 3 || chosenCuisine.length < 3) {
      returnScore = 0;
    } else if (region === "Japan" && chosenCuisine !== "Japananese") {
      return -2;
    } else if (region === "Mexico" && chosenCuisine !== "Latin American") {
      return -2;
    } else if (shared.length && !cuisine.includes(chosenCuisine)) {
      returnScore = -2;
    } else if (cuisine.includes(chosenCuisine)) {
      returnScore = 2;
    }
    return returnScore;
  }

  // maybe instead of fanciness func, we can just weight values here

  const scoreObj = {
    // breweryScore: preferredBreweries.includes(brewery) ? 1 : 0,
    originScore: craftOnly && origin === "Craft" ? 2 : 0,
    regionScore: minnesotaOnly && region === "Minnesota" ? 2 : 0,
    valueScore: value === fancinessFunc(fanciness) ? 2 : 0,
    cuisineScore: calculateCuisineScore()
  };

  // console.log(name, scoreObj.originScore, scoreObj.regionScore, scoreObj.valueScore, scoreObj.cuisineScore)
  
  // Add up each value in scoreObj
  const score = Object.values(scoreObj).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  beer.score = score;
}