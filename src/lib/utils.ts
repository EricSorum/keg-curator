import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Beer, emptyBeer } from '@/lib/beers'

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
  
//   const standardStyles: String[] = ["IPA", "Hazy IPA", "Lager", "Light Lager", "International Lager"]
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

export function selectBeers(style: string, num: number, beerList: Beer[], menu: Beer[], fanciness: number) : Beer[] {
  // Selects a certain number of beers of a certain style, or miscellaneous beers.
  let styleList: Beer[] = [];
  if (style === "misc") {
    const standardStyles: String[] = ["IPA", "Hazy IPA", "Lager", "Light Lager", "International Lager"]
    styleList = beerList.filter((beer) => !standardStyles.includes(beer.style));
  } else {
    styleList = beerList.filter((beer) => beer.style === style);
  }

  // write a function that turns list into certain percentage of budget/premium/presitge


  

  if (fanciness < 30) {
    styleList = beerList.filter((beer) => beer.value === "Prestige");
  } else if (fanciness > 80) {
    styleList = beerList.filter((beer) => beer.value === "Budget");
  }

  // Filter out all budget/prestige/premium based on results of fancinessFunc
  // const value = fancinessFunc(fanciness);
  // if (value) {
  //   styleList = styleList.filter((beer) => beer.value === value);
  // }
  //or maybe put fancinessfunc after 

  const shuffleList: Beer[] = shuffle(styleList);
  const selections: Beer[] = shuffleList.slice(0, num);
  console.log("style: " + style + "...");
  selections.forEach((e) => console.log(e.name))
  return selections;
}

  // turn number 1-100 into three pie sections/percentages
function fancinessConversion(fanciness: number) : number[] {
  // pie is three numbers, representing 3 sections of the pie
  // let pie: number[] = [];
  // let fraction: number = fanciness/3;
  
  // what times fraction will give us three numbers that add up to 100?

  // so we have two numbers, fanciness and 100-fanciness
  let numberOfBudget = fanciness/2;
  let numberOfPrestige = fanciness/2;
  let numberOfPremium = 100 - numberOfBudget - numberOfPrestige;


  // use a window, but make window shirnk/grow compared to fanciness
  // if 
  // let window = fanciness * 0.70;


  // oorrrrrr
  // make fanciness into a window of 20 spaces above and below
  // everything above is budget, everything below is prestige.

  // pie = [fanciness-20; ]
  return [numberOfBudget, numberOfPremium, numberOfPrestige];
}

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