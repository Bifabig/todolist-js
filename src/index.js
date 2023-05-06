import "./style.css";
import { addTodo, deleteAll, renderTodos } from "./functions.js";
import drag from "./drag";

document.querySelector(".text-input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo(e.target.value);
    renderTodos();
    e.target.value = "";
  }
});

document.querySelector(".clear-btn").addEventListener("click", () => {
  deleteAll();
});

renderTodos();
drag();
