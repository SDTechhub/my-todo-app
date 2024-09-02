const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add task when button is clicked
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value;

    if (taskText !== '') {
        // Create a new task element
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a delete button for the task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        // Delete task when button is clicked
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });

        // Add the task and delete button to the task list
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        // Clear the input box after adding the task
        taskInput.value = '';
    }
});
