import { useState, useEffect } from 'react'
import BeerCard from '../beer/beercard'
import { Beer, BeerList } from '@/data/beers'

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
    setBeerArr(loopArr);
  }, [numberOfHandles, beerList]); 

  return(
    <div>     
      <h1>Number of handles: {numberOfHandles}</h1>
      <h1>Beer List</h1>
      <ul>
        {beerArr.map((beer, index) => {
          index++;
          return (
            <li key={index}><BeerCard index={index} beer={beer} /></li>
          )
        })}
      </ul>
    </div>
  )
}