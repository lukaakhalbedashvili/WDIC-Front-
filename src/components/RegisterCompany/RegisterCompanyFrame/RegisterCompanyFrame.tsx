import Styles from "./RegisterCompanyFrame.module.scss"
import Image from "next/image"
import { registerCompanyFrameImage } from "src/utils/consts"
import RegisterStage from "./RegisterStage/RegisterStage"
const RegisterCompanyFrame = () => {
  return (
    <div className={Styles.mainGeneralInfoDiv}>
      <div className={Styles.photo}>
        <Image src={registerCompanyFrameImage} layout="fill" alt="asx" />
      </div>
      <div className={Styles.content}>
        <RegisterStage />
      </div>
    </div>
  )
}

export default RegisterCompanyFrame
