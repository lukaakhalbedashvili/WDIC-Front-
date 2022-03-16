import Styles from "./RegisterStage.module.scss"
import { context } from "../../RegisterCompanyContext"
import { useContext } from "react"
const RegisterStage = () => {
  const abaaba = useContext(context)
  console.log("ar unda imushaos wesit", abaaba)

  const stages = ["SignUP", "General"]
  // const stages = ["SignUP", "General", "Description", "timing"]

  return (
    <div className={Styles.main}>
      {stages.map((item, index) => (
        <div key={item} className={Styles.buttonItem}>
          <p className={Styles.stageIndex}>{index + 1}</p>
          <p className={Styles.stageLabel}>{item}</p>
        </div>
      ))}
    </div>
  )
}
export default RegisterStage
