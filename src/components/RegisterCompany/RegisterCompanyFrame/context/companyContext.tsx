import { createContext } from "react"
type registerCompanyContext = {
  index: number
  setIndex: (newIndex: number) => void
}

export const contextRG = createContext<registerCompanyContext>({
  index: 0,
  setIndex: () => {
    //donothing
  },
})
