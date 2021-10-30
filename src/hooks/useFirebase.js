import {getAuth,signOut, signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication()

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState('')
    const [error, setError] = useState('')
    const [isLoding, setIsLoding] = useState(true)

    // Google login 

    const signInWithGoogle = () =>{

        setIsLoding(true)
        return signInWithPopup(auth, googleProvider)
        

        // (alternative process go_to:Login.js)
        // return signInWithPopup(auth, googleProvider)   
        // .then(result => {
        //     setUser(result.user)
        // })
        // .catch((error) =>{
        //     setError(error)
        // })
        // .finally(() => setIsLoding(false))

    }

    // Log Out 
    const logOut = () =>{
        setIsLoding(true)
        signOut(auth)
        .then(() => ({}))
        .finally(() => setIsLoding(false))
    }

    // Auth Change 

    useEffect(() => {

        setIsLoding(true)

        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser('')
            }
            setIsLoding(false)
        })

        return() => unsubscribed

    }, [])

    return {
        logOut,
        signInWithGoogle,
        user,
        error,
        isLoding,
        setUser,
        setError
    }

}

export default useFirebase