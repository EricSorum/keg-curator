import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import Beer from "@/models/Beer";

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
  const index = Math.floor(Math.random() * (length * 0.99));
  return index;
}

export function getRandomNum(): number {
  return Math.floor(Math.random() * 100);
}

export function compareScore(a: Beer, b: Beer) {
  if (a.score > b.score) {
    return -1;
  } else if (a.score < b.score) {
    return 1;
  }
  return 0;
}

export function compareArr(arr1: string[], arr2: string[]) {
  // Returns true if the arrays contain any matching elements.
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.includes(arr2[i])) return true;
  }
  return false;
}

export function bonus(margin: number) {
  return getRandomNum() > margin ? 2 : 0;
}