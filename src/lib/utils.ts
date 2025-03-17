import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Beer } from '@/lib/beers'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shuffle(arr: Beer[]) {
  // Puts an array in a random order.
  for (let i = arr.length-1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// export function chooseBeer(style: string, beerList: Beer[], menu: Beer[], fanciness: number) : Beer {
//   // alternate to using selectbeers
//   // make  a function that chooses only one beer at a time
//   // then we can make sure there's always a beer chosen.

//   // Filter out all beers that are already in the menu
//   let styleList: Beer[] = beerList.filter((beer) => !menu.includes(beer));
  
//   const standardStyles: string[] = ["IPA", "Hazy IPA", "Lager", "Light Lager", "International Lager"]
//   if (style === "misc") {
//     styleList = beerList.filter((beer) => !standardStyles.includes(beer.style));
//   } else {
//     styleList = beerList.filter((beer) => beer.style === style);
//   }
//   const shuffleList: Beer[] = shuffle(styleList);

//   // Return one beer from the selected list or return empty beer
//   // need to add condition to check that we're not repeating beers
//   return shuffleList.length ? shuffleList[0] : emptyBeer;

//   // return default beer object that basically shows empty beer if no beer.

// }

export function selectBeers(style: string, num: number, beerList: Beer[], fanciness: number) : Beer[] {
  // Selects a certain number of beers of a certain style, or miscellaneous beers.
  let styleList: Beer[] = [];

  if (style === "misc") {
    const standardStyles: string[] = ["IPA", "Hazy IPA", "Lager", "Light Lager", "International Lager"]
    styleList = beerList.filter((beer) => !standardStyles.includes(beer.style));
  } else {
    styleList = beerList.filter((beer) => beer.style === style);
  }
  if (fanciness < 30) {
    styleList = beerList.filter((beer) => beer.value === "Prestige");
  } else if (fanciness > 80) {
    styleList = beerList.filter((beer) => beer.value === "Budget");
  }
  const shuffleList: Beer[] = shuffle(styleList);
  const selections: Beer[] = shuffleList.slice(0, num);
  return selections;
}

  // turn number 1-100 into three pie sections/percentages
// function fancinessConversion(fanciness: number) : number[] {
 
//   let numberOfBudget = fanciness/2;
//   let numberOfPrestige = fanciness/2;
//   let numberOfPremium = 100 - numberOfBudget - numberOfPrestige;

//   return [numberOfBudget, numberOfPremium, numberOfPrestige];
// }

export function fancinessFunc(fanciness: number) : string {
  // Select whether the value should be budget, premium, or prestige, based on the fanciness input.
  const randomNum = Math.floor(Math.random() * 100 * fanciness);

  // need to make sure there is actually a beer selected
  if (fanciness < 10 || randomNum < 100) {
    return "Budget";
  } else if (fanciness > 95 || randomNum > 1500) {
    return "Prestige";
  } else {
    return "Premium";
  }
}