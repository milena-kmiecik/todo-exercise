// kod odpowiedzialny za obsługę całej listy to-do
class ToDo {
    constructor(storageKey) {
        this.storageKey = storageKey || 'todo'
        this.tasks = this.loadTasks() || []
        this.container = null
    }

    loadTasks() {
        return JSON.parse(localStorage.getItem(this.storageKey))
    }

    setTasks(newTasks) {
        this.tasks = newTasks
        localStorage.setItem(this.storageKey, JSON.stringify(this.tasks))
        this.render()
    }

    deleteTask(indexToDelete) {
        const newTasks = this.tasks.filter((taskData, index) => {
            return index !== indexToDelete
        })
        this.setTasks(newTasks)
    }

    addTask(text) {
        const newTaskData = {
            text: text,
            isCompleted: false,
        }
        const newTask = this.tasks.concat(newTaskData)
        this.setTasks(newTask)
    }

    editTask(indexToEdit) {
        const newTaskDescription = prompt('Zmień treść zadania', this.tasks[indexToEdit].text)
        if (newTaskDescription !== null) {
            this.tasks[indexToEdit].text = newTaskDescription
            this.setTasks(this.tasks)
        }
    }

    toggleComplete(indexToComplete) {
        const newTasks = this.tasks.map((taskData, index) => {
            if (index !== indexToComplete) return taskData
            return {
                text: taskData.text,
                isCompleted: !taskData.isCompleted
            }
        })
        this.setTasks(newTasks)
    }

    renderTasks(container) {
        this.tasks.forEach((taskData, index) => {
            const task = new Task(
                taskData,
                () => this.toggleComplete(index),
                () => this.deleteTask(index),
                () => this.editTask(index)
            )
            this.container.appendChild(task.render())
        })
    }

    render() {
        if (this.container === null) {
            this.container = document.createElement('div')
            // this.container.classList.add('form')
        }
        this.container.innerHTML = ""
        const form = new Form('', (value) => this.addTask(value))
        this.container.appendChild(form.render())

        this.renderTasks()
        return this.container
    }
}