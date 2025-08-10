import { useState, useEffect, useMemo } from 'react'
import { useStore } from '@/state-storage/store'
import BeerCard from '../beer/beercard'
import sortMenu from '@/lib/sortMenu'

export default function Results() {
  const [beerJson, setBeerJson] = useState([]);
  
  useEffect(() => {
    fetch("/api/getdata")
      .then(res => res.json())
      .then(data => setBeerJson(data));
  }, []);

  const formResults = useStore((state) => state.results);

  const beerMenu = useMemo(() => {
    if (beerJson.length > 0) {
      return sortMenu(formResults, beerJson);
    }
    return [];
  }, [beerJson, formResults]);

  if (!formResults) {
    return <p>No results yet.</p>;
  }
  
  return(
    <div className="flex flex-col items-center gap-6 w-full">
      <h2 className="text-xl">Beer Menu for {formResults.businessName}</h2>
      <div>Number of Draft Beers: {formResults.numberOfHandles}</div>
      <ul className="grid xl:grid-cols-3 gap-4">
        {beerMenu.map((beer, index) => {
          return (
            <li key={index}><BeerCard index={index} beer={beer} /></li>
          )
        })}
      </ul>
    </div>
  )
}