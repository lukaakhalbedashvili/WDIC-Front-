import Styles from "./SignUP.module.scss"
const SignUP = () => {
  const SingUpIputs = [
    "First Name",
    "Password",
    "Email Address",
    "Repeat Password",
  ]
  return (
    <div className={Styles.main}>
      <h3 className={Styles.stageLabel}>SignUP</h3>
      <form className={Styles.forms}>
        {SingUpIputs.map(item => {
          return (
            <div key={item}>
              <p>{item}</p>
              <input name={item} />
            </div>
          )
        })}
      </form>
    </div>
  )
}

export default SignUP
