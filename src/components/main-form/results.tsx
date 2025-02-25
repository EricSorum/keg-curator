import { useState, useEffect } from 'react'
import BeerCard from '../beer/beercard'
import { Beer, BeerList, FormResultsClass } from '@/lib/beers'
import {sortBeer} from '@/lib/sortbeer'
/*
Next steps
add more beers
filter according to style...?
*/

type ResultsProps = {
  formResults: FormResultsClass
}

export default function Results({formResults} : ResultsProps) {
  const [ beerList, setBeerList ] = useState<Beer[]>([]);
  const [ beerMenu, setBeerMenu ] = useState<Beer[]>([]);
  // const [ currentResults, setCurrentResults ] = formResults;
  // const { businessName, numberOfHandles } = formResults;


  useEffect(() => {
    const fetchBeerList = async () => {
      const awaitList = await BeerList();
      setBeerList(awaitList);
    };
    fetchBeerList();
  }, []);

  useEffect(() => {
    setBeerMenu(sortBeer(formResults, beerMenu, beerList))
    // setBeerMenu(beerList.slice(0, 6));
  }, [beerList, formResults]);

  return(
    <div className="flex flex-col gap-6">     
      <h1>Number of handles: {formResults.numberOfHandles}</h1>
      <h1>Beer List</h1>
      <ul className="grid md:grid-cols-4 gap-4">
        {beerMenu.map((beer, index) => {
          return (
            <li key={index}><BeerCard index={index} beer={beer} /></li>
          )
        })}
      </ul>
    </div>
  )
}