  import { compareArr } from "./utils";
    /*
      Reserved is a list of beer types we don't use unless specifically called for.
      These are the cuisines that don't have any overlap, according to our purposes.
      So for example, we don't want Japanese beers appearing alongside Latin American
      beers in the same menu.
    */
  import { reserved } from "./constants";
  
  export default function cuisineFunc(region: string, cuisine: string[], chosenCuisine: string): number {

    /* FIRST
      So first of all, we check if the beer's cuisine has any overlap with the reserved array.
      If it there is no overlap, but the chosen cuisine is included in the beer's cuisine,
      we return 1 as a score.  This is a typical return value for when the beer's cuisine does 
      match the user's choice, but it's not one of the imports that we need to worry about.
    */
    if (
      // No overlap between beer's cuisine and reserved array
      !compareArr(cuisine, reserved) && 
      // Beer's cuisine matches the chosen cuisine
      cuisine.includes(chosenCuisine) &&
      // Double-check that user input cuisine choice
      chosenCuisine.length
    ) {

      return 1;

    /* SECOND
      Next, we handle the beers that are in the reserved array.  These are the ones that pose a problem.
      We don't want beers from these vastly different cuisines
      For example, if the chosen cuisine is Japanese, we should not have Latin American beers alongside it.
      If the chosen cuisine is in reserved, we need to eliminate all beers that are in reserved
      that are NOT the same cuisine as the chosen cuisine.
    */
    }  else if (reserved.includes(chosenCuisine) && !cuisine.includes(chosenCuisine)) {
      return -4;
    /* THIRD
      We score big if there is a match between the chosen cuisine, the reserved, and the beer's cuisine.
    */
    } else if (reserved.includes(chosenCuisine) && cuisine.includes(chosenCuisine)) {
      return 3;
    } 

    
    /* LAST
      Finally, we return 0 as a default value.  If there is no connection between the chosen cuisine and
      reserved array, or between the chose cuisine and the beer's cuisine, then cuisine contributes nothing
      to the score.
    */
    return 0;

  }