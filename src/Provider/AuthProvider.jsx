import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);

// createAccount
    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser);
        })
        return () =>{
            unsubscribe();
        }
    } , []);

// Login
    const logIn = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password);
    }


// logout
    const logOut = () => {
        return signOut(auth);
    }


    console.log(user);

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;