import { createContext } from "react"
type registerCompanyContext = {
  index: number
  setIndex: (newIndex: number) => void
  stages: string[]
  setStages: (newStages: [string]) => void
}

export const contextRG = createContext<registerCompanyContext>({
  index: 0,
  setIndex: () => {
    //donothing
  },
  stages: [],
  setStages: () => {
    //donothing
  },
})
