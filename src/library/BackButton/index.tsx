import React from "react"
import Styles from "./BackButton.module.scss"
interface BackButtonProps {
  content: string
  onClickHandler: () => void
}
const Index = ({ content, onClickHandler }: BackButtonProps) => {
  return (
    <button className={Styles.BackButton} onClick={onClickHandler}>
      {content}
    </button>
  )
}

export default Index
