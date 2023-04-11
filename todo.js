// Get refernces to the input and list elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

//Function to add a new task
function addTask() {
    // Get the value of the input
    const task = taskInput.value;

    // Returns nothing if input is empty
    if (task === '') {
        return;
    }

    // Create new list with item element
    const listItem = document.createElement('li');
    const span = document.createElement('span');

    // Set inner text to input
    span.innerText = task;
    span.classList.add('span');
    listItem.classList.add('list');

    // Create a remove button for list item
    const removeButton = document.createElement('button');
    removeButton.innerHTML = '&#10004';
    removeButton.classList.add('input');
    removeButton.classList.add('button');
    removeButton.onclick = function() {
        if (span.classList.contains('done')) {
            removeButton.innerHTML = '&#10004';
            span.classList.remove('done');
        } else {
            removeButton.innerHTML = '&#10006';
            span.classList.add('done');
        }
    }

    // Add remove button when new element is added
    listItem.appendChild(span);
    listItem.appendChild(removeButton);

    // Add list item to the list
    taskList.appendChild(listItem);

    // Clear the input
    taskInput.value = '';

}

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
})
