import React, { useState,useContext } from "react";
import {v4 as uuidv4} from 'uuid';
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";
import { ADD_TODO } from "../reducers/type";

const TodoForm = (props) => {
  const {dispatch} = useContext(TodoContext);
  const {theme} = useContext(ThemeContext);
  const {isLightTheme,light,dark} = theme;

  const style = isLightTheme ? light : dark;
  const [title, setTitle] = useState("");
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  //const addTodo = props.addTodo;
  const handleSubmit = (event) => {
    event.preventDefault();
    // addTodo({id:uuidv4(),title:title});
    dispatch({
      type: ADD_TODO,
      payload: {todo:{
        id:uuidv4(),
        title:title,
      }}
    })
    setTitle('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input  required value={title} onChange={onTitleChange} type="text" name="title" onChange={onTitleChange} />
      <input style={style} type="submit" value="Add"/>
    </form>
  );
};
export default TodoForm;
