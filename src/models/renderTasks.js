export function renderTasks(tasks, lang = "pt") {
  const list = document.getElementById("task-list")
  list.innerHTML = ""

  if (tasks.length === 0) {
    list.innerHTML = `
      <li class="text-slate-400 text-center text-sm">
        ${lang === "pt"
        ? "Nenhuma tarefa por aqui 👀" : "No tasks here 👀"}
      </li>
    `
    return
  }

  tasks.forEach(task => {
    const li = document.createElement("li")
    li.className = `
      flex items-center justify-between
      px-4 py-3
      rounded-x1
      bg-zinc-800/70
      border border-zinc-700/60
      backdrop-blur
      transition-all duration-300
      hover:bg-zinc-800
      hover:border-zinc-600
      hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]
    `

    li.innerHTML = `
      <div class="flex items-center gap-3">
        <input
          type="checkbox"
          ${task.completed ? "checked" : ""}
          class="w-4 h-4 accent-zinc-300 cursor-pointer"
        />

        <span class="
        text-sm tracking-wide
        ${task.completed ? "line-through text-zinc-500" : "text-zinc-200"}
        ">
          ${task.title}
        </span>
      </div>

      <button class="
        text-zinc-500 hover:text-red-400
        transition
      ">
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
