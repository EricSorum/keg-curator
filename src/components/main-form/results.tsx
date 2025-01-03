type ResultsProps = {
  // spec: string;
  // beerList: Promise<object[]>;
  numberOfHandles: number;
}

export default function Results({numberOfHandles }: ResultsProps) {
  return(
    <h1>number of handles: {numberOfHandles}</h1>
  )
}