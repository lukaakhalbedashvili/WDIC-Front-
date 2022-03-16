import RegisterCompanyFrame from "src/components/RegisterCompany/RegisterCompanyFrame/RegisterCompanyFrame"
import GeneralInfo from "src/components/RegisterCompany/GeneralInfo/GeneralInfo"
import SignUP from "src/components/Auth/SignUP/SignUP"
const stages = [<SignUP key="signUp" />, <GeneralInfo key="generalInfo" />]
const RegisterCompanyPage = () => {
  return (
    <>
      <RegisterCompanyFrame>{stages[0]}</RegisterCompanyFrame>
    </>
  )
}
export default RegisterCompanyPage
