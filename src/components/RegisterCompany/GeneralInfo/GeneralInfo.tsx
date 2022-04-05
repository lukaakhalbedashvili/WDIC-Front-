import { useRef } from "react"
import Styles from "./GeneralInfo.module.scss"
import Input from "src/library/Input"
import useFormikGeneral from "src/hooks/useFormikGeneral"
import Textfield from "src/library/TextField"
import useSetCurForm from "src/hooks/useSetCurForm"
const GeneralInfo = () => {
  const submitBTNRef = useRef<HTMLButtonElement | null>(null)
  useSetCurForm(submitBTNRef.current)
  const { generalInfoValidation } = useFormikGeneral()
  const formik = generalInfoValidation

  return (
    <div className={Styles.main}>
      <h3>General Info</h3>
      <form className={Styles.GeneralForm} onSubmit={formik.handleSubmit}>
        <div className={Styles.inputDiv}>
          <Input
            name="company Name"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!formik.errors.companyName}
            type="text"
            errorMessage={formik.errors.companyName}
          />
        </div>
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
