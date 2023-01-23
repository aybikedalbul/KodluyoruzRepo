const task = document.querySelector("form input")
const list = document.querySelector("ul")


window.onload = loadTasks; //sayfa yenilendiğinde loadTasks isimli fonksiyona git
// Add submit event listener to form
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    addTask();
});
function loadTasks() {

    if (localStorage.getItem("tasks") == null) return;
    //Get the tasks from localstorage and it to an array

    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")))

    //Loop through the tasks and add them to the list

    tasks.forEach(task => {
        const newLi = document.createElement("li");

        newLi.innerHTML = `  <input type="checkbox" onclick="taskComplete(this)" class="check" ${task.comleted ? 'competed' : ' '}>
        <input type="text" value="${task.task}" class="task ${task.comleted ? 'completed' : ''}" onfocus="getCurrentTask(this)" onblur="editTask(this)">
        <i class="fa fa-trash" onclick="removeTask(this)"></i>`

        list.insertBefore(newLi, list.children[0]);
    });
}

function addTask() {
    // return if task is empty

    if (task.value === "") {
        alert("Please add some task!")
        return false;
    }
    if (document.querySelector(`input[value="${task.value}"]`)) {
        alert("Task already exist!");
        task.value = "";
        return false;
    }
    //add task to local storage

    localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: task.value, completed: false }]))

    // create list item, add innerHTML and appen to ul

    const newLi = document.createElement("li")

    newLi.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check">
    <input type="text" value="${task.value}" class="task" onfocus="getCurrentTask(this)"
        onblur="editTask(this)">
    <i class="fa fa-trash" onclick="removeTask(this)"></i>`

    list.insertBefore(newLi, list.children[0]);
    //clear input 

    task.value = "";
}




function taskComplete(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")))
    tasks.forEach(task => {
        if (task.task === event.nextElementSibling.value) {
            task.comleted = !task.comleted;
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks))
    event.nextElementSibling.classList.toggle("completed")
}
function removeTask(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    tasks.forEach(task => {
        if (task.task === event.parentNode.children[1].value) {
            // delete task
            tasks.splice(tasks.indexOf(task), 1);
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.parentElement.remove();
}


var currentTask = null;

function getCurrentTask(event) {
    currentTask = event.value;
}

//edit the task and update local storage

function editTask(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")))

    //check if task is empty

    if (event.value === "") {
        alert("Task is emty!")
        event.value = currentTask;
        return;
    }
    //task already exist

    tasks.forEach(task => {
        if (task.task === event.value) {
            alert("Task already exist")
            event.value = currentTask;
            return;
        }
    })

    //update task
    tasks.forEach(task => {
        if (task.task === currentTask) {
            task.task = event.value;
        }
    })

    //update local strorage

    localStorage.setItem("tasks", JSON.stringify(tasks))
}


