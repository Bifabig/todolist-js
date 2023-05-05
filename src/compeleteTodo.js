import { save, getTodos } from "./data";
// const todos = getTodos();

export const completeHandler = (todos) => {
  const checkboxes = document.querySelectorAll(".check-btn");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const todo = todos.find((todo) => todo.id === +e.target.id);

      if (!todo.completed) {
        document.querySelector(`.input-${todo.id}`).classList.add("crossout");
      } else {
        document
          .querySelector(`.input-${todo.id}`)
          .classList.remove("crossout");
      }

      todo.completed = !todo.completed;
      save(todos);
    });
  });
};
