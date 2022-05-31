import { useDropzone as useDropzoneLibrary } from "react-dropzone"
import useUploadToFirebase from "src/services/useUploadPhoto"
import { useCallback, useContext } from "react"
import { contextRG } from "src/components/RegisterCompany/RegisterCompanyFrame/context/companyContext"

const useDropzone = () => {
  const { profilePic, uploadProgress } = useContext(contextRG)
  const handleUpload = useUploadToFirebase()

  const handleChange = (file: FileList | undefined) => {
    if (!file) return
    handleUpload(file[0])
  }
  const onDrop = useCallback(acceptedFiles => {
    handleChange(acceptedFiles)
    console.log(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps } = useDropzoneLibrary({ onDrop })

  return { getRootProps, getInputProps, profilePic, uploadProgress }
}

export default useDropzone
