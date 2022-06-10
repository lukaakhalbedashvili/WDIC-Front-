import { useContext } from "react"

import {
  registerCompanyFrameImage,
  generalCompanyFrameImage,
} from "src/utils/consts"
import { contextRG } from "../context/companyContext"

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
  } = useContext(contextRG)
  const errorsLength = Object.keys(errors).length
  const hanldeSubmit: () => void = async () => {
    submitBtn && submitBtn.click()
    errorsLength === 0 && index < stages.length - 1 && setIndex(index + 1)
  }
  const backButtonOnClickHandler = () => {
    setIndex(index - 1)
  }
  const handleEdit = () => {
    console.log("qaaaia")
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
