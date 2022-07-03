import { useContext } from "react"
import { contextRG } from "./context/signupContext"
import RegisterCompanyFrame from "./Frame"
interface Props {
  stagesComponents: JSX.Element[]
}
const Index = ({ stagesComponents }: Props) => {
  const { index } = useContext(contextRG)

  return <RegisterCompanyFrame>{stagesComponents[index]}</RegisterCompanyFrame>
}

export default Index
