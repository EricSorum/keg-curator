import { create } from "zustand"
import FormResultsClass from "@/models/FormResults";
import { defaultResults } from "@/lib/constants"
// import { StyleType } from "@/models/StyleType";
// import { styles } from "@/lib/constants"

export interface ResultsState {
  results: FormResultsClass,
  setResults: (newResults: FormResultsClass) => void;  
}

export const useResultsStore = create<ResultsState>((set) => ({
  results: defaultResults,
  setResults: (values) => set({ results: values }),
}))


// export interface StyleState {
//   styles: StyleType[],
//   setStyles: (newStyles: StyleType) => void;  
// }

// export const useStyleStore = create<StyleState>((set) => ({
//   styles: [],
//   setStyles: (values) => set({ styles: values}),
// }))