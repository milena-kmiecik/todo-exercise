// kod odpowiedzialny za wyświetlanie pojedynczego tasku
class Task {
    constructor(task, onComplete, onDelete, onEdit) {
        this.task = task
        this.onComplete = onComplete
        this.onDelete = onDelete
        this.onEdit = onEdit
    }

    render() {
        const container = document.createElement('div')
        container.classList.add('form__item')
        const p = document.createElement('p')
        const editButton = new Button('Edit',this.onEdit,['form__button'])
        const deleteButton = new Button('Delete', this.onDelete, ['form__button','form__button--delete'])

        p.innerText = this.task.text

        // container.style.display = 'flex'
        // container.style.justifyContent = 'space-between'
        // container.style.backgroundColor = 'rgba(0,0,0,0.025'
        // container.style.padding = '4px'
        // container.style.borderRadius = '4px'
        // container.style.marginBottom = '4px'

        if (this.task.isCompleted === true) {
            p.style.textDecoration = 'line-through'
            editButton.setDisabled(true)
        }

        // p.style.margin = '4px'
        // p.style.width = '100%'
        // p.style.fontFamily = 'sans-serif'
        // p.style.fontSize = '14px'
        p.addEventListener('click',
            () => this.onComplete()
        )
        container.appendChild(p)
        container.appendChild(editButton.render())
        container.appendChild(deleteButton.render())
        return container
    }
}