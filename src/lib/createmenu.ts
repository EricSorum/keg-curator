import { Beer, FormResultsClass } from "./beers"
import picker from "./picker";

export default function createMenu(formResults: FormResultsClass, beerList: Beer[]) {

  const { numberOfHandles, minnesotaOnly, craftOnly, fanciness } = formResults;
  if (minnesotaOnly) {
    beerList = beerList.filter((beer) => beer.region === "Minnesota");
  }

  if (craftOnly) {
    beerList = beerList.filter((beer) => beer.origin === "Craft");
  }

  function sortList(list: Beer[]): Beer[] {

    function regionCallback(a: Beer, b: Beer): number {
      if (a.region === b.region) {
        return 0; 
      } else if (a.region === "Minnesota") {
        return -1;
      } else {
        return 1;
      }
    }
    function originCallback(a: Beer, b: Beer): number {
      if (a.origin === b.origin) {
        return 0; 
      } else if (a.origin === "Craft") {
        return -1;
      } else {
        return 1;
      }
    }

    list.sort(regionCallback);
    list.sort(originCallback);
    
    return list;
  }

  const sortedList = sortList(beerList);

  let menu: Beer[] = [];

  for (let i = 0; i < numberOfHandles; i++) {
    const newBeer = picker("misc", sortedList, fanciness);
    menu.push(newBeer);
    sortedList.splice(sortedList.indexOf(newBeer), 1);
  }
  


  return menu;
}