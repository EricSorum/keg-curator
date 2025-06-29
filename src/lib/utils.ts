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

export function fancinessFunc(fanciness: number) : string {
  // Select whether the value should be budget, premium, or prestige, based on the fanciness input.
  
  if (fanciness < 10) {
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
    // maybe one method with parameter
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
  // now just calculate lower and upper based on fanciness... 
  // maybe divide fanciness by two
  // then add it to lower and subtract it from upper?
  // if lower is greater than upper, remove budget from consideration altogether


  // Fanciness is 1-100
  // need algorithm to turn a number between 1-100 into a probability
  // between three options.

  const delta: number = Math.floor(fanciness/2);
  prob.setOperands(delta);
  let boo: boolean = true;
  switch (boo) {
    case prob.isAverage(): prob.calcReturn(2);
    break;
    case prob.isFancy(): prob.calcReturn(3);
    break;
    case prob.isNotFancy(): prob.calcReturn(1);
    break;
  }

  return returnValue;
  
  // but instead of returning the string simply i need to return a function.
  // so write three function that randomizes it to tend towards one or the other
  // but budget is excluded from is fancy and prestige from budget
  // but there is still degrees of liklihood in each.

  // need to make sure there is actually a beer selected
  // if (fanciness < 10 || randomNum < 100) {
  //   return "Budget";
  // } else if (fanciness > 95 || randomNum > 1500) {
  //   return "Prestige";
  // } else {
  //   return "Premium";
  // }
}

// if fanciness was a  num 1,2, or 3
// we could use actuaal math right away... multiply by random num and then divide by some num 
// where it will end up being 1, 2, or 3
