import { useContext } from "react"
import { initializeApp } from "firebase/app"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import { contextRG } from "src/components/SignUpFrame/context/signupContext"
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
}
initializeApp(firebaseConfig)
const storage = getStorage()
const useUploadToFirebase = () => {
  const { setProfilePic, setUploadProgress } = useContext(contextRG)
  const handleUpload = (image: FileList | File | undefined) => {
    if (!image) {
      return "N"
    }
    const handleSingleFile = (image: File) => {
      const storageRef = ref(storage, `images/${image.name}`)
      const uploadTask = uploadBytesResumable(storageRef, image)
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setUploadProgress(progress)

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused")
              break
            case "running":
              console.log("Upload is running")
              break
          }
        },
        error => {
          console.log(error, "error")
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            setUploadProgress(0)
            setProfilePic(downloadURL)
            setUploadProgress(0)
          })
        }
      )
    }
    Object.values(image).length === 1 && handleSingleFile(image as File)

    Object.values(image).length > 1 &&
      Object.values(image).map(singleImage => {
        handleSingleFile(singleImage)
      })
  }
  return handleUpload
}

export default useUploadToFirebase
