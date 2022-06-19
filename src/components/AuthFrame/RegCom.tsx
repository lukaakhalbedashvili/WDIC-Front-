import RegisterCompanyFrame from "./Frame/AuthFrame"
import SignUP from "src/components/SignUP/SignUP"
import { useContext } from "react"
import GeneralInfo from "../SigmUpPhotoUpload/GeneralInfo"
import { contextRG } from "./context/signupContext"
const stagesComponents = [
  <SignUP key="signUp" />,
  <GeneralInfo key="generalInfo" />,
]
const RegCom = () => {
  const { index } = useContext(contextRG)
  return <RegisterCompanyFrame>{stagesComponents[index]}</RegisterCompanyFrame>
}

export default RegCom
