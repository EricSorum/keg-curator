export class Beer {
  constructor(
    public name: string,
    public brewery: string,
    public style: string,
    public origin: string,
    public region: string,
    public value: string
  ) {
      this.name = name;
      this.brewery = brewery;
      this.style = style;
      this.origin = origin;
      this.region = region;
      this.value = value;
    }
}

export class FormResultsClass {
  constructor(
    public businessName: string,
    public numberOfHandles: number,
    public minnesotaOnly: boolean,
    public craftOnly: boolean,
    public fanciness: number
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
