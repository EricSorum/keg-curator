import { fancinessFunc } from "./utils";

export class Beer {
  constructor(
    public name: string,
    public brewery: string,
    public style: string,
    public origin: string,
    public region: string,
    public value: string,
    public cuisine: string[],
    public score: number,
  ) {
      this.name = name;
      this.brewery = brewery;
      this.style = style;
      this.origin = origin;
      this.region = region;
      this.value = value;
      this.cuisine = cuisine;
    }
    
  calculateScore(formResults: FormResultsClass) {
    const { minnesotaOnly, craftOnly, fanciness, chosenCuisine } = formResults;
  
    const scoreObj = {
      breweryScore: preferredBreweries.includes(this.brewery) ? 1 : 0,
      originScore: craftOnly && origin === "Craft" ? 3 : 0,
      regionScore: minnesotaOnly && this.region === "Minnesota" ? 3 : 0,
      valueScore: this.value === fancinessFunc(fanciness) ? 2 : 0,
      cuisineScore: this.cuisine.includes(chosenCuisine) ? 4 : 0,
    };
  
    const score = Object.values(scoreObj).reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
  
    return score;
  }
}

export class FormResultsClass {
  constructor(
    public businessName: string,
    public numberOfHandles: number,
    public minnesotaOnly: boolean,
    public craftOnly: boolean,
    public fanciness: number,
    public chosenCuisine: string,
  ) {}
}

// export const emptyBeer: Beer = {
//   name: "No beer selection found",
//   brewery: "",
//   style: "",
//   origin: "",
//   region: "",
//   value: "",
// }

// This class will store all the different combinations of style selections.

export class Styles {
  constructor(
    public lager: string,
    public hazyIpa: string,
    public ipa: string,
    public wheat: string,
    public dark: string,
    public sour: string,
    public cider: string,
    public fruitedCider: string,
    public misc: string,
  ) {}
}

export const BreweryRanking = {
  // Make a simple rank of all breweries.
  // Sort function will privilege breweries with a higher rank.
  // Then it will sort based on style privilege (ie single IPAs over double...?)
  // But we also need to vary the brews.  So maybe it only allows one from a certain brewery
  // at least to start...
}

export const preferredBreweries: string[] = [];