import { useDropzone as useDropzoneLibrary } from "react-dropzone"
import useUploadToFirebase from "src/services/useUploadPhoto"
import React, { useCallback, useContext, useState } from "react"
import { contextRG } from "src/components/RegisterCompany/RegisterCompanyFrame/context/companyContext"

const useDropzone = () => {
  const { profilePic, setProfilePic, uploadProgress, setEditClicked } =
    useContext(contextRG)
  const onDrop = useCallback(acceptedFiles => {
    handleChange(acceptedFiles)
    console.log(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps } = useDropzoneLibrary({
    onDrop,
  })
  const { editClicked } = useContext(contextRG)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const handleUpload = useUploadToFirebase()
  const handleChange = (file: FileList | undefined) => {
    if (!file) return
    handleUpload(file[0])
  }

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation()
    setEditClicked(true)
  }

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels, zoom)
  }, [])

  const [zoomPercent, setZoomPercent] = useState(10)
  return {
    getRootProps,
    getInputProps,
    profilePic,
    setProfilePic,
    uploadProgress,
    handleEdit,
    zoomPercent,
    setZoomPercent,
    crop,
    setCrop,
    zoom,
    setZoom,
    onCropComplete,
    editClicked,
  }
}

export default useDropzone
