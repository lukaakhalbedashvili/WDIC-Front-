import Styles from "./RegisterStage.module.scss"
import { useContext } from "react"
import { contextRG } from "../context/companyContext"
const RegisterStage = () => {
  const { index, setIndex } = useContext(contextRG)

  const stages = ["SignUP", "General"]
  const handleTest = () => {
    setIndex(index + 1)
  }

  return (
    <div className={Styles.main}>
      {stages.map((item, index) => (
        <div key={item} className={Styles.buttonItem}>
          <p className={Styles.stageIndex}>{index + 1}</p>
          <p className={Styles.stageLabel} onClick={() => handleTest()}>
            {item}
          </p>
        </div>
      ))}
    </div>
  )
}
export default RegisterStage
