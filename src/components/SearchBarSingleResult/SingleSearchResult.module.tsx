import Styles from "./SingleSearchResult.module.scss"
import classnames from "classnames"
import Image from "next/image"
const SingleSearchResult = ({ input }: { input: string }) => {
  return (
    <div
      className={classnames({
        [Styles.MainSingleResultDiv]: input.length > 0,
        [Styles.MainSingleResultDivUnmounting]: input.length < 1,
      })}
    >
      <div className={Styles.SingleResultImage}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/green-b3fdd.appspot.com/o/images%2F19a97b1db5709c9a0cdaf408adfcc1b3325c74c6_2_690x388.jpeg?alt=media&token=6181058f-7437-416a-a406-edad4b5808c8"
          width={50}
          height={50}
          alt="CompanyName"
        />
      </div>
      <div className={Styles.SingleResultNameAndStatusDiv}>
        <h3 className={Styles.SingleResultStatus}>Luarsab Tatqaridze</h3>
        <p className={Styles.SingleResultName}>saxeli</p>
      </div>
    </div>
  )
}

export default SingleSearchResult
