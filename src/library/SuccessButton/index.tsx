import classNames from "classnames"
import React from "react"
import Styles from "./SuccessButton.module.scss"
interface SuccessButtonProps {
  content: string
  disabled: boolean
  hanldeSubmit: () => void
}
const Index = ({ content, disabled, hanldeSubmit }: SuccessButtonProps) => {
  return (
    <button
      type="button"
      className={classNames({
        [Styles.submitBtn]: true,
        [Styles.disabled]: disabled,
      })}
      onClick={() => hanldeSubmit()}
      disabled={disabled}
    >
      {content}
    </button>
  )
}

export default Index
