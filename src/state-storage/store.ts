import { create } from "zustand"
import FormResultsClass from "@/models/FormResults";
import { defaultResults } from "@/lib/constants"

export interface ResultsState {
  results: FormResultsClass,
  setResults: (newResults: FormResultsClass) => void;  
}

export const useStore = create<ResultsState>((set) => ({
  results: defaultResults,
  setResults: (values) => set({ results: values }),
}))