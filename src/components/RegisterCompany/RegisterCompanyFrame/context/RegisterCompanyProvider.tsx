import { useState } from "react"
import { contextRG } from "./companyContext"
import { singUpIputsArray } from "src/utils/consts"
const RegisterCompanyProvider: React.FC = ({ children }) => {
  const [index, setIndex] = useState(0)
  const [stages, setStages] = useState(["SignUP", "General"])
  const [errors, setErrors] = useState({})
  const [submitBtn, setSubmitBtn] = useState<HTMLButtonElement>()
  const [singUpInputs, setSingUpInputs] = useState(singUpIputsArray)
  const [isSUFormTouched, setIsSUFormTouched] = useState(false)
  const [profilePic, setProfilePic] = useState("")
  const [uploadProgress, setUploadProgress] = useState(0)

  const value = {
    index,
    setIndex,
    stages,
    setStages,
    errors,
    setErrors,
    submitBtn,
    setSubmitBtn,
    singUpInputs,
    setSingUpInputs,
    isSUFormTouched,
    setIsSUFormTouched,
    profilePic,
    setProfilePic,
    uploadProgress,
    setUploadProgress,
  }
  return <contextRG.Provider value={value}>{children}</contextRG.Provider>
}
export default RegisterCompanyProvider
