// import { render } from "@testing-library/react"

// test("test jest", () => {
//   render(<SearchBar />)
// })

import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

import SearchBar from "./SearchBar"
describe("<SearchBar />", () => {
  render(<SearchBar />)
})
