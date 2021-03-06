import React, { memo } from "react"
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

const DropZone = () => {
  const {
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
    setFinalImage,
    cropArea,
    setCropArea,
  } = useDropzone()

  return (
    <div
      className={classNames({
        [Styles.main]: true,
        [Styles.PicInIt]: profilePic.length > 1,
        [Styles.InEdit]: editClicked,
      })}
      {...getRootProps({
        onClick: event => {
          editClicked && event.stopPropagation()
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
                  setFinalImage("")
                  setZoomPercent(10)
                }}
              />
              <FaCloudUploadAlt size={40} className={Styles.onHoverIcons} />
              <MdModeEdit
                size={40}
                className={Styles.onHoverIcons}
                onClick={e => handleEditMode(e)}
              />
            </div>
          </div>
        )}

        {profilePic && uploadProgress < 1 && editClicked === false && (
          <Image
            src={finalImage ? finalImage : profilePic}
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
              crop={cropArea}
              zoom={zoomPercent / 10}
              aspect={4 / 4}
              onCropChange={setCropArea}
              onCropComplete={onCropComplete}
              onZoomChange={setZoomPercent}
              cropShape="round"
              objectFit="vertical-cover"
            />

            <div className={Styles.SliderWrapper}>
              <Slider
                sx={{
                  color: "#ebf3fe",
                  "& .MuiSlider-thumb": {
                    color: "pink",
                  },
                }}
                defaultValue={0}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={e => {
                  const result = Number((e.target as HTMLInputElement).value)
                  result < 10 ? setZoomPercent(10) : setZoomPercent(result)
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
