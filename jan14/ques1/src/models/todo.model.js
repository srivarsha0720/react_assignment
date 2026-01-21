let todos = [];
let idCounter = 1;

export const getAllTodos = () => {
  return todos;
};

export const createTodo = (title) => {
  const newTodo = { id: idCounter++, title, completed: false };
  todos.push(newTodo);
  return newTodo;
};

export const deleteTodoById = (id) => {
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) return null;
  return todos.splice(index, 1)[0];
};