import Styles from "./SignUpStages.module.scss"
import { contextRG } from "../SignUpFrame/context/signupContext"
import classNames from "classnames"
import { useContext } from "react"
import { MdDone } from "react-icons/md"
const RegisterStage = () => {
  const { index, setIndex, stages } = useContext(contextRG)
  const handleLabelClick = (itemIndex: number) => {
    itemIndex < index ? setIndex(itemIndex) : null
  }
  return (
    <div className={Styles.main}>
      {stages.map((item, itemIndex) => (
        <div
          key={item}
          className={classNames({
            [Styles.buttonItem]: true,
            [Styles.Active]: itemIndex === index,
          })}
        >
          <p
            className={classNames({
              [Styles.stageIndex]: true,
              [Styles.done]: itemIndex < index,
            })}
            onClick={() => handleLabelClick(itemIndex)}
          >
            {itemIndex < index ? <MdDone size={20} /> : itemIndex + 1}
          </p>
          <p
            className={Styles.stageLabel}
            onClick={() => handleLabelClick(itemIndex)}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  )
}
export default RegisterStage
