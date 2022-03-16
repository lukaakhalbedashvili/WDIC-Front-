import Styles from "./RegisterCompanyFrame.module.scss"
import Image from "next/image"
import { registerCompanyFrameImage } from "src/utils/consts"
import RegisterStage from "./RegisterStage/RegisterStage"
const RegisterCompanyFrame: React.FC = ({ children }) => {
  return (
    <div className={Styles.main}>
      <div className={Styles.photo}>
        <Image src={registerCompanyFrameImage} layout="fill" alt="asx" />
      </div>
      <div className={Styles.content}>
        <RegisterStage />
        {children}
        <div className={Styles.submitBtnDiv}>
          <button className={Styles.submitBtn}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default RegisterCompanyFrame
