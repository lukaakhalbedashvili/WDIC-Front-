import Styles from "./Input.module.scss"
import React from "react"
import classNames from "classnames"
import { BsExclamationCircle } from "react-icons/bs"
import { InputType } from "./types"

const Input = React.forwardRef<HTMLInputElement, InputType>(
  (
    {
      name,
      error,
      errorMessage,
      type,
      value,
      onChange,
      onBlur,
      placeHolder,
      onClick,
      controled,
    },
    ref
  ) => {
    return (
      <div className={Styles.main}>
        <p
          className={classNames({
            [Styles.inputLabel]: true,
            [Styles.error]: error,
          })}
        >{`${[name]} ${error ? errorMessage : ""}`}</p>
        <div className={Styles.inputDiv}>
          {controled && (
            <input
              className={classNames({
                [Styles.input]: true,
                [Styles.error]: error,
              })}
              placeholder={placeHolder}
              name={name}
              spellCheck={false}
              type={type}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              onClick={onClick}
              ref={ref}
            />
          )}
          {!controled && (
            <input
              className={classNames({
                [Styles.input]: true,
                [Styles.error]: error,
              })}
              placeholder={placeHolder}
              name={name}
              spellCheck={false}
              type={type}
              onBlur={onBlur}
              ref={ref}
            />
          )}
          {error && <BsExclamationCircle className={Styles.errorIcon} />}
        </div>
      </div>
    )
  }
)
Input.displayName = "Input"
export default Input
