import { useState, useEffect } from 'react'
import BeerCard from '../beer/beercard'
import { Beer, FormResultsClass } from '@/lib/beers'
import { sortMenu } from '@/lib/beers'

type ResultsProps = {
  formResults: FormResultsClass
}

export default function Results({formResults} : ResultsProps) {
  const [beerJson, setBeerJson] = useState([]);
  const [beerMenu, setBeerMenu] = useState<Beer[]>([]);

  useEffect(() => {
    fetch("/api/getdata")
      .then(res => res.json())
      .then(data => setBeerJson(data));
  }, []);

  useEffect(() => {
    if (beerJson.length > 0) {
      // Either use createMenu or beers.ts-sortMenu
      setBeerMenu(sortMenu(formResults, beerJson));
    }
  }, [formResults, beerJson]);

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