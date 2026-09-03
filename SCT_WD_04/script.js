document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
        <button onclick="toggleComplete(this)">Complete</button>
    `;
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}

function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const newTask = prompt('Edit your task:', span.textContent);
    if (newTask !== null) {
        span.textContent = newTask;
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

function toggleComplete(button) {
    const li = button.parentElement;
    li.querySelector('span').classList.toggle('completed');
}