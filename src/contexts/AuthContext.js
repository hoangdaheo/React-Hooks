import React, {createContext,useState,useEffect,useReducer} from 'react';
import { authReducer } from '../reducers/AuthReducer';
export const AuthContext = createContext();
const AuthContextProvider = ({children})=>{
    //? State 
    // const [isAuthenticated,setAuthentication] = useState(false);
    // const toggleAuth =()=>{
    //     setAuthentication(!isAuthenticated);
    // }
    const [isAuthenticated, dispatch] = useReducer(authReducer,false);
    //? DAta
    const authContextData ={
        isAuthenticated,
        dispatch,
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