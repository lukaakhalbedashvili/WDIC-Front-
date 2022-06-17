import { useContext, useEffect, useRef } from "react"
import { contextRG } from "src/components/RegisterCompany/RegisterCompanyFrame/context/companyContext"
import useFormikSchema from "src/hooks/useFormikHook"
import useSessionValidation from "src/hooks/useSessionValidation"
import useSetCurForm from "src/hooks/useSetCurForm"
import facebookIcon from "public/facebook.png"
import githubIcon from "public/github.svg"
import googleIcon from "public/google.svg"

const useSignUp = () => {
  const socialIcons = [
    { image: githubIcon, redirectTo: "github" },
    { image: googleIcon, redirectTo: "google" },
    { image: facebookIcon, redirectTo: "facebook" },
  ]
  const { setErrors, singUpInputs } = useContext(contextRG)
  const formSubmitBTN = useRef<HTMLButtonElement>(null)
  const { signUpValidation } = useFormikSchema()
  const formik = signUpValidation
  useSessionValidation()
  useEffect(() => {
    if (formik.errors) {
      setErrors(formik.errors)
    }
  }, [formik.errors, setErrors])
  useSetCurForm(formSubmitBTN.current)
  return { socialIcons, singUpInputs, formik, formSubmitBTN }
}

export default useSignUp
