import { getTodos, save } from './data';

const todos = getTodos();

export const addTodo = (desc) => {
  todos.push({ id: todos.length, desc, completed: false });
  save(todos);
};

export const deleteTodo = (id) => {
  const i = todos.findIndex((todo) => todo.id === id);
  if (i > -1) todos.splice(i, 1);
  reoderArrIndexes()
  save(todos);
};

export const editTodo = (id, desc) => {
  const todo = todos.find((todo) => todo.id === id);
  console.log(todo);
  todo.desc = desc;
  save(todos);
};

const reoderArrIndexes = () => todos.forEach((a, i)=>{
    a.id = i
})
