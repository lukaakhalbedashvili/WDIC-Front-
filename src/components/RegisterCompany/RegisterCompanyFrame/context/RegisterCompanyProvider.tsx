import { useState } from "react"
import { contextRG } from "./companyContext"
import { singUpIputsArray } from "src/utils/consts"
const RegisterCompanyProvider: React.FC = ({ children }) => {
  const [index, setIndex] = useState(0)
  const [stages, setStages] = useState(["SignUP", "General"])
  const [errors, setErrors] = useState({})
  const [submitBtn, setSubmitBtn] = useState<HTMLButtonElement>()
  const [singUpInputs, setSingUpInputs] = useState(singUpIputsArray)
  const [isFormTouched, setIsSUFormTouched] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [editClicked, setEditClicked] = useState(false)
  const [cropedImage, setCropedImage] = useState("")
  const [profilePic, setProfilePic] = useState("")
  const [croppedAreaPixels, setCroppedAreaPixels] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  })
  const [finalImage, setFinalImage] = useState<Blob | undefined>()

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
    isFormTouched,
    setIsSUFormTouched,
    profilePic,
    setProfilePic,
    uploadProgress,
    setUploadProgress,
    editClicked,
    setEditClicked,
    cropedImage,
    setCropedImage,
    croppedAreaPixels,
    setCroppedAreaPixels,
    finalImage,
    setFinalImage,
  }
  return <contextRG.Provider value={value}>{children}</contextRG.Provider>
}
export default RegisterCompanyProvider
