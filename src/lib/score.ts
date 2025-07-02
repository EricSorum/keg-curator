import { Beer, FormResultsClass, preferredBreweries } from "./beers"
import { fancinessFunc } from "./utils";

export default function calculateScore(beer: Beer, formResults: FormResultsClass) {
  const { name, brewery, style, origin, region, value, cuisine } = beer;
  const { businessName, numberOfHandles, minnesotaOnly, craftOnly, fanciness, chosenCuisine } = formResults;

  const scoreObj = {
    breweryScore: preferredBreweries.includes(brewery) ? 1 : 0,
    originScore: craftOnly && origin === "Craft" ? 3 : 0,
    regionScore: minnesotaOnly && region === "Minnesota" ? 3 : 0,
    valueScore: value === fancinessFunc(fanciness) ? 2 : 0,
    cuisineScore: cuisine.includes(chosenCuisine) ? 4 : 0,
  };

  const score = Object.keys(scoreObj).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })

  return score;
}