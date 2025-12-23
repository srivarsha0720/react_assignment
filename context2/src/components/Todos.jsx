import TodoContextProvider from "../context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <TodoContextProvider>
      <AddTodo />
      <TodoList />
    </TodoContextProvider>
  );
};

export default Todos;