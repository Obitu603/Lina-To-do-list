const taskInput = document.getElementById('taskInput');
const taskTime = document.getElementById('taskTime');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    const taskDateTime = taskTime.value;

    if (!taskText || !taskDateTime) {
        alert('Please enter both task and time!');
        return;
    }

    const taskItem = document.createElement('li');

    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';

    const taskName = document.createElement('span');
    taskName.textContent = taskText;

    const taskTimeText = document.createElement('span');
    taskTimeText.textContent = new Date(taskDateTime).toLocaleString();
    taskTimeText.className = 'task-time';

    taskContent.appendChild(taskName);
    taskContent.appendChild(taskTimeText);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = () => taskItem.remove();

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    setAlarm(taskText, new Date(taskDateTime));
    taskInput.value = '';
    taskTime.value = '';
}

function setAlarm(task, time) {
    const now = new Date();
    const timeDifference = time - now;

    if (timeDifference > 0) {
        setTimeout(() => {
            alert(`⏰ Reminder: It's time for "${task}"!`);
        }, timeDifference);
    }
}

addTaskButton.addEventListener('click', addTask);