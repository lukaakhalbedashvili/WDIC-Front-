import { useDropzone as useDropzoneLibrary } from "react-dropzone"
import useUploadToFirebase from "src/services/useUploadPhoto"
import { useCallback, useContext, useState } from "react"
import { contextRG } from "src/components/RegisterCompany/RegisterCompanyFrame/context/companyContext"

const useDropzone = () => {
  const { profilePic, setProfilePic, uploadProgress, setEditClicked } =
    useContext(contextRG)
  const handleUpload = useUploadToFirebase()

  const handleChange = (file: FileList | undefined) => {
    if (!file) return
    handleUpload(file[0])
  }
  const onDrop = useCallback(acceptedFiles => {
    handleChange(acceptedFiles)
    console.log(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps } = useDropzoneLibrary({
    onDrop,
  })

  const handleEdit = () => {
    setEditClicked(true)
  }
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
  }
}

export default useDropzone
