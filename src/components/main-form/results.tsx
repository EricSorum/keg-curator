import { useState, useEffect } from 'react'

import { Beer, BeerList } from '@/data/beers'

type ResultsProps = {
  numberOfHandles: number;
}

/*
SO
Here we will write logic to determine which beers to show, taking into account the
request object passed down from mainform.  The request will have all the information the user
requests.  But in this component we write logic that I want to choose beers for them.
Basically choosing best brewery?

Choose how many of each style for them.Or actually maybe not..? For example maybe 
they can enter how many of each style they want

FIRST use mainform to try something with logic. Get the beerlist and render a certain number
of beer names.

*/

// type Beer = {
//   name: string;
// }

export default function Results({numberOfHandles}: ResultsProps) {
  const [ beers, setBeers ] = useState<Beer[]>([]);

  useEffect(() => {
    const fetchBeerList = async () => {
      const beers2 = await BeerList(); // Await the Promise to get the resolved array
      setBeers(beers2); // Set the state with the resolved array
    };

    fetchBeerList(); // Call the function to fetch the beer list
  }, []); // Empty dependency array to run once on mount
  // will need to import beer type here...? no just write beer type in this component.
  let beerArr: number[] = [];
  for (let i = 0; i < numberOfHandles; i++) {
    beerArr.push(i)
  }

  return(
    <div>     
      <h1>number of handles: {numberOfHandles}</h1>
      <h1>Beer List</h1>
      <ul>
        {beers.map((beer, index) => (
          <li key={index}>{beer.name}</li> // Access the name of each beer
        ))}
      </ul>
    </div>
  )
}