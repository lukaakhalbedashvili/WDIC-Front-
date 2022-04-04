import Styles from "./Input.module.scss"
import React, { useContext } from "react"
import classNames from "classnames"
import { BsExclamationCircle } from "react-icons/bs"
import { InputType } from "./types"
import { contextRG } from "src/components/RegisterCompany/RegisterCompanyFrame/context/companyContext"

const Index = ({
  name,
  error,
  errorMessage,
  type,
  value,
  onChange,
  onBlur,
}: InputType) => {
  const { setIsFormTouched } = useContext(contextRG)
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
          onClick={() => setIsFormTouched(true)}
        />
        {error && <BsExclamationCircle className={Styles.errorIcon} />}
      </div>
    </div>
  )
}
export default Index
