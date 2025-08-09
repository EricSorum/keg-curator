import { fancinessFunc, shuffle } from "./utils";
// import picker from "./picker";

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
      this.score = 0;
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

export const preferredBreweries: string[] = ["Lupulin Brewing", "Bent Paddle Brewery", "Fair State Brewing", ];

export function compareScore(a: Beer, b: Beer) {
  if (a.score > b.score) {
    return -1;
  } else if (a.score < b.score) {
    return 1;
  }
  return 0;
}