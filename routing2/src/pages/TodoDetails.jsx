import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TodoDetails() {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [todoId]);

  if (!todo) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>Todo Details</h2>
      <p><b>ID:</b> {todo.id}</p>
      <p><b>Title:</b> {todo.title}</p>
      <p>
        <b>Status:</b> {todo.completed ? "Completed" : "Not Completed"}
      </p>
    </div>
  );
}

export default TodoDetails;