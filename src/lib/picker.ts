// import { Beer } from './beers';
// import { fancinessFunc, randomIndex } from './utils';
  
// export default function picker(style: string, beerList: Beer[], fanciness: number): Beer {

//   const getFanciness: string = fancinessFunc(fanciness);
//   // console.log(getFanciness)
//   function findBeer(): Beer {
//     // This makes an attempt to find a beer with both matching style and value.

//     // SOMETHING SEEMS TO BE WRONG WITH THE STYLE... NEED TO ADD STYLE ANYWAY.
//     // it never sorts by value because there is never a style value
//     // let styleAndValue = beerList.slice(0, 15).find((beer) => beer.style === style && beer.value === getFanciness)
//     let styleAndValue = beerList.slice(0, 15).find((beer) => beer.value === getFanciness)
//     // Otherwise it just returns a matching style.

//     /*
//     what if we had an algorithm that put a score on each beer.
//     so this would be less efficinet but worth it for the results.
//     ok so each beer has a score.  W
//     fanciness can be a fraction - like if the user selects a low fanciness, the budget beers would be +2, 
//     but prestige would be -1
//     this value change can increment gradually with 

//     */

//     // Maybe whole function should just be picking random one 
//     //should only take fanciness into account, not anything else
//     // style will havet o be handled separately, similar to cuisine.
//     if (styleAndValue) {
//       return styleAndValue;
//     } else  {
//       let styleOnly = beerList.find((beer) => beer.style === style);
//       return styleOnly ? styleOnly : beerList[0];
//     }
//   }
//   let newBeer: Beer = findBeer();
//   return newBeer ? newBeer : beerList[randomIndex(beerList.length)];

// }