import Styles from "./RegisterStage.module.scss"
const RegisterStage = () => {
  const stages = ["SignUP", "General", "Description", "timing"]

  return (
    <div className={Styles.main}>
      {stages.map((item, index) => (
        <div key={item} className={Styles.buttonItem}>
          <p className={Styles.stageIndex}>{index + 1}</p>
          <p className={Styles.stageLabel}>{item}</p>
        </div>
      ))}
    </div>
  )
}
export default RegisterStage
