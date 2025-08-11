import { Beer } from '@/lib/beers';
import { Card } from '../ui/card';
import Image from 'next/image';

type BeerCardProps = {
  index: number;
  beer: Beer;
};

const BeerCard = ({index, beer}: BeerCardProps) => {
  // Increase index so it's not zero-indexed.
  index++;
  return (
    <div className="relative min-w-[200px]">
      <Image
        src="/pubhandle.png"
        width={60}
        height={120}
        alt="Beer Selection"
        className="mx-auto"
      />
      <Card className="rounded-[3rem] h-[120px] absolute top-[40px] w-full">
        <div className="m-3 text-center">
          <h3 className="text-lg text-bold tracking-tight">
            {/* {index}.  */}
            {beer.name}
          </h3>
          <p>{beer.brewery}</p>
          <p>{beer.style}</p>
          {/* <p>Origin: {beer.origin}</p>
          <p>Region: {beer.region}</p>
          <p>Value: {beer.value}</p> */}
        </div>
      </Card>
    </div>
  );
};

export default BeerCard;