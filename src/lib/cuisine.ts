import { Beer, FormResultsClass } from "./beers"

export default function cuisineFunc(formResults: FormResultsClass): Beer[] {
   const { numberOfHandles, minnesotaOnly, craftOnly, fanciness, cuisine } = formResults;

   console.log( numberOfHandles, minnesotaOnly, craftOnly, fanciness, cuisine);
  // TRANSFORM CUISINE STRING INTO ARRAY .split("|", ...)

  // maybe a switch statement for cuisine - run a different func for each
  // i.e. make sure sapporo, etc is for Japan, and if budget then do Asahi
  // basically a few standard beers to add for each.
  // the cuisine function either sorts the menu or 
  // so maybe this function adds some beers straight up... 
  return [];
}