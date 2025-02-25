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

export function selectBeers(style: string, num: number, beerList: Beer[], menu: Beer[]) {
  // Selects a certain number of beers of a certain style, or miscellaneous beers.
  let styleList: Beer[] = [];
  if (style === "misc") {
    const standardStyles: String[] = ["IPA", "Hazy IPA", "Lager", "Light Lager"]
    styleList = beerList.filter((beer) => !standardStyles.includes(beer.style) && !menu.includes(beer));
  } else {
    styleList = beerList.filter((beer) => beer.style === style && !menu.includes(beer));
  }
  const shuffleList: Beer[] = shuffle(styleList);
  const selections: Beer[] = shuffleList.slice(0, num);
  return selections;
}