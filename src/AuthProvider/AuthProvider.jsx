import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext=createContext(null);

const auth =getAuth(app)

const AuthProvider = ({children}) => {
    
    const [user,setUser]=useState(null)


    const userSignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscriber=  onAuthStateChanged(auth,loggedUser=>{
             setUser(loggedUser);
          })
         return ()=>{
            unSubscriber
         }
    },[])

    const authInfo={
        user,
        createUser,
        userSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;