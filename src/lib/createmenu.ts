import { Beer, FormResultsClass } from "./beers"

export function createMenu(formResults: FormResultsClass, beerList: Beer[]) {
  const { numberOfHandles } = formResults;
  // Start off by choosing a few basic lagers and IPAs.
  let menu: Beer[] = [];
  const numberOfBasics = numberOfHandles/2; 
  const ipas = beerList.filter((beer) => beer.style = "IPA");



  menu = beerList.slice(0, numberOfHandles);
  return menu;
}