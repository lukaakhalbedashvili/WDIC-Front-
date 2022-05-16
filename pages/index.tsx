import type { NextPage } from "next"
import Search from "src/components/Search"
import ThemeProvider from "src/wrappers/Theme/Theme"
const Home: NextPage = () => {
  return (
    <ThemeProvider theme="light">
      <Search />
    </ThemeProvider>
  )
}

export default Home
