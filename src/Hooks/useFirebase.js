import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import firebaeAuthentication from "../Pages/Login/Firebase/firebase.init";

firebaeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')

    const auth = getAuth()

    //register
    const registerUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const newUser = { email, displayName: name }
                setUser(newUser)

                //update user name on firebase
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        setError('')
                    })
                    .catch(err => setError(err.message))

            })
            .catch(err => setError(err.message))
    }

    //login
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

                setUser(result.user)
                setError('')
            })
            .catch(err => {
                setError(err.message)
            })
    }

    //google
    const signInGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                setError('')
            })
            .catch(err => setError(err.message))
    }

    //facebook
    const signInFacebook = () => {
        const facebookProvider = new FacebookAuthProvider();
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user);
                setError('')
                    .catch(err => setError(err.message))
            })
    }

    //logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                alert('sign out successfully')
                setUser({})
            })
    }


    //tracking user
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
    }, [])



    return {
        user,
        error,
        signInGoogle,
        signInFacebook,
        registerUser,
        loginUser,
        logOut
    }
}



export default useFirebase;