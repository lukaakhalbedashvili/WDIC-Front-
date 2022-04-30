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
          src="https://firebasestorage.googleapis.com/v0/b/green-b3fdd.appspot.com/o/images%2FVAJA.JPG?alt=media&token=f8764540-f9f6-4970-9c45-304387980543"
          width={40}
          height={40}
          alt="CompanyName"
        />
      </div>
      <div className={Styles.SingleResultNameAndStatusDiv}>
        <h4 className={Styles.SingleResultStatus}>Vaja Pshavela</h4>
        <p className={Styles.SingleResultName}>Name</p>
      </div>
    </div>
  )
}

export default SingleSearchResult
