import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);

    const [loading , setLoading] = useState(true);

    console.log(loading , user);

// createAccount
    const createUser = (email , password) => {

        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , (currentUser) => {

            setUser(currentUser);
            setLoading(false);

        })
        return () =>{

            unsubscribe();

        }
    } , []);

// Login
    const logIn = (email , password) => {

        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);

    }


// logout
    const logOut = () => {
        return signOut(auth);
    }


// profile update
    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser , updateData);
    }

// google sign in
    const googleLogIn = (provider) => {
        return signInWithPopup(auth , provider);
    }

// forget password
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth , email);
    }
   

    // console.log(user);

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        loading,
        setLoading,
        updateUser,
        googleLogIn,
        forgetPassword,
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;