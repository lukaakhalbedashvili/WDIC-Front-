import { useFormik } from "formik"
import * as Yup from "yup"

const useFormikSchema = () => {
  type initValueType = {
    firstName: string
    password: string
    email: string
    repeatPassword: string
  }
  const initValues: initValueType = {
    firstName: "firstName",
    password: "pass",
    email: "emailAddress",
    repeatPassword: "repeatPassword",
  }
  const signUpValidation = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "must be less than 15")
        .required("required"),
      lastName: Yup.string()
        .max(15, "must be less than 15")
        .required("required"),
    }),
    onSubmit: values => {
      console.log(values)
    },
  })
  return { signUpValidation }
}

export default useFormikSchema
