import { useState, useEffect, useMemo } from 'react'
import { useStore } from '@/state-storage/store'
import BeerCard from '../beer/beercard'
import sortMenu from '@/lib/sortMenu'
import { Button } from '../ui/button'
import { jsPDF } from 'jspdf';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { FileDown, Copy } from 'lucide-react';

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

  // Creates a formatted string of the menu for copying/download.
  const menuCopy = () => {
    let menuText: string = "";
    menuText += `Beer Menu for ${formResults.businessName}\n\n`
    beerMenu.forEach((beer) => {
      menuText += `${beer.name}\n${beer.brewery}\n${beer.style}\n\n`
    })
    return menuText;
  }

  // Copies the beer menu to the clipboard.
  const handleCopy = () => {
    navigator.clipboard.writeText(menuCopy());
  }

  // Downloads a PDF of the menu.
  const handlePdf = () => {
    const doc = new jsPDF();
    doc.text(menuCopy(), 10, 10);
    doc.save(`Beer Menu for ${formResults.businessName}`);
  }

  return(
    <div className="flex flex-col items-center gap-6">
      <div className="text-center drop-shadow-xl">
        <div className="p-3 bg-amber-300 border-amber-950 border-b-[4px] border-r-[4px] rounded-[20%] ">
          <h2 className="text-4xl xs:text-2xl font-bold tracking-tight m-3">Beer Menu for {formResults.businessName}</h2>
          <p>Number of Draft Beers: {formResults.numberOfHandles}</p>
        </div>
      </div>
      <ul className="grid xl:grid-cols-3 grid-cols-2 gap-4">
        {beerMenu.map((beer, index) => {
          return (
            <li key={index}><BeerCard index={index} beer={beer} /></li>
          )
        })}
      </ul>

      <div className="absolute top-[20px] right-[20px] w-[100px] flex gap-2">
        <Tooltip >
          <TooltipTrigger asChild>
            <Button variant="outline" onClick={handleCopy} className="w-[36px]">
              <Copy />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            Copy menu to clipboard.
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" onClick={handlePdf} className="w-[36px]">
              <FileDown />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            Download menu as PDF.
          </TooltipContent>
        </Tooltip>
      </div>
      
    </div>
  )
}