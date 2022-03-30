import { useFormik } from "formik"
import * as Yup from "yup"

const useFormikSchema = () => {
  type initValueType = {
    [firstName: string]: string
    password: string
    emailAddress: string
    repeatPassword: string
  }
  type validationType = {
    password?: string
    emailAddress?: string
    repeatPassword?: string
  }
  const initValues: initValueType = {
    firstName: "",
    password: "",
    emailAddress: "",
    repeatPassword: "",
  }
  const signUpValidation = useFormik({
    initialValues: initValues,
    validate: (values: initValueType) => {
      const { emailAddress, password, repeatPassword } = values
      let errors: validationType = {}
      if (!emailAddress) {
        errors = { ...errors, emailAddress: "Required" }
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailAddress)
      ) {
        errors = { ...errors, emailAddress: "Invalid email address" }
      }
      if (password !== repeatPassword) {
        errors = { ...errors, repeatPassword: "Password does not match" }
      }
      return errors
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "must be less than 15")
        .required("required"),
      password: Yup.string().min(6, "must be at least 6 characters"),
    }),
    onSubmit: values => {
      console.log(values)
    },
  })
  return { signUpValidation }
}

export default useFormikSchema
