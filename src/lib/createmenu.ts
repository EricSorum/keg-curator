import { Beer, FormResultsClass } from "./beers"
import cuisineFunc from "./cuisineFunc";
import picker from "./picker";

export default function createMenu(formResults: FormResultsClass, beerList: Beer[]) {

  const { numberOfHandles, minnesotaOnly, craftOnly, fanciness, chosenCuisine } = formResults;

  let list: Beer[] = [...beerList]; // list needs to be a new array with the values of beerList

  if (minnesotaOnly) {
    list.sort(regionCallback);
  }

  if (craftOnly) {
    list.sort(originCallback);
  }

  // if (chosenCuisine.length) {
  //   list.sort(cuisineCallback)
  // }
  function cuisineCallback(a: Beer, b: Beer): number { // Cuisine
    if (a.cuisine.includes(chosenCuisine)) {
    return -1;
    } else {
      return 1;
    }
  }

  let menu: Beer[] = [];

  // get array of cuisine and then cycle through them
  // so then i can also splice each beer from list like i do in the while loop
  // but i shouldn't repeat the splice operation... how do i get it in one while loop?

  const cuisinePicks: Beer[] = cuisineFunc(formResults, list); 

  for (let i = 0; i < numberOfHandles; i++) {

    let newBeer: Beer;

    if (cuisinePicks.length > 0) {
      newBeer = cuisinePicks[i];
    } else {
      newBeer = picker("misc", list, fanciness);
    }

    menu.push(newBeer);
    // I avoid added duplicate beers by splicing each beer from the list.
    list.splice(list.indexOf(newBeer), 1);  
  }
  
  return menu;
}

// Callback functions for sorting.

function regionCallback(a: Beer, b: Beer): number { // Local/Minnesota only
  if (a.region === b.region) {
    return 0; 
  } else if (a.region === "Minnesota") {
    return -1;
  } else {
    return 1;
  }
}

function originCallback(a: Beer, b: Beer): number { // Craft only
  if (a.origin === b.origin) {
    return 0; 
  } else if (a.origin === "Craft") {
    return -1;
  } else {
    return 1;
  }
}


