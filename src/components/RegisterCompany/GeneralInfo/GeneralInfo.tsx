import { useRef } from "react"
import Styles from "./GeneralInfo.module.scss"
import useFormikGeneral from "src/hooks/useFormikGeneral"
import useSetCurForm from "src/hooks/useSetCurForm"
import Dropzone from "src/library/Dropzone"
const GeneralInfo = () => {
  const submitBTNRef = useRef<HTMLButtonElement | null>(null)
  useSetCurForm(submitBTNRef.current)
  const { generalInfoValidation } = useFormikGeneral()
  const formik = generalInfoValidation
  return (
    <div className={Styles.main}>
      <form className={Styles.GeneralForm} onSubmit={formik.handleSubmit}>
        <Dropzone />
      </form>
    </div>
  )
}
export default GeneralInfo
