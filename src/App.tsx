// import { useEffect, useState } from 'react'
import { MainForm } from './components/main-form/mainform.tsx'
// import { number } from 'zod';



function App() {
  // const [beerList, setBeerList] = useState(); // State to hold the beer list

  // useEffect(() => {
  //   const fetchBeerList = async () => {
  //     const beers = await BeerList(); // Await the Promise to get the resolved array
  //     setBeerList(beers); // Set the state with the resolved array
  //   };

  //   fetchBeerList(); // Call the function to fetch the beer list
  // }, []); // Empty dependency array to run once on mount

  return (
    <div className="m-9 flex flex-col gap-9 max-w-3xl mx-auto">
      <div>
        <h1 className="text-center text-5xl font-bold m-3">Keg Curator</h1>
        <p className="text-center text-lg">Create the best selection of beer to serve in your bar or restaurant.</p>
      </div>
      <hr></hr>
      <MainForm />
    </div>
  )
}

export default App
