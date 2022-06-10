import React, { useState, createContext } from "react";

export const TodoContex = createContext();

const TodoProvider = ({children}) => {
 const [todos, setTodos]=useState([
    {id:1,  title: 'Respeitosa', done:false},
     {id:2,  title: 'Brincalhona', done:false},
      {id:3,  title: 'Feliz', done:false},
       {id:4,  title: 'Alegre', done:false}
]);

const saveTodo = todo =>{
    const newTodo={
        id: todos.length +1,
        title: todo.title,
        done: false,
    };
    setTodos([...todos,newTodo]);
}
return(
<TodoContex.Provider value={{todos, saveTodo}}>
{children}
</TodoContex.Provider>
);
}

export default TodoProvider;