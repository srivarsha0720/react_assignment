import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => setTodos(data.slice(0, 10)));
  }, []);

  return (
    <div>
      <h2>Todos</h2>

      <div style={styles.grid}>
        {todos.map(todo => (
          <div key={todo.id} style={styles.card}>
            <h4>{todo.title}</h4>
            <p>
              Status:{" "}
              {todo.completed ? "Completed ✅" : "Not Completed ❌"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
    background: "#f9f9f9",
  },
};

export default Todos;