//keeps track of state through form.
import React,{useState} from "react";
import { v4 as uuid } from "uuid";

const TodoForm = (addTodo) => {
  
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });
 
  //  const addTodos=(todo)=> {
  //   setTodo([todo, ...todos]);
  //  }

  const handleTaskInputChange=(e)=> {
    setTodo({ ...todo, task: e.target.value });
  }
    

  const handleSubmit=(e)=> {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4,});
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default TodoForm;
