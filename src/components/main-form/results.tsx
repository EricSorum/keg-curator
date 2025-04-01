import { useState, useEffect } from 'react'
import BeerCard from '../beer/beercard'
import { Beer, FormResultsClass } from '@/lib/beers'
// import {sortBeer} from '@/lib/sortbeer'
import {createMenu} from '@/lib/createmenu'

type ResultsProps = {
  formResults: FormResultsClass
}

export default function Results({formResults} : ResultsProps) {
  const [ beerList, setBeerList ] = useState<Beer[]>();
  const [ beerMenu, setBeerMenu ] = useState<Beer[]>([]);

  // useEffect(() => {
  //   const fetchBeerList = async () => {
  //     const awaitList = await getBeers();
  //     if (awaitList) {
  //       setBeerList(awaitList);
  //     }
  //   };
  //   fetchBeerList();
  // }, []);



  useEffect(() => {
    const fetchBeerList = async () => {
      const response = await fetch('/api/beers'); // Fetch from the API route
      const data = await response.json();
      if (data) {
        setBeerList(data);
      }
    };
    fetchBeerList();
  }, []);
  
  useEffect(() => {
    setBeerMenu(createMenu(formResults, beerList || []))
  }, [beerList, formResults]);

  return(
    <div className="flex flex-col gap-6">     
      <h1>Number of Draft Beers: {formResults.numberOfHandles}</h1>
      <h1>Suggested Beer Menu for {formResults.businessName}</h1>
      <ul className="grid md:grid-cols-3 gap-4">
        {beerMenu.map((beer, index) => {
          return (
            <li key={index}><BeerCard index={index} beer={beer} /></li>
          )
        })}
      </ul>
    </div>
  )
}