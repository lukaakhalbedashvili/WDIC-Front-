import RegisterCompanyFrame from "./Frame/RegisterCompanyFrame"
import GeneralInfo from "src/components/RegisterCompany/GeneralInfo/GeneralInfo"
import SignUP from "src/components/Auth/SignUP/SignUP"
import { useContext, useEffect } from "react"
import { contextRG } from "./context/companyContext"
const stages = [<SignUP key="signUp" />, <GeneralInfo key="generalInfo" />]
const RegCom = () => {
  const { index } = useContext(contextRG)
  useEffect(() => {
    console.log(index, "abaaaa")
  }, [index])
  return (
    <RegisterCompanyFrame>
      {stages[index]}
      <p>{index}</p>
    </RegisterCompanyFrame>
  )
}

export default RegCom
