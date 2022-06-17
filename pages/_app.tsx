import "../styles/globals.css"
import "../styles/themes.css"
import "../styles/test.scss"
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
