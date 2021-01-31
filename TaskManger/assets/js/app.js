const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The ul
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

// Add Event Listener [Form , clearBtn and filter search input ]
// form submit
form.addEventListener('submit', addNewTask);
// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);
// Filter Task
filter.addEventListener('keyup', filterTasks);

// Add New Task Function definition
function addNewTask(e) {
    alert("Add New Task ....");
    e.preventDefault(); //disable form submission
   }
   // Clear Task Function definition
   function clearAllTasks() {
    alert("Clear tasks ....");
   }
   