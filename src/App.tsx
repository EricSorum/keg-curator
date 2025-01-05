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
    <>
      <h1>Keg Curator</h1>
      <h2>Find the best local beer to serve in your bar or restaurant.</h2>
      <hr></hr>
      <MainForm />
    </>
  )
}

export default App
