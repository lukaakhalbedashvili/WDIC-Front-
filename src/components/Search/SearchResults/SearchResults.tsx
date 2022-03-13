import classnames from "classnames"
import SingleSearchResult from "../SearchBarSingleResult/SingleSearchResult.module"
import Styles from "./SearchResults.module.scss"
const SearchResults = ({ input }: { input: string }) => {
  const test = [1, 2]

  return (
    <div
      className={classnames({
        [Styles.SearchResults]: input.length < 1,
        [Styles.SearchResultsFull]: input.length > 0,
      })}
    >
      {test.map((item) => (
        <SingleSearchResult input={input} key={item} />
      ))}
    </div>
  )
}
export default SearchResults
