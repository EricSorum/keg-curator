import { BeerList } from '../data/beers.ts'

/*
Categories
BEER Beer Name
BREWERY Brewery Name
STYLE Style
ORIGINCraft/Domestic/Import
REGION State/Country
VALUE Budget/Premium/Prestige
*/

const fetchBeerList = async () => {
  const beers = await BeerList();
  console.log('beers   ' + beers);
};

const allBeers = fetchBeerList();