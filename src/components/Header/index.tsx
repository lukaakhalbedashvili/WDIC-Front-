import Search from "src/components/Search"
import { FcBusinesswoman } from "react-icons/fc"
import Styles from "./Header.module.scss"
import { useRouter } from "next/router"

const Index = () => {
  const router = useRouter()
  return (
    <div className={Styles.Main}>
      <Search />
      <FcBusinesswoman size={50} onClick={() => router.push("/Signup")} />
    </div>
  )
}

export default Index
