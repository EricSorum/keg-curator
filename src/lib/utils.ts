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

export function selectBeers(style: string, num: number, beerList: Beer[], menu: Beer[], fanciness: number) : Beer[] {
  // Selects a certain number of beers of a certain style, or miscellaneous beers.
  let styleList: Beer[] = [];
  if (style === "misc") {
    const standardStyles: String[] = ["IPA", "Hazy IPA", "Lager", "Light Lager"]
    styleList = beerList.filter((beer) => !standardStyles.includes(beer.style) && !menu.includes(beer));
  } else {
    styleList = beerList.filter((beer) => beer.style === style && !menu.includes(beer));
  }

  // Filter out all budget/prestige/premium based on results of fancinessFunc
  const value = fancinessFunc(fanciness);
  console.log(value)
  styleList = styleList.filter((beer) => beer.value === value);

  const shuffleList: Beer[] = shuffle(styleList);
  const selections: Beer[] = shuffleList.slice(0, num);
  return selections;
}

export function fancinessFunc(fanciness: number) : string {
  // Select whether the value should be budget, premium, or prestige, based on the fanciness input.
  const randomNum = Math.floor(Math.random() * 100 * fanciness);
  if (fanciness < 10 || randomNum < 100) {
    return "Budget";
  } else if (fanciness > 90 || randomNum > 1000) {
    return "Prestige";
  } else {
    return "Premium";
  }
}