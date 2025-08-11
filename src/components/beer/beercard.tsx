import { Beer } from '@/lib/beers';
import { Card } from '../ui/card';

type BeerCardProps = {
  index: number;
  beer: Beer;
};

const BeerCard = ({index, beer}: BeerCardProps) => {
  // Increase index so it's not zero-indexed.
  index++;
  return (
    <Card className="min-h-full">
      <div className="m-3">
        <h2>{index}. {beer.name}</h2> 
        <p>Brewery: {beer.brewery}</p>
        <p>Style: {beer.style}</p>
        <p>Origin: {beer.origin}</p>
        <p>Region: {beer.region}</p>
        <p>Value: {beer.value}</p>
      </div>
    </Card>
  );
};

export default BeerCard;