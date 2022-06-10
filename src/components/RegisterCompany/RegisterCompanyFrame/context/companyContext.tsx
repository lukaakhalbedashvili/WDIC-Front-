import { createContext } from "react"
type registerCompanyContext = {
  index: number
  setIndex: (newIndex: number) => void
  stages: string[]
  setStages: (newStages: [string]) => void
  errors: object
  setErrors: (newErrors: object) => void
  submitBtn: HTMLButtonElement | undefined
  setSubmitBtn: (newSubmitBtn: HTMLButtonElement) => void
  singUpInputs: { label: string; name: string; type: string; value: string }[]
  setSingUpInputs: (
    newSingUpInputs: {
      label: string
      name: string
      type: string
      value: string
    }[]
  ) => void
  isFormTouched: boolean
  setIsSUFormTouched: (newIsFormTouched: boolean) => void
  profilePic: string
  setProfilePic: (newCompanyPictures: string) => void
  uploadProgress: number
  setUploadProgress: (newUploadProgress: number) => void
  editClicked: boolean
  setEditClicked: (newEditClicked: boolean) => void
}
export const contextRG = createContext<registerCompanyContext>({
  index: 0,
  setIndex: () => {
    //donothing
  },
  stages: [],
  setStages: () => {
    //donothing
  },
  errors: [],
  setErrors: () => {
    //donothing
  },
  submitBtn: undefined,
  setSubmitBtn: () => {
    //donothing
  },
  singUpInputs: [
    {
      label: "",
      name: "",
      type: "",
      value: "",
    },
  ],
  setSingUpInputs: () => {
    //donothing
  },
  isFormTouched: false,
  setIsSUFormTouched: () => {
    //donothing
  },
  profilePic: "",
  setProfilePic: () => {
    //donothing
  },
  uploadProgress: 0,
  setUploadProgress: () => {
    //donothing
  },
  editClicked: false,
  setEditClicked: () => {
    //donothing
  },
})
