import axios from "axios"

export const decodeVinApiCall = () =>
  axios.get("https://auto.dev/api/vin/ZPBUA1ZL9KLA00848", {
    headers: {
      origin: "Bearer ZrQEPSkKbHVrYWFraGFsYmVkYXNodmlsaUBnbWFpbC5jb20=",
    },
  })
