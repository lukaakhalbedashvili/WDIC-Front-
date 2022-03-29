import RegisterCompanyFrame from "./Frame/RegisterCompanyFrame"
import GeneralInfo from "src/components/RegisterCompany/GeneralInfo/GeneralInfo"
import SignUP from "src/components/Auth/SignUP/SignUP"
import { useContext } from "react"
import { contextRG } from "./context/companyContext"
const stagesComponents = [
  <SignUP key="signUp" />,
  <GeneralInfo key="generalInfo" />,
]
const RegCom = () => {
  const { index } = useContext(contextRG)

  return <RegisterCompanyFrame>{stagesComponents[index]}</RegisterCompanyFrame>
}

export default RegCom
