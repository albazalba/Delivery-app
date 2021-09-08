import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCEPqJnSNGv-cDW-yiSxHO0Z4CMum_L7PE",
    authDomain: "delivery-app-4efbf.firebaseapp.com",
    projectId: "delivery-app-4efbf",
    storageBucket: "delivery-app-4efbf.appspot.com",
    messagingSenderId: "638738688389",
    appId: "1:638738688389:web:02ff8fab4aa08183abbcec"
});

export const auth = app.auth()
export default app
