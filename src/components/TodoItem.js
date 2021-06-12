import React,{useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';
import { DELETE_TODO } from '../reducers/type';

const TodoItem = (props) =>{
    const {dispatch} = useContext(TodoContext);
    const {theme} = useContext(ThemeContext);
    const {isLightTheme,light,dark} = theme;
    const style = isLightTheme ? light : dark;
    const title  = props.todo.title;
    const id = props.todo.id;
    //const deleteTodo = props.deleteTodo;

    return (
        <li onClick={()=>{
            dispatch({
            type: DELETE_TODO,
            payload: {
                id: id,
            }
        })
        }} style={style}>{title}</li>
    );
}
export default TodoItem;