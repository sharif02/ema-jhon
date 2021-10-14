import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import initiaization from "../Firebase/FirebaseAuth/Firebase.init";

initiaization();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signinPopup = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {

            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    return {
        user,
        logOut,
        signinPopup


    }

}
export default UseFirebase;