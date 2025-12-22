export function renderTasks(tasks) {
  const list = document.getElementById("task-list")
  list.innerHTML = ""

  if (tasks.length === 0) {
    list.innerHTML = `
      <li class="text-slate-400 text-center text-sm">
        Nenhuma tarefa aqui 👀
      </li>
    `
    return
  }

  tasks.forEach(task => {
    const li = document.createElement("li")
    li.className = `
      flex items-center justify-between
      bg-slate-700 p-3 rounded-lg
    `

    li.innerHTML = `
      <div class="flex items-center gap-3">
        <input
          type="checkbox"
          ${task.completed ? "checked" : ""}
          class="w-4 h-4 accent-sky-400"
        />
        <span class="${task.completed ? "line-through text-slate-400" : ""}">
          ${task.title}
        </span>
      </div>

      <button class="text-red-400 hover:text-red-500">
        ✕
      </button>
    `

    li.querySelector("input").addEventListener("change", () => {
      document.dispatchEvent(
        new CustomEvent("toggle-task", { detail: task.id })
      )
    })

    li.querySelector("button").addEventListener("click", () => {
      document.dispatchEvent(
        new CustomEvent("remove-task", { detail: task.id })
      )
    })

    list.appendChild(li)
  })
}