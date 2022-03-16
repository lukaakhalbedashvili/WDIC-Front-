import Styles from "./GeneralInfo.module.scss"
import { RegisterCompanyContext } from "../RegisterCompanyContext"
const GeneralInfo = () => {
  return (
    <RegisterCompanyContext>
      <div className={Styles.main}>
        <h2>GenaralInfo</h2>
      </div>
    </RegisterCompanyContext>
  )
}
export default GeneralInfo
