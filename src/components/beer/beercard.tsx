import { Beer } from '@/data/beers';

type BeerCardProps = {
  index: number;
  beer: Beer; // Define the prop type
};

const BeerCard = ({index, beer}: BeerCardProps) => { // Destructure beer from props
  index++;
  return (
    <div>
      <h2>{index}. {beer.name}</h2> 
      <p>Brewery: {beer.brewery}</p>
      <p>Style: {beer.style}</p>
      <p>Origin: {beer.origin}</p>
      <p>Region: {beer.region}</p>
      <p>Value: {beer.value}</p>
    </div>
  );
};

export default BeerCard;