import React, { useRef } from "react"
import Styles from "./DropZone.module.scss"
import useUploadToFirebase from "src/services/useUploadPhoto"
import Image from "next/image"
import { uploadImageIcon } from "src/utils/consts"
import { useContext } from "react"
import { contextRG } from "src/components/RegisterCompany/RegisterCompanyFrame/context/companyContext"
import classNames from "classnames"
import { CircularProgress } from "@mui/material"
// import Cropper from "react-easy-crop"

const DropZone = () => {
  const { profilePic, uploadProgress } = useContext(contextRG)
  const handleUpload = useUploadToFirebase()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return
    handleUpload(e.target.files)
  }
  const fileInputRef = useRef<HTMLInputElement>(null)

  return (
    <div
      className={classNames({
        [Styles.main]: true,
        [Styles.PicInIt]: profilePic.length > 1,
      })}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        accept="image/png, image/jpeg"
        onChange={e => handleChange(e)}
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
      />

      <div className={Styles.ImageWrapper}>
        {profilePic.length > 0 && uploadProgress < 1 && (
          <Image
            src={profilePic}
            alt="YourPic"
            className={Styles.ProfileImage}
            priority
            layout="fill"
          />
        )}
        <div className={Styles.DropZoneContent}>
          {profilePic.length < 1 && uploadProgress < 1 && (
            <div className={Styles.DefaultIcon}>
              <Image
                src={uploadImageIcon}
                alt="upload image"
                width={50}
                height={50}
                priority
              />
            </div>
          )}
          {profilePic.length < 1 && uploadProgress < 1 && (
            <div className={Styles.label}>
              <p>drop uour image here or</p>
              <p className={Styles.BrowseOption}>browse</p>
            </div>
          )}
          {uploadProgress > 0 && (
            <CircularProgress variant="determinate" value={uploadProgress} />
          )}
        </div>
      </div>
    </div>
  )
}

export default DropZone
