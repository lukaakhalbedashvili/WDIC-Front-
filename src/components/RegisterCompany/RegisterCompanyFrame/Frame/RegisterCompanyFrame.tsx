import Styles from "./RegisterCompanyFrame.module.scss"
import Image from "next/image"
import {
  registerCompanyFrameImage,
  generalCompanyFrameImage,
} from "src/utils/consts"
import RegisterStage from "../RegisterStage/RegisterStage"
import { useContext } from "react"
import { contextRG } from "../context/companyContext"
import classNames from "classnames"
const RegisterCompanyFrame: React.FC = ({ children }) => {
  const sideFrameIMG = [registerCompanyFrameImage, generalCompanyFrameImage]
  const { index, setIndex, stages, errors, submitBtn, isSUFormTouched } =
    useContext(contextRG)
  const errorsLength = Object.keys(errors).length
  const hanldeSubmit: () => void = async () => {
    submitBtn && submitBtn.click()
    errorsLength === 0 && index < stages.length - 1 && setIndex(index + 1)
  }
  return (
    <div className={Styles.main}>
      <div className={Styles.photo}>
        <Image
          src={sideFrameIMG[index]}
          layout="fill"
          alt="asx"
          priority={true}
          quality={10}
        />
      </div>
      <div className={Styles.content}>
        <RegisterStage />
        <div className={Styles.children}>{children}</div>
        <div className={Styles.submitBtnDiv}>
          <button
            type="button"
            className={classNames({
              [Styles.submitBtn]: true,
              [Styles.disabled]: errorsLength > 0 || !isSUFormTouched,
            })}
            onClick={() => hanldeSubmit()}
            disabled={!isSUFormTouched}
          >
            {index < stages.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  )
}
export default RegisterCompanyFrame
