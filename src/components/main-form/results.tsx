import { useState, useEffect, useMemo } from 'react'
import { useStore } from '@/state-storage/store'
import BeerCard from '../beer/beercard'
import sortMenu from '@/lib/sortMenu'
import { Button } from '../ui/button'
import { jsPDF } from 'jspdf';

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


  const menuCopy = () => {
    let menuText: string = "";
    beerMenu.forEach((beer) => {
      menuText += `${beer.name}\n${beer.brewery}\n${beer.style}\n\n`
    })
    return menuText;
  }
  // Copies the beer menu to the clipboard.
  const handleCopy = () => {
    navigator.clipboard.writeText(menuCopy());
  }

  const handlePdf = () => {
    const doc = new jsPDF();
    doc.text(menuCopy(), 10, 10);
    doc.save(`Beer Menu for ${formResults.businessName}`);
  }

  return(
    <div className="flex flex-col items-center gap-6">
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold tracking-tight m-3">Beer Menu for {formResults.businessName}</h2>
        <p>Number of Draft Beers: {formResults.numberOfHandles}</p>
      </div>
      <ul className="grid xl:grid-cols-3 gap-4">
        {beerMenu.map((beer, index) => {
          return (
            <li key={index}><BeerCard index={index} beer={beer} /></li>
          )
        })}
      </ul>
      <Button variant="outline" onClick={handleCopy}>Copy to Clipboard</Button>
      <Button variant="outline" onClick={handlePdf}>Download PDF</Button>
    </div>
  )
}