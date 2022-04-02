import Styles from "./RegisterCompanyFrame.module.scss"
import Image from "next/image"
import { registerCompanyFrameImage } from "src/utils/consts"
import RegisterStage from "../RegisterStage/RegisterStage"
import { useContext } from "react"
import { contextRG } from "../context/companyContext"
import classNames from "classnames"
const RegisterCompanyFrame: React.FC = ({ children }) => {
  const { index, setIndex, stages, errors, submitBtn } = useContext(contextRG)
  const errorsLength = Object.keys(errors).length
  const hanldeSubmit: () => void = () => {
    errorsLength === 0 && index < stages.length - 1 && setIndex(index + 1)
    submitBtn && submitBtn.click()
  }
  return (
    <div className={Styles.main}>
      <div className={Styles.photo}>
        <Image
          src={registerCompanyFrameImage}
          layout="fill"
          alt="asx"
          priority
        />
      </div>
      <div className={Styles.content}>
        <RegisterStage />
        {children}
        <div className={Styles.submitBtnDiv}>
          <button
            className={classNames({
              [Styles.submitBtn]: true,
              [Styles.disabled]: errorsLength > 0,
            })}
            onClick={() => hanldeSubmit()}
          >
            {index < stages.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  )
}
export default RegisterCompanyFrame
