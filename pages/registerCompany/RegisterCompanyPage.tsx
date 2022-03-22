import RegCom from "src/components/RegisterCompany/RegisterCompanyFrame/RegCom"
import RegisterCompanyProvider from "src/components/RegisterCompany/RegisterCompanyFrame/context/RegisterCompanyProvider"

const RegisterCompanyPage = () => {
  return (
    <RegisterCompanyProvider>
      <RegCom />
    </RegisterCompanyProvider>
  )
}
export default RegisterCompanyPage
