import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { type Beer } from '@/lib/beers'

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

export function randomIndex(length: number) : number {
  const index = Math.floor(Math.random() * length);
  return index;
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