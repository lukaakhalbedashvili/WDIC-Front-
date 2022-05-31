import React from "react"
import Styles from "./DropZone.module.scss"
import Image from "next/image"
import { uploadImageIcon } from "src/utils/consts"
import classNames from "classnames"
import { CircularProgress } from "@mui/material"
import useDropzone from "./useDropzone"
import { MdModeEdit } from "react-icons/md"
import { AiFillDelete } from "react-icons/ai"

const DropZone = () => {
  const { getRootProps, getInputProps, profilePic, uploadProgress } =
    useDropzone()
  return (
    <div
      className={classNames({
        [Styles.main]: true,
        [Styles.PicInIt]: profilePic.length > 1,
      })}
      {...getRootProps()}
    >
      <input {...getInputProps({ multiple: false })} />

      <div className={Styles.ImageWrapper}>
        <div className={Styles.onHover}>
          <div className={Styles.Icons}>
            <AiFillDelete size={40} className={Styles.onHoverIcons} />
            <MdModeEdit size={40} className={Styles.onHoverIcons} />
          </div>
        </div>
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
