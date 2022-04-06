import React, { useCallback, useRef } from "react"
import Styles from "./DropZone.module.scss"
import { useDropzone } from "react-dropzone"
import uploadToFirebase from "src/services/uploadPhoto"
import Image from "next/image"
import { uploadImageIcon } from "src/utils/consts"
interface File extends Blob {
  name: string
}
const DropZone = () => {
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach((item: File) => uploadToFirebase(item, item.name))
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  const fileInputRef = useRef<HTMLInputElement>(null)
  return (
    <div
      {...getRootProps()}
      className={Styles.main}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        {...getInputProps}
      />
      <div className={Styles.ImageDiv}>
        <Image src={uploadImageIcon} alt="upload image" layout="fill" />
      </div>
      <div className={Styles.label}>
        <p>drop uour image here or</p>
        <p className={Styles.BrowseOption}>browse</p>
      </div>
    </div>
  )
}

export default DropZone
