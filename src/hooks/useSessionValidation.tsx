import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"

const useSessionValidation = () => {
  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session) {
      // router.push("/")
    }
  }, [session, router])
}

export default useSessionValidation
