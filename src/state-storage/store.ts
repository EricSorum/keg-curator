import { create } from "zustand"
import FormResultsClass from "@/models/FormResults";
import { defaultResults } from "@/lib/constants"
import { StyleType } from "@/models/StyleType"



export interface ResultsState {
  results: FormResultsClass,
  setResults: (newResults: FormResultsClass) => void;
  setStyles: (styleArr: StyleType[]) => void;
}

export const useResultsStore = create<ResultsState>((set) => ({
  results: defaultResults,
  setResults: (values) => set({ results: values }),
  // setStyles: (styles: StyleType) => set({ results.chosenStyles: styles}),
  addStyle: (newStyle: StyleType) =>
    set((state) => ({
      results: {
        ...state.results,
        chosenStyles: [...state.results.chosenStyles, newStyle]
      }
    })),

  setStyles: (styleArr: StyleType[]) =>
    set((state) => ({
      results: {
        ...state.results,
        chosenStyles:styleArr
      }
    })),
}))


// instead of new state for style box, incorporate it into results

// import { StyleType } from "@/models/StyleType";
// import { styles } from "@/lib/constants"

// export interface StyleState {
//   chosenStyles: StyleType[],
//   setStyles: (newStyles: StyleType) => void;
// }

// export const useStyleStore = create<StyleState>((set) => ({
//   chosenStyles: [],
//   setStyles: (values) => set({ chosenStyles: values}),
// }))