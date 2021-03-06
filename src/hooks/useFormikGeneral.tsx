import { useFormik } from "formik"
import * as Yup from "yup"
type initValueType = { companyName: string; companyDescription: string }

const useFormikGeneral = () => {
  const initValues: initValueType = {
    companyName: "",
    companyDescription: "",
  }

  const generalInfoValidation = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      companyName: Yup.string()
        .max(15, "must be less than 15")
        .required("required"),
      companyDescription: Yup.string().required("required"),
    }),
    onSubmit: e => {
      e
    },
  })
  return { generalInfoValidation }
}

export default useFormikGeneral
