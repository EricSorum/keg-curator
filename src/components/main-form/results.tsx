import Beer from "../beer/Beer"

type ResultsProps = {
  // spec: string;
  // beerList: Promise<object[]>;
  numberOfHandles: number;
}

// type Beer = {
//   name: string;
// }

export default function Results({numberOfHandles }: ResultsProps) {

  // will need to import beer type here...? no just write beer type in this component.
  let beerArr: string[] = [];
  for (let i = 0; i < numberOfHandles; i++) {
    beerArr.push("default")
  }

  return(
    <div>     
      <h1>number of handles: {numberOfHandles}</h1>
      {beerArr.map((e) => {
        return <Beer />
      })}
    </div>
  )
}