import { useContext } from "react"
import {
  registerCompanyFrameImage,
  generalCompanyFrameImage,
} from "src/utils/consts"
import { contextRG } from "../context/signupContext"
import cropImage from "src/utils/cropImage"

const useRegisterCompanyFrame = () => {
  const sideFrameIMG = [registerCompanyFrameImage, generalCompanyFrameImage]
  const {
    index,
    setIndex,
    stages,
    errors,
    submitBtn,
    isFormTouched,
    editClicked,
    setEditClicked,
    croppedAreaPixels,
    profilePic,
    setFinalImage,
  } = useContext(contextRG)
  const errorsLength = Object.keys(errors).length
  const hanldeSubmit: () => void = async () => {
    submitBtn && submitBtn.click()
    errorsLength === 0 && index < stages.length - 1 && setIndex(index + 1)
  }
  const backButtonOnClickHandler = () => {
    setIndex(index - 1)
  }
  const handleEdit = async () => {
    setEditClicked(false)
    setFinalImage((await cropImage(profilePic, croppedAreaPixels)) as string)
  }
  const handleDiscard = () => {
    setEditClicked(false)
  }
  return {
    sideFrameIMG,
    hanldeSubmit,
    isFormTouched,
    index,
    stages,
    errorsLength,
    backButtonOnClickHandler,
    editClicked,
    handleEdit,
    handleDiscard,
  }
}

export default useRegisterCompanyFrame
