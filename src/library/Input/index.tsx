import Styles from "./Input.module.scss"
import React from "react"
import classNames from "classnames"
import { BsExclamationCircle } from "react-icons/bs"
type Input = {
  name: string
  error: boolean
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
}
const index = ({ name, error, type, value, onChange, onBlur }: Input) => {
  return (
    <div className={Styles.main}>
      <input
        className={classNames({
          [Styles.SignUPInput]: true,
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
  )
}
export default index
