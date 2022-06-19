import RegCom from "src/components/AuthFrame/RegCom"
import SignupProvider from "src/components/AuthFrame/context/SignupProvider"

const RegisterCompanyPage = () => {
  return (
    <SignupProvider>
      <RegCom />
    </SignupProvider>
  )
}
export default RegisterCompanyPage
