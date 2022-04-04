import React from "react"
import Styles from "./Textfield.module.scss"

const index = () => {
  return (
    <div className={Styles.textareaDiv}>
      <label htmlFor="compDescription">description</label>
      <textarea
        // onFocus={false}
        className={Styles.textarea}
        placeholder="company description"
        name="compDescription"
        id="compDescription"
      ></textarea>
    </div>
  )
}

export default index
