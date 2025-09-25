import { fancinessFunc } from "./fancinessFunc";
import Beer from "@/models/Beer";
import FormResultsClass from "@/models/FormResults";
import cuisineFunc from "./cuisineFunc";
import { preferredBreweries } from "./constants";
import { bonus } from "./utils";

export default function calculateScore(beer: Beer, formResults: FormResultsClass) {
  const { minnesotaOnly, craftOnly, fanciness, chosenCuisine } = formResults;
  const { name, brewery, origin, region, value, cuisine } = beer;

  // maybe instead of fanciness func, we can just weight values here

  const scoreObj = {
    originScore: craftOnly && origin === "Craft" ? 2 : -2,
    regionScore: minnesotaOnly && region === "Minnesota" ? 2 : -2,
    valueScore: value === fancinessFunc(fanciness) ? 1 : 0,
    cuisineScore: cuisineFunc(region, cuisine, chosenCuisine),
    preferredScore: preferredBreweries.includes(brewery) ? bonus(40) : 0,
    blackStackBonus: name === "Local 755" ? bonus(50) : 0
  };
  
  // Add up each value in scoreObj
  const score = Object.values(scoreObj).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  beer.score = score;
}