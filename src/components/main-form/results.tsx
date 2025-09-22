import { useState, useEffect, useMemo, Suspense } from 'react'
import { useStore } from '@/state-storage/store'
import BeerCard from '../cards/beercard'
import TitleCard from '../cards/titlecard'
import sortMenu from '@/lib/sortMenu'
import { Button } from '../ui/button'
import { jsPDF } from 'jspdf';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { FileDown, Copy } from 'lucide-react';
import LoadingIcon from '../loading/LoadingIcon'

export default function Results() {
  const [beerJson, setBeerJson] = useState([]);

  useEffect(() => {
    const getBeerJson = async () => {
      try {
        const res = await fetch("api/jsondata");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setBeerJson(data);
      } catch (error) {
        console.error("Failed to fetch /api/jsondata:", error)
      }
    }

    getBeerJson();
  }, []);

  const formResults = useStore((state) => state.results);
  let menuTitle = `Beer menu for ${formResults.businessName}`
  let menuSubtitle = `Number of Draft Beers: ${formResults.numberOfHandles}`;
  
  // Creates the menu as a memoized value.
  const beerMenu = useMemo(() => {
    if (beerJson.length > 0) {
      return sortMenu(formResults, beerJson);
    } else {
      return [];
    }
  }, [formResults, beerJson]);

  if (!formResults) {
    return <p>No results yet.</p>;
  }


  // Creates a formatted string of the menu for copying/download.
  const menuCopy = () => {
    let menuText: string = "";
    menuText += `${menuTitle}\n\n`
    beerMenu.forEach((beer) => {
      menuText += `\n\n`
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

      <TitleCard title={menuTitle} subtitle={menuSubtitle} />

      {beerMenu.length === 0 ? (
        <LoadingIcon />
      ) : (
        <ul className="grid grid-cols-2 xl:grid-cols-3 gap-10">
          {beerMenu.map((beer, index) => {
            return (
              <li key={index}><BeerCard index={index} beer={beer} /></li>
            )
          })}
        </ul>
      )}

      <div className="absolute top-[20px] right-[20px] w-[100px] flex gap-2">
        <Tooltip >
          <TooltipTrigger asChild>
            <Button variant="outline" onClick={handleCopy} className="w-[36px] bg-card">
              <Copy />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            Copy menu to clipboard.
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" onClick={handlePdf} className="w-[36px] bg-card">
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