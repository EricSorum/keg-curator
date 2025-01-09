import { Beer, FormResultsClass } from "./beers"

function chooseIpa(currentSelections: Beer[], beerList: Beer[]) {
  
  const ipas = beerList.filter((beer) => beer.style = "IPA");
  const ipas2 = ipas.filter((beer) => currentSelections.includes(beer))
  const randomIndex = Math.floor(Math.random()) * ipas2.length
  return ipas2[randomIndex];
}


export default function sortBeer(formResults: FormResultsClass, beerSelection: Beer[], beerList: Beer[]) {
  const { numberOfHandles } = formResults;
  // put logic here to prioritize lagers and ipas
  // create a function to make proper ratio between beers
  // up to 3 lagers and 3 ipas... then misc..?
  let numberOfIpas: number = 0;
  let numberOfLagers: number = 0;
  let numberOfMisc: number = 0;
  if (numberOfHandles < 5) {
    numberOfIpas = 1;
    numberOfLagers = numberOfHandles - 1;
  } else if (numberOfHandles < 7) {
    numberOfIpas = 2;
    numberOfLagers = numberOfHandles - 1;
  } else {
    numberOfIpas = Math.floor(numberOfHandles*.40);
    numberOfLagers = Math.floor(numberOfHandles*.40);
    numberOfMisc = numberOfHandles - numberOfIpas - numberOfLagers;
  }
  console.log(numberOfIpas + '...' + numberOfLagers);

  // So now decide preferred order of IPAs and Lagers
  // I'll need a ranking system... maybe just rank breweries...?
  // Make another object where breweries are ranked.
  // then decide how to choose misc beers.

 // for now I'll try to just get a random selection going.
  for (let i = 0; i < numberOfIpas+1; i++) {
    beerSelection.push(chooseIpa(beerSelection, beerList))
  }
  return 
}

// write a few functions that return a beer of a certain kind
// for example, a misc beer randomly selects a beer that is not ipa/lager
// each function takes in the current selection so far as a list 
// it then subtracts the current selection from the main array of beers
// and so it won't select something that's already selected.

// the form object tells it which functions to run.

// initially decide how many of each style to get 
// then just run each function for each star that many times.
