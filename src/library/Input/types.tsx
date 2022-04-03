export type InputType = {
  name: string
  error: boolean
  errorMessage: string | undefined
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
}
