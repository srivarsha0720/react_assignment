import { useEffect, useState } from "react";
import { getTodos, createTodo } from "../services/todo.service";
import Navbar from "../components/Navbar";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  const handleAdd = async () => {
    await createTodo({ title, completed: false });
    setTitle("");
    loadTodos();
  };

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="border p-2"
        />
        <button onClick={handleAdd} className="ml-2 bg-blue-500 text-white px-4">
          Add
        </button>

        {todos.map(todo => (
          <p key={todo.id}>{todo.title}</p>
        ))}
      </div>
    </div>
  );
}