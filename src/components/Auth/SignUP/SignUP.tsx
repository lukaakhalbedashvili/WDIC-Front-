import Styles from "./SignUP.module.scss"
import { SingUpIputs } from "src/utils/consts"
import useFormikSchema from "src/hooks/useFormikSchema"
const SignUP = () => {
  const { signUpValidation } = useFormikSchema()
  const formik = signUpValidation

  return (
    <div className={Styles.main}>
      <h3 className={Styles.stageLabel}>SignUP</h3>
      <form className={Styles.forms} autoComplete="off">
        {SingUpIputs.map(item => {
          return (
            <div key={item.name}>
              <p>{item.label}</p>
              <input
                name={item.name}
                spellCheck={false}
                type={item.type}
                value={formik.values[item.name as keyof typeof formik.values]}
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
