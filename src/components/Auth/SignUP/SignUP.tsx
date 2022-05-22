import Styles from "./SignUP.module.scss"
import { useRef } from "react"
import useFormikSchema from "src/hooks/useFormikHook"
import { useEffect } from "react"
import { useContext } from "react"
import { contextRG } from "src/components/RegisterCompany/RegisterCompanyFrame/context/companyContext"
import Input from "src/library/Input"
import useSetCurForm from "src/hooks/useSetCurForm"
const SignUP: React.FC = () => {
  const { setErrors, singUpInputs } = useContext(contextRG)
  const formSubmitBTN = useRef<HTMLButtonElement>(null)
  const { signUpValidation } = useFormikSchema()
  const formik = signUpValidation

  useEffect(() => {
    if (formik.errors) {
      setErrors(formik.errors)
    }
  }, [formik.errors, setErrors])
  useSetCurForm(formSubmitBTN.current)
  return (
    <div className={Styles.main}>
      <form
        className={Styles.forms}
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        {singUpInputs.map(item => {
          const inputErrorStatus =
            formik.touched[item.name] && formik.errors[item.name]
          return (
            <div key={item.name}>
              <Input
                name={item.name}
                error={!!inputErrorStatus}
                errorMessage={formik.errors[item.name]}
                type={item.type}
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          )
        })}
        <button
          type="submit"
          style={{ visibility: "hidden" }}
          ref={formSubmitBTN}
        ></button>
      </form>
    </div>
  )
}

export default SignUP
