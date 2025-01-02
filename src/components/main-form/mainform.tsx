import { Button } from '../ui/button'
import { BeerList } from '../../data/beers.ts'

/*
Categories
BEER Beer Name
BREWERY Brewery Name
STYLE Style
ORIGINCraft/Domestic/Import
REGION State/Country
VALUE Budget/Premium/Prestige
*/

const fetchBeerList = async () => {
  const beers = await BeerList();
  console.log('beers   ' + beers);
};

const allBeers = fetchBeerList();

const inputBeers = (e: React.FormEvent) => {
  e.preventDefault();
  // const formData = new FormData(e.currentTarget as HTMLFormElement);
  // const beersValue = formData?.get('beers');
  // let beersArr: string[] = [];
  // if (beersValue && typeof beersValue === 'string' && beersValue.length) {
  //  beersArr = beersValue.split(/\r?\n/).filter((e) => e.length);
  // }
  // while (beersArr.length > 6) {  
  //   const newBeerArr:string[] = beersArr.splice(0, 6);
  //   const newBeer = new Beer(...newBeerArr);
  //   beers.push(newBeer);
  // }
  // let json = JSON.stringify(beers);
}

export default function MainForm() {
  return (
    <div>
      <h3>JSONify Beer Data</h3>
      <br />
      <div className="max-w-lg">
        <form id="inputbeers" name="inputbeers" onSubmit={inputBeers} className="flex flex-col">
          <label htmlFor="beers">Input beers</label>
          <textarea id="beers" name="beers"></textarea>
          <Button type="submit" variant="default">Submit</Button>
        </form>
      </div>
    </div>
  )
}