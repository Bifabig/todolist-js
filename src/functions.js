/* eslint-disable no-use-before-define */
import { getTodos, save } from './data.js';
import completeHandler from './compeleteTodo.js';

let todos = getTodos();

const editInput = () => {
  const inputEls = document.querySelectorAll('.input-field');
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener('focusin', () => {
      inputEl.classList.add('active');
      inputEl.parentElement.parentElement.classList.add('active');
    });

    inputEl.addEventListener('focusout', () => {
      inputEl.classList.remove('active');
      inputEl.parentElement.parentElement.classList.remove('active');
    });

    inputEl.addEventListener('change', (e) => {
      editTodo(+inputEl.id, e.target.value);
    });
  });
};

export const editTodo = (id, desc) => {
  const todo = todos.find((todo) => todo.id === id);
  todo.desc = desc.trim();

  save(todos);
};

const deleteHandler = () => {
  const removeBtns = document.querySelectorAll('.uil');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      removeTodo(+btn.id);
      renderTodos();
    });
  });
};

export const addTodo = (desc) => {
  todos.push({ id: todos.length + 1, desc: desc.trim(), completed: false });
  save(todos);
};

export const removeTodo = (id) => {
  const i = todos.findIndex((todo) => todo.id === id);
  if (i > -1) todos.splice(i, 1);
  // reOrderIndexes...
  todos.forEach((a, i) => {
    a.id = i + 1;
  });
  // save
  save(todos);
};

export const deleteAll = () => {
  todos = todos.filter((todo) => !todo.completed);
  save(todos);
  renderTodos();
};

export const renderTodos = () => {
  document.querySelector('.todos').innerHTML = '';
  if (todos) {
    todos.forEach((todo) => {
      let inputEl;
      if (todo.completed) {
        inputEl = `<input class="text-input input-field input-${todo.id} crossout" id='${todo.id}' value='${todo.desc}'></input> `;
      } else {
        inputEl = `<input class="text-input input-field input-${todo.id}" id='${todo.id}' value='${todo.desc}'></input> `;
      }

      const todoEl = `<li class="todo">
        <div> 
        <input class="check-btn" id='${todo.id}' ${
  todo.completed ? 'checked' : ''
}  type="checkbox"> 

        ${inputEl}
        </div>
        <i id="${todo.id}"class="uil uil-trash"></i>
        </li>`;

      document.querySelector('.todos').innerHTML += todoEl;
    });
  }

  editInput();
  deleteHandler();
  completeHandler(todos);
};
