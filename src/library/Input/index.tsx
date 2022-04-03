import Styles from "./Input.module.scss"
import React from "react"
import classNames from "classnames"
import { BsExclamationCircle } from "react-icons/bs"
import { InputType } from "./types"
const index = ({
  name,
  error,
  errorMessage,
  type,
  value,
  onChange,
  onBlur,
}: InputType) => {
  return (
    <div className={Styles.main}>
      <p
        className={classNames({
          [Styles.inputLabel]: true,
          [Styles.error]: error,
        })}
      >{`${[name]} ${error ? errorMessage : ""}`}</p>
      <div className={Styles.inputDiv}>
        <input
          className={classNames({
            [Styles.input]: true,
            [Styles.error]: error,
          })}
          name={name}
          spellCheck={false}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && <BsExclamationCircle className={Styles.errorIcon} />}
      </div>
    </div>
  )
}
export default index
