import { getRandomNum } from "./utils";

export function fancinessFuncOld(fanciness: number) : string {
  // Select whether the value should be budget, premium, or prestige, based on the fanciness input.
  if (fanciness < 5) {
    return "Budget";
  } else if (fanciness > 95) {
    return "Prestige";
  }

  let returnValue: string = "Premium";
  const randomNum = getRandomNum();

  const prob = {
    lower: 10,
    upper: 90,
    setOperands(delta: number) {
      this.lower += delta;
      this.upper -= delta;
    },
    isAverage() {
      return this.upper > this.lower;
    },
    isFancy() {
      return this.upper < this.lower;
    },
    isNotFancy() {
      return this.lower > this.upper;  // this is the same as isFancy
      // maybe need to compare it to randomNum instead?
    },
    calcReturn(scale: number) {
      // one of these will always be true, so scale being 2 is meaningless
      const budget = scale === 1 ? 1 : 0;
      const prestige = scale === 3 ? 1 : 0; 
      if (budget && randomNum > fanciness) {
        returnValue = "Budget";
      } else if (prestige && randomNum < fanciness) {
        returnValue = "Prestige";
      } else {
            // console.log("2")
        // So this is where it stalls - almost never gets to this option.
        returnValue = "Premium";
      }
    }
  }

  const delta: number = Math.floor(fanciness/2);

  prob.setOperands(delta);
  
  if (prob.isAverage()) {
    // console.log("isAverage") // There's always 71 of these no matter where the slider is.
    prob.calcReturn(2);
  } else if (prob.isFancy()) {
    prob.calcReturn(3);
  } else if (prob.isNotFancy()) {
    prob.calcReturn(1);
  }
  return returnValue;
}

// Instead of this fancinessFunc we could do it another way
// give a different weight based on fanciness
// if it 

export function fancinessFuncSimple(fanciness: number): string {
  const randomNum = getRandomNum();
// basic return parameters, but randomNum inches it lcoser 
// so fanciness + fanciness*randomNum/10
  const delta = fanciness - randomNum; // some number that will either be negative or positive
  const num = fanciness + delta;
  const delta2 = fanciness + fanciness/randomNum*10
  // maybe make the delta be somewhere in a range, like between -20 and +20
  // (fanciness + randomNum) / 10 ---- this would be between 1-40??
  // delta 20 minus that number^
  let value = "Premium";
  if (num < 30) {value = "Budget"};
  if (num > 85) {value = "Prestige"};
  // console.log(fanciness + " " + num + " " + value)

  return value;

  // or I could directly return a number for scoring
}

export function fancinessFunc(fanciness: number): string {
  if (fanciness < 20) return "Budget";
  if (fanciness > 80) return "Prestige";
  return "Premium";
}