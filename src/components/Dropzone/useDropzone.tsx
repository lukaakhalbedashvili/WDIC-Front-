import { useDropzone as useDropzoneLibrary } from "react-dropzone"
import React, { useCallback, useContext, useState } from "react"
import { contextRG } from "src/components/SignUpFrame/context/signupContext"

const useDropzone = () => {
  const {
    profilePic,
    setProfilePic,
    uploadProgress,
    setEditClicked,
    editClicked,
    setCroppedAreaPixels,
    finalImage,
    setFinalImage,
  } = useContext(contextRG)

  const [cropArea, setCropArea] = useState({ x: 0, y: 0 })

  const onDrop = useCallback(acceptedFiles => {
    handleChange(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps } = useDropzoneLibrary({
    onDrop,
  })

  const handleChange = (file: FileList | undefined) => {
    if (!file) return
    const reader = new FileReader()
    reader.readAsDataURL(file[0])
    reader.onloadend = () => {
      typeof reader.result === "string" && setProfilePic(reader.result)
    }
  }

  const handleEditMode = (e: React.MouseEvent) => {
    e.stopPropagation()
    setEditClicked(true)
  }

  const onCropComplete = useCallback((cropedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const [zoomPercent, setZoomPercent] = useState(10)
  return {
    getRootProps,
    getInputProps,
    profilePic,
    setProfilePic,
    uploadProgress,
    handleEditMode,
    zoomPercent,
    setZoomPercent,
    onCropComplete,
    editClicked,
    finalImage,
    setEditClicked,
    setFinalImage,
    cropArea,
    setCropArea,
  }
}

export default useDropzone
