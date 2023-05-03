import './style.css';
import { getTodos, save } from './data.js';
import { addTodo, deleteTodo, editTodo } from './functions.js';

const todos = getTodos();

const renderTodos = () => {
  if (todos) {
    todos.forEach((todo) => {
      const todoEl = `<li class="todo">
      <div> 
          <input class="completed-btn" type="checkbox"> 
          <p>${todo.desc}</p> 
      </div>
      <i class="uil uil-draggabledots"></i>
    </li>`;
      document.querySelector('.todos').innerHTML += (todoEl);
    });
  }
};

document.querySelector('.text-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addTodo(e.target.value);
    renderTodos();
    e.target.value = '';
  }
});

document.addEventListener('DOMContentLoaded', renderTodos());