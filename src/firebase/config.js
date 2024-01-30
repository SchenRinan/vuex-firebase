import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlIOM3e0Wu16MQm3NobA5VbnY_Pr_rRN0",
  authDomain: "vue-practice-project-9fa2d.firebaseapp.com",
  projectId: "vue-practice-project-9fa2d",
  storageBucket: "vue-practice-project-9fa2d.appspot.com",
  messagingSenderId: "262464840710",
  appId: "1:262464840710:web:b60e0ad28b272ab1218f87",
  measurementId: "G-ZMJC249MMG"
}

initializeApp(firebaseConfig)

const auth = getAuth()

export { auth }