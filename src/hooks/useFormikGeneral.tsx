// import React from "react"
// import { useContext } from "react"
import { useFormik } from "formik"
// import { contextRG } from "src/components/RegisterCompany/RegisterCompanyFrame/context/companyContext"
import * as Yup from "yup"
type initValueType = { companyName: string }

const useFormikGeneral = () => {
  const initValues: initValueType = {
    companyName: "LLLL",
  }

  const generalInfoValidation = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      companyName: Yup.string()
        .max(15, "must be less than 15")
        .required("required"),
    }),
    onSubmit: values => {
      console.log(values)
    },
  })
  return generalInfoValidation
}

export default useFormikGeneral
