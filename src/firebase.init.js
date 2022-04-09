import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCGTC_dRGO5icup_vFYG6ksDB-AlVCwb4A",
    authDomain: "ema-john-simple-21d26.firebaseapp.com",
    projectId: "ema-john-simple-21d26",
    storageBucket: "ema-john-simple-21d26.appspot.com",
    messagingSenderId: "398686070319",
    appId: "1:398686070319:web:b9a8a1e5031693db0f88da"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
export default auth