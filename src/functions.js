import { getTodos, save } from './data.js';

const todos = getTodos();

export const addTodo = (desc) => {
  todos.push({ id: todos.length, desc, completed: false });
  save(todos);
};

export const deleteTodo = (id) => {
  const i = todos.findIndex((todo) => todo.id === id);
  if (i > -1) todos.splice(i, 1);
  // reOrderIndexes...
  todos.forEach((a, i) => {
    a.id = i;
  });
  // save
  save(todos);
};

export const editTodo = (id, desc) => {
  const todo = todos.find((todo) => todo.id === id);
  todo.desc = desc;
  save(todos);
};

export const renderTodos = () => {
  document.querySelector('.todos').innerHTML = '';
  if (todos) {
    todos.forEach((todo) => {
      const todoEl = `<li class="todo">
        <div> 
            <input class="completed-btn" type="checkbox"> 
            <p>${todo.desc}</p> 
        </div>
        <i class="uil uil-draggabledots"></i>
        </li>`;
      document.querySelector('.todos').innerHTML += todoEl;
    });
  }
};
