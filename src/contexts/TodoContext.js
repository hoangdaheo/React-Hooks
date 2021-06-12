import React,{createContext,useState,useEffect,useReducer} from 'react';

import {v4 as uuidv4} from 'uuid';
import { todoReducer } from '../reducers/TodoReducer';
import { GET_TODOS, SAVE_TODOS } from '../reducers/type';
export const TodoContext = createContext();
const TodoContextProvider = ({children})=>{

    //const [todos, setTodos] = useState([]);
    const [todos, dispatch] = useReducer(todoReducer,[]);



      useEffect(()=>{
        // console.log('Getting todos');
        // const todos = localStorage.getItem('todos');
        // if(todos) {
        //   setTodos(JSON.parse(todos));
        // }
        dispatch({
          type: GET_TODOS,
          payload: null
        })
      },[]);

      useEffect(()=>{
        // console.log('Saving todos');
        // localStorage.setItem('todos',JSON.stringify(todos));
        dispatch({
          type: SAVE_TODOS,
          payload: {todos : todos}
        });
      },[todos])
      // const addTodo = todo =>{
      //     setTodos([...todos,todo])
      // }
      // const deleteTodo = id =>{
      //   console.log('clicked');
      //     setTodos(todos.filter(todo =>{
      //       return todo.id !== id;
      //   }));
      // }
      const todoContextData = {
          todos,
          // addTodo,
          // deleteTodo
          dispatch
      }
    return (
        <TodoContext.Provider value={todoContextData}>
            {children}
        </TodoContext.Provider>
    );
};
export default TodoContextProvider;