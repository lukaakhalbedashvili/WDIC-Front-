import Styles from "./GeneralInfo.module.scss"
// import Input from "src/library/Input"
import useFormikGeneral from "src/hooks/useFormikGeneral"
import Textfield from "src/library/TextField"

const GeneralInfo = () => {
  const generalInfoValidation = useFormikGeneral()
  const formik = generalInfoValidation
  console.log(formik)

  return (
    <div className={Styles.main}>
      <h3>General Info</h3>
      <form className={Styles.GeneralForm}>
        <div className={Styles.inputDiv}>
          {/* <Input name="company Name" value={formik.values.companyName} /> */}
        </div>
        {/* <label htmlFor="compDescription">description</label>
        <textarea
          placeholder="company description"
          name="compDescription"
          id="compDescription"
        ></textarea> */}
        <Textfield />
      </form>
    </div>
  )
}
export default GeneralInfo
