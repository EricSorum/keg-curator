import { Beer, FormResultsClass } from "./beers"
import { selectBeers } from "./utils"



export function createMenu(formResults: FormResultsClass, beerList: Beer[]) {

  const { businessName, numberOfHandles, minnesotaOnly, fanciness } = formResults;

  if (minnesotaOnly) {
    beerList = beerList.filter((beer) => beer.region === "Minnesota")
    console.log()
  }


  // remove certain perecentage of fancy/budget beers...?
  // make results a certain percentage of budget/premium/presitige
  // if num is 30 for example, 3/5 is premium, 2/5 is budget..

  // or maybe there's just a window of 
  // util that chooses if a certain beer should be fancy or not...
  // so write util function that cycles between budget/premium/presitge
  //. based on fanciness number.

  

  // Start off by choosing a few basic lagers and IPAs.
  let menu: Beer[] = [];
  const numberOfBasics = Math.floor(numberOfHandles/4);



  menu = menu.concat(selectBeers("IPA", numberOfBasics, beerList, menu, fanciness))
  menu = menu.concat(selectBeers("Hazy IPA", numberOfBasics, beerList, menu, fanciness))
  menu = menu.concat(selectBeers("Lager", numberOfBasics, beerList, menu, fanciness))

  const numberOfMiscBeers = numberOfHandles - menu.length;
  menu = menu.concat(selectBeers("misc", numberOfMiscBeers, beerList, menu, fanciness));

  return menu;
}