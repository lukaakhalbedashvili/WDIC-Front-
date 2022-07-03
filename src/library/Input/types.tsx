import { HTMLInputTypeAttribute } from "react"

export type InputType = {
  name?: string
  error?: boolean
  errorMessage?: string | undefined
  type: HTMLInputTypeAttribute
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  placeHolder?: string
  onClick?: () => void
  controled: boolean
}
