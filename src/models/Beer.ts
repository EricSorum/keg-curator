export default class Beer {
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