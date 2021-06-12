import React,{useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = ()=>{
    //? lay style tu context <useContext>
    const {theme} = useContext(ThemeContext);
    const {isLightTheme,light,dark} = theme;
    const style = isLightTheme ? light : dark;
   //? load auth context 
    const {isAuthenticated,toggleAuth} = useContext(AuthContext);
    return (

        <div className='navbar' style={style} >
            <h1>
                My hooks app
            </h1>
            <ul>Home</ul>
            <ul>About</ul>
            <li>
                {isAuthenticated?'You are logged in':''}
                <br />
                <button onClick={toggleAuth}>{isAuthenticated?'Log out':'Login'}</button>
            </li>
        </div>
    );
}
export default Navbar;