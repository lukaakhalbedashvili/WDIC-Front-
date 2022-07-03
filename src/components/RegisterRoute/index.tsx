import Input from "src/library/Input"
import Styles from "./RegisterRoute.module.scss"
import useRegisterRoute from "./useRegisterRoute"

const App = () => {
  const { VinInputRef } = useRegisterRoute()
  return (
    <div>
      <div className={Styles.inputWrapper}>
        <Input
          type="text"
          placeHolder="type VIN"
          ref={VinInputRef}
          controled={false}
        />
        <button onClick={() => console.log(VinInputRef?.current?.value)}>
          FIND
        </button>
      </div>
    </div>
  )
}

export default App
