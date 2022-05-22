import "../styles/globals.css"
import "../styles/themes.css"
import "../styles/test.scss"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
