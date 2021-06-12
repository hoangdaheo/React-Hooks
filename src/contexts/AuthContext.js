import React, {createContext,useState,useEffect} from 'react';
export const AuthContext = createContext();
const AuthContextProvider = ({children})=>{
    //? State 
    const [isAuthenticated,setAuthentication] = useState(false);
    const toggleAuth =()=>{
        setAuthentication(!isAuthenticated);
    }
    //? DAta
    const authContextData ={
        isAuthenticated,
        toggleAuth,
    }
    //? useEffect
    useEffect(()=>{
        alert(isAuthenticated? 'Loggin succesful':'You are logged out');
    },[isAuthenticated])
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;