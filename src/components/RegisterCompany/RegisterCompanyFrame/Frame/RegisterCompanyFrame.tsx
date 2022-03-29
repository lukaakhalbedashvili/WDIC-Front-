import Styles from "./RegisterCompanyFrame.module.scss"
import Image from "next/image"
import { registerCompanyFrameImage } from "src/utils/consts"
import RegisterStage from "../RegisterStage/RegisterStage"
import { useContext } from "react"
import { contextRG } from "../context/companyContext"
const RegisterCompanyFrame: React.FC = ({ children }) => {
  const { index, setIndex, stages } = useContext(contextRG)
  const hanldeSubmit: () => void = () => {
    index < stages.length - 1 && setIndex(index + 1)
  }
  return (
    <div className={Styles.main}>
      <div className={Styles.photo}>
        <Image src={registerCompanyFrameImage} layout="fill" alt="asx" />
      </div>
      <div className={Styles.content}>
        <RegisterStage />
        {children}
        <div className={Styles.submitBtnDiv}>
          <button className={Styles.submitBtn} onClick={() => hanldeSubmit()}>
            {index < stages.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterCompanyFrame
