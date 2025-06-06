class ToDo{
    static loadDom(){
        document.addEventListener('DOMContentLoaded',() => {
            const listTask = JSON.parse(localStorage.getItem('tasks'))
            for (let i = 0;i<listTask.length; i++)
            ToDo.createElement(listTask[i])
        })
    }
    static createElement(text){
        const root = document.getElementById('data')
        const p = document.createElement('p')
        p.textContent = text
        p.classList.add('task')
        if (root) {root.appendChild(p)}
    }

    static handlerTasks(){
        const button = document.getElementById('clear')
        button.addEventListener('click',() => {
            const task = document.getElementById('dig1').value
            ToDo.createElement(task)

            let arr = []
            if (localStorage.getItem('tasks'))
            arr = JSON.parse(localStorage.getItem('tasks'))
            arr.push(task)
            localStorage.setItem('tasks',JSON.stringify(arr))
            
        })
    }
}

ToDo.handlerTasks()
ToDo.loadDom()