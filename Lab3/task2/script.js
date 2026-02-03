const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement('div');
    taskItem.classList.add('todo_item');

    taskItem.innerHTML = `
        <span>
            <input type="checkbox"> 
            ${taskText}
        </span>
        <span class="delete_icon" style="cursor: pointer;">❌</span>
    `;

    todoList.appendChild(taskItem);

    taskInput.value = "";

    const deleteBtn = taskItem.querySelector('.delete_icon');
    deleteBtn.addEventListener('click', () => {
        taskItem.remove();
    });
});