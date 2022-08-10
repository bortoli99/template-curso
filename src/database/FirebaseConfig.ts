import firebase from "firebase/app"
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIRBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIRBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIRBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIRBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIRBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIRBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIRBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIRBASE_MEASUREMENT_ID
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth
export const database = firebase.database
export const storage = firebase.storage 

export default firebase
