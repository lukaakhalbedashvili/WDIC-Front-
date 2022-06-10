import Styles from "./RegisterCompanyFrame.module.scss"
import Image from "next/image"
import RegisterStage from "../RegisterStage/RegisterStage"
import SuccessButton from "src/library/SuccessButton"
import BackButton from "src/library/BackButton"
import useRegisterCompanyFrame from "./useRegisterCompanyFrame"
const RegisterCompanyFrame: React.FC = ({ children }) => {
  const {
    sideFrameIMG,
    index,
    stages,
    errorsLength,
    hanldeSubmit,
    isFormTouched,
    backButtonOnClickHandler,
    editClicked,
    handleEdit,
    handleDiscard,
  } = useRegisterCompanyFrame()
  return (
    <div className={Styles.main}>
      <div className={Styles.photo}>
        <Image
          src={sideFrameIMG[index]}
          layout="fill"
          alt="Image decoration abstract art"
          priority={true}
          quality={10}
        />
      </div>
      <div className={Styles.content}>
        <RegisterStage />
        <h3 className={Styles.stageTitle}>{stages[index]}</h3>
        <div className={Styles.children}>{children}</div>
        <div className={Styles.ButtonsWrapper}>
          {index > 0 && (
            <BackButton
              content={editClicked ? "Discard" : "Back"}
              onClickHandler={
                editClicked ? handleDiscard : backButtonOnClickHandler
              }
            />
          )}
          <SuccessButton
            content={
              index < stages.length - 1
                ? "Next"
                : editClicked
                ? "Apply"
                : "Submit"
            }
            hanldeSubmit={editClicked ? handleEdit : hanldeSubmit}
            disabled={errorsLength > 0 || !isFormTouched}
          />
        </div>
      </div>
    </div>
  )
}
export default RegisterCompanyFrame
