const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

const addTask = () => {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement('div');
    taskItem.classList.add('todo_item');

    const leftContainer = document.createElement('span');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.marginRight = '10px'; 

    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = ' x ';
    deleteBtn.classList.add('delete_icon');
    deleteBtn.style.cursor = 'pointer';

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            taskLabel.style.textDecoration = 'line-through';
            taskLabel.style.color = '#888';
        } else {
            taskLabel.style.textDecoration = 'none';
            taskLabel.style.color = '#000';
        }
    });

    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(taskItem);
    });

    leftContainer.appendChild(checkbox);
    leftContainer.appendChild(taskLabel);

    taskItem.appendChild(leftContainer);
    taskItem.appendChild(deleteBtn);

    todoList.appendChild(taskItem);
    taskInput.value = "";
};

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});