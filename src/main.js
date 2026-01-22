import { TaskManager } from "./models/TaskManager.js"
import { renderTasks } from "./models/renderTasks.js"



let currentLang = "pt"

const translations = {
  pt: {
    title: "Tarefas",
    placeholder: "Nova tarefa...",
    empty: "Nenhuma tarefa por aqui 👀"
  },
  en: {
    title: "Smart Tasks",
    placeholder: "New task...",
    empty: "No tasks here 👀"
  }
}

const langBtn = document.getElementById("lang-toggle")
const title = document.querySelector("h1")

function updateLanguage() {
  title.textContent = translations[currentLang].title
  input.placeholder = translations[currentLang].placeholder

  langBtn.textContent = currentLang.toUpperCase()

  updateUI()
}

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt"
  updateLanguage()
})





const manager = new TaskManager()
let currentFilter = "all"

const input = document.getElementById("task-input")
const addBtn = document.getElementById("add-task")

function updateUI() {
  if (currentFilter === "pending") {
    renderTasks(manager.getPending(), currentLang)
  } else if (currentFilter === "completed") {
    renderTasks(manager.getCompleted(), currentLang)
  } else {
    renderTasks(manager.getAll(), currentLang)
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