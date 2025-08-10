import { create } from "zustand"
import { FormResultsClass, defaultResults } from "@/lib/beers"

export interface ResultsState {
  results: FormResultsClass,
  setResults: (newResults: FormResultsClass) => void;  
}

export const useStore = create<ResultsState>((set) => ({
  results: defaultResults,
  setResults: (values) => set({ results: values }),
}))

// results needs to be set to default results