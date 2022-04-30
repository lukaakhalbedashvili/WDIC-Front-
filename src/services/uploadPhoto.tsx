import { initializeApp } from "firebase/app"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"

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
////////////
const uploadToFirebase = (images: FileList | undefined) => {
  if (!images) {
    return "N"
  }
  return Object.values(images).map(image => {
    const imageURLS: string[] = []
    const storageRef = ref(storage, `images/${image.name}`)
    const uploadTask = uploadBytesResumable(storageRef, image)
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log("Upload is " + progress + "% done")
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
          imageURLS.push(downloadURL)
        })
      }
    )
  })
}

export default uploadToFirebase
