import {getAuth,signOut, signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication()

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState('')
    const [error, setError] = useState('')

    // Google login 

    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
        .catch((error) =>{
            setError(error)
        })
    }

    // Log Out 
    const logOut = () =>{
        signOut(auth)
        .then(() => {
            console.log('logout successfull')
        })
    }

    // Auth Change 

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser('')
            }
        })

        return() => unsubscribed

    }, [])

    return {
        logOut,
        signInWithGoogle,
        user,
        error
    }

}

export default useFirebase