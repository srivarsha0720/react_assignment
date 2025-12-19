function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid black", margin: "5px", padding: "5px" }}>
      <p><strong>User ID:</strong> {userId}</p>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Completed:</strong> {completed ? "Yes" : "No"}</p>
    </div>
  );
}

export default TodoCard;