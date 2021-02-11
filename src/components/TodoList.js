//responsible for the list of todos
import React from 'react';
import Todo from "./Todo.js"

const TodoList=({ todos, removeTodo, toggleComplete})=>{
    return (
        <div>
         <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul> 
        </div>
    )
}

export default TodoList;
