export const todos = [];

export const save = (todos) => localStorage.setItem('todos', JSON.stringify(todos));

export const getTodos = () => {
  let todos = JSON.parse(localStorage.getItem('todos'));

  if (todos === null) {
    todos = [];
  }

  return todos;
};