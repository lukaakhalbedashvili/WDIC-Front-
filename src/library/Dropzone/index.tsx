import React, { useRef } from "react"
import Styles from "./DropZone.module.scss"
import uploadToFirebase from "src/services/uploadPhoto"
import Image from "next/image"
import { uploadImageIcon } from "src/utils/consts"
import { useContext } from "react"
import { contextRG } from "src/components/RegisterCompany/RegisterCompanyFrame/context/companyContext"
import classNames from "classnames"

// interface File extends Blob {
//   name: string
// }
const DropZone = () => {
  const { companyPictures } = useContext(contextRG)
  // const [images, setIMages] = useState<FileList>()

  const onCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return
    // setIMages(e.target.files)
    console.log(uploadToFirebase(e.target.files), "YYYY")
  }
  const fileInputRef = useRef<HTMLInputElement>(null)
  console.log(companyPictures)

  return (
    <div
      className={classNames({
        [Styles.main]: true,
        [Styles.PicInIt]: companyPictures.length > 1,
      })}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        multiple
        accept="image/png, image/jpeg"
        onChange={e => onCChange(e)}
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      {companyPictures.length <= 1 && (
        <div className={Styles.uploadImageDiv}>
          <Image src={uploadImageIcon} alt="upload image" layout="fill" />
        </div>
      )}
      {companyPictures.length <= 1 && (
        <div className={Styles.label}>
          <p>drop uour image here or</p>
          <p className={Styles.BrowseOption}>browse</p>
        </div>
      )}
      {companyPictures.length > 1 && (
        <div className={Styles.CompImagesContainer}>
          {companyPictures.map(item => {
            if (item.length > 1) {
              return (
                <div className={Styles.ImageDiv} key={item}>
                  <Image
                    src={item}
                    alt="YourPic"
                    layout="fixed"
                    width={60}
                    height={60}
                  />
                </div>
              )
            }
          })}
        </div>
      )}
    </div>
  )
}

export default DropZone
