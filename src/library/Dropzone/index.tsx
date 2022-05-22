import React, { useRef } from "react"
import Styles from "./DropZone.module.scss"
import useUploadToFirebase from "src/services/uploadPhoto"
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
  // const [crop, setCrop] = useState({ x: 0, y: 0 })

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
      {uploadProgress > 0 && (
        <CircularProgress variant="determinate" value={uploadProgress} />
      )}

      {/* <Cropper
        image={profilePic}
        aspect={4 / 3}
        crop={crop}
        zoom={1}
        onCropChange={setCrop}
      /> */}
      <input
        accept="image/png, image/jpeg"
        onChange={e => handleChange(e)}
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      {profilePic.length < 1 && uploadProgress < 1 && (
        <div className={Styles.DefaultIcon}>
          <Image
            src={uploadImageIcon}
            alt="upload image"
            layout="fill"
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
      {profilePic.length > 0 && uploadProgress < 1 && (
        <div className={Styles.ImageWrapper}>
          <Image
            src={profilePic}
            alt="YourPic"
            layout="fill"
            className={Styles.ProfileImage}
          />
        </div>
      )}
    </div>
  )
}

export default DropZone
