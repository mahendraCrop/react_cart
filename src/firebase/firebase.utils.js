import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/firebase-auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCD82K7qpejO_Hr1BHjE6_rraQb7r8d40c",
    authDomain: "crwn-db-825f9.firebaseapp.com",
    databaseURL: "https://crwn-db-825f9.firebaseio.com",
    projectId: "crwn-db-825f9",
    storageBucket: "crwn-db-825f9.appspot.com",
    messagingSenderId: "315122576699",
    appId: "1:315122576699:web:9feef5c2204b729adddb1e",
    measurementId: "G-CSVFBRF9D4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const googleSignin = () => { auth.signInWithPopup(provider) }

export const createUserProfile = async (userAuth, additionData) => {
    console.log("user", userAuth)
    try {
        // check if user is auth
        if (!userAuth) {
            return
        } else {
            // yes user was auth 
            const userRef = firestore.doc(`users/${userAuth.uid}`);
            const getShapshot = await userRef.get();
            console.log('firebase data ', getShapshot);
            if (!getShapshot.exists) {
                // if the user was nit existed create a user copy in firebase db
                const { displayName, email } = userAuth;
                const createDate = new Date()
                console.log('displayName', displayName, "email", email, "additionData", { ...additionData });
                try {
                    await userRef.set({ displayName, email, createDate, ...additionData })
                } catch (error) {
                    console.log('error while creating user record ', error);
                }
            } else {

            }
            return userRef
        }

    } catch (error) {
        console.log("error", error)
    }
}



