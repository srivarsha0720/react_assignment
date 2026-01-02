import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>

      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={`/todo/${todo.id}`}>
            <p>
              {todo.title} -{" "}
              {todo.completed ? "Completed" : "Not Completed"}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TodoList;