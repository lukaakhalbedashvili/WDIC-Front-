import React from "react"
interface Props {
  theme: string
  children: React.ReactNode
}
const ThemeProvider: React.FC<Props> = ({ theme, children }) => {
  return <div className={`${theme} theme`}>{children}</div>
}

export default ThemeProvider
