import { createContext } from "react"
const value = {
  index: 0,
  aba: "gamiteste dzma",
}
const context = createContext(value)

const RegisterCompanyContext: React.FC = () => {
  return <context.Provider value={value}></context.Provider>
}

export { RegisterCompanyContext, context }
