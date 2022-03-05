import classnames from "classnames"
import SingleSearchResult from "../SearchBarSingleResult/SingleSearchResult.module"
import Styles from "./SearchResults.module.scss"
const SearchResults = ({ input }: { input: string }) => {
  return (
    <div
      className={classnames({
        [Styles.SearchResults]: input.length < 1,
        [Styles.SearchResultsFull]: input.length > 0,
      })}
    >
      <SingleSearchResult input={input} />
    </div>
  )
}
export default SearchResults
