/* eslint-disable no-use-before-define */
import { getTodos, save } from './data.js';

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
  todo.desc = desc;

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
  todos.push({ id: todos.length + 1, desc, completed: false });
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
  todos = [];
  save(todos);
  renderTodos();
};

const completedTodo = (id) => {
  const todo = todos.find((todo) => todo.id === +id);
  todo.completed = !todo.completed;
  save(todos);
}


const completeHandler = () => {
  const checkboxes = document.querySelectorAll('.completed-btn');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) =>{
      console.log(e.target.id);
      console.log(e.target.checked);
      completedTodo(e.target.id);
      // e.target.checked = ! e.target.checked;
    });
  })

}

export const renderTodos = () => {
  document.querySelector('.todos').innerHTML = '';
  if (todos) {
    todos.forEach((todo) => {
      const todoEl = `<li class="todo">
        <div> 
            <input class="completed-btn" id='${todo.id}' type="checkbox"> 
            <input class="text-input input-field" id='${todo.id}' value='${todo.desc}'></input> 
        </div>
        <i id="${todo.id}"class="uil uil-trash"></i>
        </li>`;

        
        document.querySelector('.todos').innerHTML += todoEl;

    });
  }

  editInput();
  deleteHandler();
  completeHandler()
};