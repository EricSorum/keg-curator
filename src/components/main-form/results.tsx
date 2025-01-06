import { useState, useEffect } from 'react'
import BeerCard from '../beer/beercard'
import { Beer, BeerList } from '@/data/beers'
import sortBeer from '@/lib/sortbeer'

/*
Next steps
add more beers
filter according to style...?

*/


type ResultsProps = {
  numberOfHandles: number;
}

export default function Results({numberOfHandles}: ResultsProps) {
  const [ beerList, setBeerList ] = useState<Beer[]>([]);
  const [ beerArr, setBeerArr ] = useState<Beer[]>([]);


  useEffect(() => {
    const fetchBeerList = async () => {
      const awaitList = await BeerList();
      setBeerList(awaitList);
    };
    fetchBeerList()
  }, []);

  useEffect(() => {
    let loopArr = [];
    for (let i = 0; i < numberOfHandles && i < beerList.length; i++) {
      loopArr.push(beerList[i]);
    }
    setBeerArr(beerList.slice(0, numberOfHandles));
    // need further logic to return the right number of handles.
    // maybe sortBeer is run first, then setBeerArr takes the results? or
    // sortBeer returns the array of beers, and so what we do here
    // is setBeerArr(sortBeer(numberOf Handles?))?
    // Or maybe beerList is actually only imported into sortbeer.ts?
    sortBeer(loopArr, numberOfHandles);
  }, [numberOfHandles, beerList]); 

  // useEffect(() => {
  //   sortBeer(beerArr);
  // }, [beerArr]);

  return(
    <div>     
      <h1>Number of handles: {numberOfHandles}</h1>
      <h1>Beer List</h1>
      <ul>
        {beerArr.map((beer, index) => {
          return (
            <li key={index}><BeerCard index={index} beer={beer} /></li>
          )
        })}
      </ul>
    </div>
  )
}