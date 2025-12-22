import { Task } from "./Task.js"

export class TaskManager {
  constructor() {
    this.tasks = []
  }

  addTask(title) {
    const task = new Task(Date.now(), title)
    this.tasks.push(task)
  }

  removeTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

  toggleTask(id) {
    const task = this.tasks.find(task => task.id === id)
    if (task) task.toggle()
  }

  getAll() {
    return this.tasks
  }

  getPending() {
    return this.tasks.filter(task => !task.completed)
  }

  getCompleted() {
    return this.tasks.filter(task => task.completed)
  }
}