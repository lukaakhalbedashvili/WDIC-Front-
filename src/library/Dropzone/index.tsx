import React, { memo, useCallback, useContext, useState } from "react"
import Styles from "./DropZone.module.scss"
import Image from "next/image"
import { uploadImageIcon } from "src/utils/consts"
import classNames from "classnames"
import { CircularProgress, Slider } from "@mui/material"
import useDropzone from "./useDropzone"
import { MdModeEdit } from "react-icons/md"
import { AiFillDelete } from "react-icons/ai"
import { FaCloudUploadAlt } from "react-icons/fa"
import Cropper from "react-easy-crop"
import { contextRG } from "src/components/RegisterCompany/RegisterCompanyFrame/context/companyContext"

const DropZone = () => {
  const { editClicked } = useContext(contextRG)
  const {
    getRootProps,
    getInputProps,
    profilePic,
    setProfilePic,
    uploadProgress,
    handleEdit,
    zoomPercent,
    setZoomPercent,
  } = useDropzone()
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels, zoom)
  }, [])

  console.log(zoomPercent / 10, zoomPercent)

  return (
    <div
      className={classNames({
        [Styles.main]: true,
        [Styles.PicInIt]: profilePic.length > 1,
        [Styles.InEdit]: editClicked,
      })}
      {...getRootProps({
        onClick: event => {
          profilePic.length > 1 && event.stopPropagation()
        },
      })}
    >
      <input {...getInputProps({ multiple: false })} />

      <div className={Styles.ImageWrapper}>
        {profilePic.length > 0 && (
          <div className={Styles.onHover}>
            <div className={Styles.Icons}>
              <AiFillDelete
                size={40}
                className={Styles.onHoverIcons}
                onClick={e => {
                  e.stopPropagation()
                  setProfilePic("")
                }}
              />
              <FaCloudUploadAlt size={40} className={Styles.onHoverIcons} />
              <MdModeEdit
                size={40}
                className={Styles.onHoverIcons}
                onClick={() => handleEdit()}
              />
            </div>
          </div>
        )}
        {profilePic.length > 0 &&
          uploadProgress < 1 &&
          editClicked === false && (
            <Image
              src={profilePic}
              alt="YourPic"
              className={Styles.ProfileImage}
              priority
              layout="fill"
            />
          )}
        {profilePic.length > 0 && uploadProgress < 1 && editClicked === true && (
          <div className={Styles.CropperWrapper}>
            <Cropper
              image={profilePic}
              crop={crop}
              zoom={zoomPercent / 10}
              aspect={10 / 10}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              cropShape="round"
              objectFit="vertical-cover"
            />
            <div className={Styles.SliderWrapper}>
              <Slider
                defaultValue={0}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={e => {
                  const result = Number((e.target as HTMLInputElement).value)
                  result > 9 && setZoomPercent(result)
                }}
              />
            </div>
          </div>
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

export default memo(DropZone)
