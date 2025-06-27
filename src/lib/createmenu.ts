import { Beer, FormResultsClass } from "./beers"
import cuisineFunc from "./cuisine";
import picker from "./picker";

export default function createMenu(formResults: FormResultsClass, beerList: Beer[]) {

  const { numberOfHandles, minnesotaOnly, craftOnly, fanciness } = formResults;

  let list: Beer[] = [...beerList]; // list needs to be a new array with the values of beerList

  if (minnesotaOnly) {
    list.sort(regionCallback);
  }

  if (craftOnly) {
    list.sort(originCallback);
  }



  let menu: Beer[] = [];

  // const cuisineSelections = cuisineFunc();

  // maybe run cuisine just like picker... or maybe picker is what I need to be using here?
  // menu.concat(cuisineFunc());

  for (let i = 0; i < numberOfHandles; i++) {
    const newBeer = picker("misc", list, fanciness);
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
   } else if (a.cuisine === cuisine) {
  return -1;
  } else {
    return 1;
  }
}