import React, {useState,createContext} from 'react';
export const ThemeContext = createContext();
//? tao kho context` context provider <component>
const ThemeContextProvider = ({children})=>{ //? props.children
    //?state su dung o nhieu component khac nhau 
    const [theme, setTheme] = useState({
        isLightTheme: false,
        light: {
            background: 'rgb(240,240,240)',
            color: 'black',
        },
        dark: {
            background: 'rgb(39,39,39)',
            color:'white',
        }
    });
    //function theme
    const toggleTheme = ()=>{
        setTheme({
            ...theme,
            isLightTheme:!theme.isLightTheme
        })
    }
    // context data <nhet data vao kho>
    const themeContextData = {
        theme: theme,
        toggleTheme

    }
    //? return privider 
    return (
        <ThemeContext.Provider value={themeContextData}>
            {children}
        </ThemeContext.Provider>
    );
}
export default ThemeContextProvider;