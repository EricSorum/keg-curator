// import { useEffect, useState } from 'react'
import Results from './components/main-form/results'
import Title from './components/layout/Title'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
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
    
    <div className="m-9 max-w-4xl mx-auto">
      <Navbar />

      <div className="m-9 flex flex-col gap-9 max-w-3xl mx-auto">
        <Title />
        <hr></hr>
        {/* <MainForm /> */}
        <Results />
        <Footer />
      </div>
    </div>
  )
}

export default App
