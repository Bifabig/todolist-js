import './style.css';
import { addTodo,renderTodos, deleteTodo, editTodo } from './functions.js';

document.querySelector('.text-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo(e.target.value);
    renderTodos();
    e.target.value = '';
  }
});

renderTodos()