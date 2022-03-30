import { useState } from "react"
import { contextRG } from "./companyContext"
const RegisterCompanyProvider: React.FC = ({ children }) => {
  const [index, setIndex] = useState(0)
  const [stages, setStages] = useState(["SignUP", "General"])
  const [errors, setErrors] = useState({})
  const value = {
    index,
    setIndex,
    stages,
    setStages,
    errors,
    setErrors,
  }
  return <contextRG.Provider value={value}>{children}</contextRG.Provider>
}
export default RegisterCompanyProvider
