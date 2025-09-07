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

  // Transform brewery name into slug for logo image.
  const brewerySlug = beer.brewery.toLowerCase().replace(/[^a-z]/gi, "");
  const imgSrc = `/brewery-logos/${brewerySlug}.webp`;
  const altString = `${beer.brewery} logo`;

  return (
    <div className="relative">
      <Card className="flex flex-col content-center align-center w-[250px] h-[250px] rounded-[20%] bg-white border-amber-950 border-b-[4px] border-r-[4px]">
        <div className="m-3 text-center font-serif text-amber-950">
          {brewerySlug.length && 
          <Image 
            src={imgSrc}
            width={120}
            height={90}
            alt={altString}
            className="mx-auto my-[5px] w-[120] h-[90px] object-contain"
          />}
          <h3 className="text-xl text-bold tracking-tight">
            {beer.name}
          </h3>
          <hr className="w-[60%] mx-auto pt-1 border-amber-950"></hr>
          <p>{beer.brewery}</p>
          <p>{beer.style}</p>
        </div>
      </Card>
    </div>
  );
};

export default BeerCard;