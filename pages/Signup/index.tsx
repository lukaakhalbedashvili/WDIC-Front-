import GeneralInfo from "src/components/SigmUpPhotoUpload/GeneralInfo"
import SignUP from "src/components/SignUP/SignUP"
import SignUpFrame from "src/components/SignUpFrame"
import SignupProvider from "src/components/SignUpFrame/context/SignupProvider"

const RegisterCompanyPage = () => {
  const stagesComponents = [
    <SignUP key="signUp" />,
    <GeneralInfo key="generalInfo" />,
  ]

  return (
    <SignupProvider>
      <SignUpFrame stagesComponents={stagesComponents} />
    </SignupProvider>
  )
}
export default RegisterCompanyPage
