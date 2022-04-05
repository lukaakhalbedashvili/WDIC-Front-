import React from "react"
import Styles from "./Textfield.module.scss"
import classNames from "classnames"
type textAreaType = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  value: string
  name: string
  placeholder: string
  error: boolean
  errorMessage: string | undefined
}
const index = ({
  onChange,
  value,
  name,
  placeholder,
  error,
  errorMessage,
}: textAreaType) => {
  console.log(onChange, value, name, placeholder)

  return (
    <div className={Styles.textareaDiv}>
      <label
        htmlFor="compDescription"
        className={classNames({
          [Styles.textAreaLabel]: true,
          [Styles.error]: error,
        })}
      >{`${[name]} ${error ? errorMessage : ""}`}</label>
      <textarea
        className={classNames({
          [Styles.textArea]: true,
          [Styles.error]: error,
        })}
        placeholder="company description"
        name="compDescription"
        id="compDescription"
      ></textarea>
    </div>
  )
}

export default index
