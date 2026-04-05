// Selecting the DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to handle adding a task
function addTask() {
    const taskValue = taskInput.value.trim();

    // Check if add task input is empty
    if (taskValue === "") {
        alert("Please enter a valid task.");
        return;
    }

    // Creation of <li> element
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center animate-fadeIn';

    // Build inner HTML for task, span for text and comtainer for buttons
    li.innerHTML = `
        <span class="task-text">${taskValue}</span>
        <div class="btn-group-sm">
            <button class="btn btn-outline-success toggle-btn">Toggle</button>
            <button class="btn btn-outline-danger delete-btn">Delete</button>
        </div>
    `;

    // Select toggle and delete buttons within the specific <li>
    const toggleBtn = li.querySelector('.toggle-btn');
    const deleteBtn = li.querySelector('.delete-btn');
    const taskText = li.querySelector('.task-text');

    // Logic for Toggle button for strike-through
    toggleBtn.addEventListener('click', function() {
        taskText.classList.toggle('completed');
    });

    // Logic for Delete button for removing task
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    // Append the new task to the <ul> and clear input
    taskList.appendChild(li);
    taskInput.value = "";
    // Returns cursor to input for next task
    taskInput.focus(); 
}

// Event Listener for Add button
addTaskBtn.addEventListener('click', addTask);

// Event Listener for Enter key convenience
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});