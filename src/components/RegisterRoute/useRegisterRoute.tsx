import { useRef } from "react"
import { decodeVinApiCall } from "src/utils/apiCalls"

const useRegisterRoute = () => {
  const VinInputRef = useRef<HTMLInputElement>(null)
  decodeVinApiCall().then(res => console.log(res.data))
  return {
    VinInputRef,
  }
}

export default useRegisterRoute
