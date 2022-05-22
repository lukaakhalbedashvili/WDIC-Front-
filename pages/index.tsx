import type { NextPage } from "next"
import Search from "src/components/Search"
import Switch from "src/library/Switch"
const Home: NextPage = () => {
  return (
    <>
      <Switch />
      <Search />
    </>
  )
}

export default Home
