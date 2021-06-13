import React,{useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { TOGGLE_AUTH } from '../reducers/type';

const Navbar = ()=>{
    //? lay style tu context <useContext>
    const {theme} = useContext(ThemeContext);
    const {isLightTheme,light,dark} = theme;
    const style = isLightTheme ? light : dark;
   //? load auth context 
    const {isAuthenticated,dispatch} = useContext(AuthContext);
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
                <button onClick={()=>{
                    dispatch({
                        type: TOGGLE_AUTH,
                        payload: null,
                    })
                }

                }>{isAuthenticated?'Log out':'Login'}</button>
            </li>
        </div>
    );
}
export default Navbar;