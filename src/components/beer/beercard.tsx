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
        className="mx-auto drop-shadow-lg"
      />
      <Card className="rounded-[3rem] h-[120px] absolute top-[40px] w-full">
        <div className="m-3 text-center font-serif">
          <h3 className="text-xl text-bold tracking-tight">
            {beer.name}
          </h3>
          <hr className="w-[60%] mx-auto pt-1"></hr>
          <p>{beer.brewery}</p>
          <p>{beer.style}</p>
        </div>
      </Card>
    </div>
  );
};

export default BeerCard;