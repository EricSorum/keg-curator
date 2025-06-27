import { Beer, FormResultsClass } from "./beers"

const japaneseBeers = {
  budgetLager: "Asahi",
  premiumLager: "Sapporo",
  prestigeLager: "Kirin Ichiban",
  craftLager: "Supra Deluxe",
  localLager: "Supra Deluxe",
}

export default function cuisineFunc(formResults: FormResultsClass, list: Beer[]): Beer[] {
  const { numberOfHandles, minnesotaOnly, craftOnly, fanciness, cuisine } = formResults;

  console.log(numberOfHandles, minnesotaOnly, craftOnly, fanciness, cuisine);

  // so we're returning an array of hand-picked beers, selected based on fanciness, etc.

  // e.g. if it's Japan, select Kirin Ichiban if fancy, if not select Asahi

  // I can choose as many beers as I want... all carefully chosen and basically hard-coded.

  // but first i need to include style
  // then each cuisine option can look like this:

  // doesn't need to be so complicated... there are actually few things I would specifically change here
  // the cuisine sort function can take care of it as well.
  // this is just for a few things like Japanese where I want to be sure some things are included.
  // this is just so we don't leave it up to chance.
  let returnArr: Beer[] = [];

  if (
    cuisine === "Japanese"
    // Styles.includes("Lager")  // maybe I don't need style for now?
    // maybe I just need to control for local/craft inputs?
    // Let's try just the cuisine sort in createMenu first...
  ) {
    // returnArr.push(japaneseBeers.budgetLager)
  }  

  return returnArr;

}