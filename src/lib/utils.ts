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

export function chooseBeer(arr: Beer[]) {
  // need to pass in: beer style, number, 
}

export function selectBeers(style: string, num: number, beerList: Beer[]) {
  let styleList: Beer[] = [];
  if (style === "misc") {
    const standardStyles: String[] = ["IPA", "Hazy IPA", "Lager"]
    styleList = beerList.filter((beer) => !standardStyles.includes(style));
  } else {
    styleList = beerList.filter((beer) => beer.style === style);
  }
  const shuffleList: Beer[] = shuffle(styleList);
  const selections: Beer[] = shuffleList.slice(0, num);
  return selections;
}