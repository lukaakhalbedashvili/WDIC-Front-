import { useRef } from "react"
import Styles from "./GeneralInfo.module.scss"
import useFormikGeneral from "src/hooks/useFormikGeneral"
import Textfield from "src/library/TextField"
import useSetCurForm from "src/hooks/useSetCurForm"
import Dropzone from "src/library/Dropzone"
import { CircularProgress } from "@mui/material"
const GeneralInfo = () => {
  const submitBTNRef = useRef<HTMLButtonElement | null>(null)
  useSetCurForm(submitBTNRef.current)
  const { generalInfoValidation } = useFormikGeneral()
  const formik = generalInfoValidation
  return (
    <div className={Styles.main}>
      <h3>General Info</h3>
      <form className={Styles.GeneralForm} onSubmit={formik.handleSubmit}>
        <CircularProgress variant="determinate" value={50} />
        <Dropzone />
        <Textfield
          onChange={formik.handleChange}
          value={formik.values.companyDescription}
          name="Description"
          placeholder="cmpany Description"
          error={!!formik.errors.companyDescription}
          errorMessage={formik.errors.companyDescription}
        />
        <button
          type="submit"
          style={{ display: "none" }}
          ref={submitBTNRef}
        ></button>
      </form>
    </div>
  )
}
export default GeneralInfo
