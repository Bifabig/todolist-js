import './style.css';

const todos = [
  {
    id: 1,
    description: 'finish todo project',
    compeleted: false,
  },
  {
    id: 2,
    description: 'Task',
    compeleted: false,
  },
  {
    id: 3,
    description: 'Task 3',
    compeleted: false,
  },
];

const renderTodos = () => {
  todos.forEach((todo) => {
    const todoEl = `<li class="todo">
      <div> 
          <input class="completed-btn" type="checkbox"> 
          <p>${todo.description}</p> 
      </div>
      <i class="uil uil-draggabledots"></i>
    </li>`;
    document.querySelector('.todos').innerHTML += (todoEl);
  });
};

renderTodos();
