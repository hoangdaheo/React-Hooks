import React, { useState,useContext } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import {v4 as uuidv4} from 'uuid';
import { TodoContext } from "../contexts/TodoContext";
import { AuthContext } from "../contexts/AuthContext";
const Todos = () => {
  const {todos} = useContext(TodoContext);

  //?load AuthContext
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <div className="todo-list">
      <TodoForm/>
      {isAuthenticated?(      <ul>
        {todos.map((todo) => {
          return <TodoItem  key={todo.id} todo={todo}/>;
        })}
      </ul>):<p style={{textAlign:'center'}}>Not Authorized</p>}

    </div>
  );
};
export default Todos;
