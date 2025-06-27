import { Beer, FormResultsClass } from "./beers"
import cuisineFunc from "./cuisine";
import picker from "./picker";

export default function createMenu(formResults: FormResultsClass, beerList: Beer[]) {

  const { numberOfHandles, minnesotaOnly, craftOnly, fanciness, cuisine } = formResults;

  let list: Beer[] = [...beerList]; // list needs to be a new array with the values of beerList

  if (minnesotaOnly) {
    list.sort(regionCallback);
  }

  if (craftOnly) {
    list.sort(originCallback);
  }

  if (cuisine.length) {
    // list.sort(cuisineCallback(a: Beer, b: Beer, cuisine: string))
  }


  let menu: Beer[] = [];

  // get array of cuisine and then cycle through them
  // so then i can also splice each beer from list like i do in the while loop
  // but i shouldn't repeat the splice operation... how do i get it in one while loop?

  const cuisineSelections: Beer[] = cuisineFunc(formResults); 

  while (menu.length < numberOfHandles) {

    let newBeer: Beer;

    if (cuisineSelections.length) {
      newBeer = cuisineSelections[0];
      cuisineSelections.splice(0, 1)
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

function cuisineCallback(a: Beer, b: Beer, cuisine: string): number { // Cuisine
  if (a.cuisine === b.cuisine) {
    return 0;
   } else if (a.cuisine.includes(cuisine)) {
  return -1;
  } else {
    return 1;
  }
}

function getCuisineSelection(arr: Beer[]) {
  const returnBeer = arr[0];
  arr
}