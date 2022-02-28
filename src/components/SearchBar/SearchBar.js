import Styles from "./SearchBar.module.scss"
import { IoIosSearch } from "react-icons/io"

const SearchBar = () => {
  return (
    <div className={Styles.SearchBarDiv}>
      <IoIosSearch className={Styles.SearchIcon} size={35} />
      <input className={Styles.SearchBarInput} />
    </div>
  )
}
export default SearchBar
