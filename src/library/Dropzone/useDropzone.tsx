import { useDropzone as useDropzoneLibrary } from "react-dropzone"
import React, { useCallback, useContext, useState } from "react"
import { contextRG } from "src/components/RegisterCompany/RegisterCompanyFrame/context/companyContext"

const useDropzone = () => {
  const {
    profilePic,
    setProfilePic,
    uploadProgress,
    setEditClicked,
    cropedImage,
    editClicked,
    setCroppedAreaPixels,
  } = useContext(contextRG)

  const [cropArea, setCropArea] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

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

  const onCropComplete = useCallback(croppedAreaPixels => {
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
    cropArea,
    setCropArea,
    zoom,
    setZoom,
    onCropComplete,
    editClicked,
    cropedImage,
  }
}

export default useDropzone
