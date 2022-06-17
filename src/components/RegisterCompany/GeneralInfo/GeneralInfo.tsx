import { useContext, useRef } from "react"
import Styles from "./GeneralInfo.module.scss"
import useFormikGeneral from "src/hooks/useFormikGeneral"
import useSetCurForm from "src/hooks/useSetCurForm"
import Dropzone from "src/library/Dropzone"
import { contextRG } from "../RegisterCompanyFrame/context/companyContext"

const GeneralInfo = () => {
  const { finalImage } = useContext(contextRG)
  const submitBTNRef = useRef<HTMLButtonElement | null>(null)
  useSetCurForm(submitBTNRef.current)
  const { generalInfoValidation } = useFormikGeneral()
  const formik = generalInfoValidation
  return (
    <>
      {!finalImage && (
        <div className={Styles.main}>
          <form className={Styles.GeneralForm} onSubmit={formik.handleSubmit}>
            <Dropzone />
          </form>
        </div>
      )}
      {finalImage && <img alt="keep coding" src={finalImage} />}
    </>
  )
}
export default GeneralInfo
