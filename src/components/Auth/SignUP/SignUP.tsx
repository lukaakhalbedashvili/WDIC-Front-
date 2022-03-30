import Styles from "./SignUP.module.scss"
import { SingUpIputs } from "src/utils/consts"
import useFormikSchema from "src/hooks/useFormikHook"
import classNames from "classnames"
import { useEffect } from "react"
import { useContext } from "react"
import { contextRG } from "src/components/RegisterCompany/RegisterCompanyFrame/context/companyContext"
const SignUP = () => {
  const { setErrors, errors } = useContext(contextRG)
  const { signUpValidation } = useFormikSchema()
  const formik = signUpValidation
  useEffect(() => {
    if (formik.errors) {
      setErrors(formik.errors)
    }
  }, [formik.errors])
  console.log(errors, "IVANISHVILI")
  return (
    <div className={Styles.main}>
      <h3 className={Styles.stageLabel}>SignUP</h3>
      <form className={Styles.forms} autoComplete="off">
        {SingUpIputs.map(item => {
          const inputErrorStatus =
            formik.touched[item.name] && formik.errors[item.name]
          return (
            <div key={item.name}>
              <p
                className={classNames({
                  [Styles.inputLabel]: true,
                  [Styles.error]: inputErrorStatus,
                })}
              >{`${[item.name]} ${
                inputErrorStatus ? formik.errors[item.name] : ""
              }`}</p>
              <input
                className={classNames({
                  [Styles.SignUPInput]: true,
                  [Styles.error]: inputErrorStatus,
                })}
                name={item.name}
                spellCheck={false}
                type={item.type}
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          )
        })}
      </form>
    </div>
  )
}

export default SignUP
