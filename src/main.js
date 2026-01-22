import { TaskManager } from "./models/TaskManager.js"
import { renderTasks } from "./models/renderTasks.js"

const manager = new TaskManager()
let currentFilter = "all"

const input = document.getElementById("task-input")
const addBtn = document.getElementById("add-task")

function updateUI() {
  if (currentFilter === "pending") {
    renderTasks(manager.getPending())
  } else if (currentFilter === "completed") {
    renderTasks(manager.getCompleted())
  } else {
    renderTasks(manager.getAll())
  }
}

// Adicionar tarefa
addBtn.addEventListener("click", () => {
  if (!input.value.trim()) return

  manager.addTask(input.value)
  input.value = ""
  updateUI()
})

// Enter adiciona tarefa
input.addEventListener("keypress", e => {
  if (e.key === "Enter") addBtn.click()
})

// Eventos customizados
document.addEventListener("toggle-task", e => {
  manager.toggleTask(e.detail)
  updateUI()
})

document.addEventListener("remove-task", e => {
  manager.removeTask(e.detail)
  updateUI()
})

// Inicial
updateUI()

console.log("MAIN JS CARREGADO")
console.log(input, addBtn)
updateUI()