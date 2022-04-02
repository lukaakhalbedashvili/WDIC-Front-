import { useEffect, useContext } from "react"
import { contextRG } from "src/components/RegisterCompany/RegisterCompanyFrame/context/companyContext"
const useSetCurForm = (formSubmitBTN: HTMLButtonElement | null): void => {
  const { setSubmitBtn } = useContext(contextRG)
  useEffect(() => {
    if (formSubmitBTN) {
      setSubmitBtn(formSubmitBTN)
    }
  }, [formSubmitBTN])
}

export default useSetCurForm
