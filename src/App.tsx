import { useState } from 'react'
import { MainForm } from './components/main-form/mainform.tsx'
import { BeerList } from './data/beers.ts'
// import { number } from 'zod';



const fetchBeerList = async () => {
  const beers = await BeerList();
  console.log('beers   ' + JSON.stringify(beers));
  return beers;
};

function App() {
 const [ beerList ] = useState(fetchBeerList());

  return (
    <>
      <h1>Keg Curator</h1>
      <h2>Find the best local beer to serve in your bar or restaurant.</h2>
      <hr></hr>
      <MainForm beerList={beerList} />
    </>
  )
}

export default App
