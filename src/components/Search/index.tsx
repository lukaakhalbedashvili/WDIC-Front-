import React from "react"
import SearchBar from "react-typeahead-input-component"
const Index = () => {
  const results = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/green-b3fdd.appspot.com/o/images%2FVAJA.JPG?alt=media&token=9bc9d965-164c-4b82-a6a3-9f735f419d2b",
      title: "Vaja",
      subTitle: "Name",
      payload: "AA",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/green-b3fdd.appspot.com/o/images%2FVAJA.JPG?alt=media&token=9bc9d965-164c-4b82-a6a3-9f735f419d2b",
      title: "Vaja",
      subTitle: "Name",
      payload: "AA",
    },
  ]

  return (
    <SearchBar
      placeholder="Searching is easier"
      onClick={payload => console.log(payload)}
      results={results}
      width="40%"
      onChange={payload => console.log(payload)}
    />
  )
}

export default Index
