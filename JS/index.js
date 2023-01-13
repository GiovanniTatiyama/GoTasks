const table = document.getElementById('table-body');
const loadingMessage = document.getElementById('loading-message');
const countTasks = document.getElementById('count-tasks');


// updating tasks numbers

function updateCountTasks() {
    const allTasks = getTasks();
    countTasks.innerHTML = allTasks.length;
}

function fillTable() {
    const allTasks = getTasks();
    allTasks.forEach(addTask)

    if(allTasks.length == 0) {
        loadingMessage.innerHTML = 'Você não tem nenhuma tarefa.'
    } else {
        loadingMessage.innerHTML = '';
    }

    updateCountTasks();
}

function addTask(task) {
    const tr = document.createElement('tr');
    tr.innerHTML = innerHTMLTasks(task);
    table.appendChild(tr);

}

// HTML elements interface

function innerHTMLTasks(task) {
    const html = `
        <td>${task.description}</td>
        <td>${task.date}</td>
        <td>
            <a href="#" onclick="removeTask(${task.id})">
            <i class="fa-solid fa-trash"></i>
            </a>
        </td>
    `;

    return html;
}

function removeTask(id) {
    const allTasks = getTasks();
    const tasksFiltered = allTasks.filter(task => task.id !== id)

    setTasks(tasksFiltered);

    reload()
}

function reload() {
    table.innerHTML = ''
    fillTable();
}