import Styles from "./SignUP.module.scss"
import Input from "src/library/Input"
import Image from "next/image"
import { signIn } from "next-auth/react"
import useSignUp from "./useSignUp"

const SignUP: React.FC = () => {
  const {
    socialIcons,
    singUpInputs,
    formik,
    formSubmitBTN,
    setIsSUFormTouched,
  } = useSignUp()
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
                onClick={() => setIsSUFormTouched(true)}
                onBlur={formik.handleBlur}
                controled={true}
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
      <div className={Styles.altSignup}>
        <p className={Styles.altSignupText}>Or continue with</p>
        <div className={Styles.altSignupIcons}>
          {socialIcons.map(item => {
            return (
              <Image
                key={item.redirectTo}
                src={item.image}
                width={40}
                height={40}
                alt="qwe"
                onClick={() => signIn(item.redirectTo)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SignUP
