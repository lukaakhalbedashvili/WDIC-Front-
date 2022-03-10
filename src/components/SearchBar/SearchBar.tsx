import React, { useState } from "react"
import Styles from "./SearchBar.module.scss"
import { CircularProgress } from "@mui/material"
import { IoIosSearch } from "react-icons/io"
import SearchResults from "../SearchResults/SearchResults"
import classnames from "classnames"

const SearchBar = () => {
  const [input, setInput] = useState("")
  return (
    <div className={Styles.MainSearchDiv}>
      <div className={Styles.SearchBarDiv}>
        {input.length > 0 && (
          <p className={Styles.SearchIcon}>
            <CircularProgress color="inherit" size={18} />
          </p>
        )}
        {input.length < 1 && (
          <IoIosSearch className={Styles.SearchIcon} size={35} />
        )}
        <input
          className={classnames({
            [Styles.SearchBarInputFull]: input.length > 0,
            [Styles.SearchBarInput]: input.length < 1,
          })}
          spellCheck={false}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Searching is easier "
          role="search"
          name="search"
        />
        {input.length > 0 && (
          <p className={Styles.SearchBarClearLabel}>Clear</p>
        )}
      </div>
      <div
        className={classnames({
          [Styles.SearchResults]: input.length < 1,
          [Styles.SearchResultsFull]: input.length > 0,
        })}
      >
        <SearchResults input={input} />
      </div>
    </div>
  )
}
export default SearchBar
