import React from "react"
import SearchBar from "react-typeahead-input-component"
const Index = () => {
  const results = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/green-b3fdd.appspot.com/o/images%2Fdesktop.jpeg?alt=media&token=fd696dc5-a1bf-43ed-a458-0b36155a6016",
      title: "Vaja",
      subTitle: "Name",
      payload: "AA",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/green-b3fdd.appspot.com/o/images%2Fdesktop.jpeg?alt=media&token=fd696dc5-a1bf-43ed-a458-0b36155a6016",
      title: "Vaja",
      subTitle: "Name",
      payload: "AA",
    },
  ]

  return (
    <SearchBar
      placeholder="Searching is easier"
      results={results}
      width="40%"
    />
  )
}

export default Index
