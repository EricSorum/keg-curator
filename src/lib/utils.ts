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

export function fancinessFunc(fanciness: number) : string {
  // Select whether the value should be budget, premium, or prestige, based on the fanciness input.
  if (fanciness < 5) {
    return "Budget";
  } else if (fanciness > 95) {
    return "Prestige";
  }

  let returnValue: string = "Premium";

  const prob = {
    lower: 0,
    upper: 100,
    setOperands(delta: number) {
      this.lower += delta;
      this.upper -+ delta;
    },
    isAverage() {
      return this.upper > this.lower;
    },
    isFancy() {
      return this.upper < this.lower;
    },
    isNotFancy() {
      return this.lower > this.upper;
    },

    calcReturn(scale: number) {
      const randomNum: number = getRandomNum();
      const budget = scale === 3 ? 0 : 1;
      const prestige = scale === 1 ? 0 : 1;
      if (budget && randomNum > fanciness) {
        returnValue = "Budget";
      } else if (prestige && randomNum < fanciness) {
        returnValue = "Prestige";
      } else {
        returnValue = "Premium";
      }
    }
  }

  const delta: number = Math.floor(fanciness/2);
  prob.setOperands(delta);
  if (prob.isAverage()) {
    prob.calcReturn(2);
  } else if (prob.isFancy()) {
    prob.calcReturn(3);
  } else if (prob.isNotFancy()) {
     prob.calcReturn(1);
  }
  return returnValue;
}

