const form = document.querySelector(".todo_form")
const input = document.querySelector(".todo_input")
const todo_container = document.querySelector(".todo_container")
let deleteBtns;
let checkboxes;
let editBtns;
const addHTML = (todo) => {
    const todoDiv = document.createElement("div") //bir div yarattık
    todoDiv.classList.add("todo") // yarattığımız div e  todo className verdik

    const todoLeft = document.createElement("div") //bir div yarattık
    todoLeft.classList.add("todo_left")

    const todoCb = document.createElement("input")
    todoCb.type = "checkbox"; //input type ını belirledik
    todoCb.checked = todo.isCompleted
    todoCb.classList.add("todo_cb") //inputa className verdik

    const todoText = document.createElement("span") //bir span yarattık
    todoText.textContent = todo.text; //oluşturduğumuz inputVal in içeriği yukarıda oluşturduğumuz todo nun text i olacak
    todoText.classList.add("todo_text")


    todoLeft.appendChild(todoCb)
    todoLeft.appendChild(todoText)


    const todoRight = document.createElement("div") //bir div yarattık
    todoRight.classList.add("todo_right")
    //todoLeft içine bu ikisini eklemek için:

    const deleteBtn = document.createElement("button") //bir button yarattık
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add("todo_delete") //className todo_left verdik


    const editBtn = document.createElement("button")
    editBtn.classList.add("todo_edit") //className todo_left verdik
    editBtn.textContent = "Edit"

    todoRight.appendChild(deleteBtn)
    todoRight.appendChild(editBtn)

    todoDiv.appendChild(todoLeft)
    todoDiv.appendChild(todoRight)

    todo_container.appendChild(todoDiv)

}
const startConf = () => {
    //başlangıç ayarları
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (!todos) {
        localStorage.setItem("todos", JSON.stringify([]))
    } else {
        todos.forEach(todo => { // Dizinin her elemanı için addHTML çağırmamız lazım
            addHTML(todo);
        });
        deleteBtns = document.querySelectorAll(".todo_delete")
        checkboxes = document.querySelectorAll(".todo_cb")
        editBtns = document.querySelectorAll(".todo_edit")
        console.log(deleteBtns)
    }
}

startConf();


const addTodo = (e) => {
    e.preventDefault(); // sayfa her submit olduğunda sayfayı yenilemesini önler
    const inputVal = input.value;
    const todo = {
        text: inputVal, // object tanımladık
        isCompleted: false,
    };

    const todos = JSON.parse(localStorage.getItem("todos"))
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))

    addHTML(todo);
    form.reset();
}

const deleteTodo = (e) => {
    const todo = e.target.parentElement.parentElement;
    const text = todo.firstChild.children[1].textContent;

    let todos = JSON.parse(localStorage.getItem("todos"))
    todos = todos.filter(td => td.text != text)

    localStorage.setItem("todos", JSON.stringify(todos))
    todo.remove();
}


const completeTodo = (e) => {
    const todo = e.target.parentElement.parentElement;
    const text = todo.firstChild.children[1].textContent;

    let todos = JSON.parse(localStorage.getItem("todos"))
    todos.forEach(td => {
        if (td.text === text)  td.isCompleted = !td.isCompleted
    });
    localStorage.setItem("todos", JSON.stringify(todos))
}   



const editTodo = (e) => {

    const todo = e.target.parentElement.parentElement;
    const text = todo.firstChild.children[1].textContent;

    let todos = JSON.parse(localStorage.getItem("todos"))
    todos = todos.filter(td => td.text != text)

    localStorage.setItem("todos", JSON.stringify(todos))
    todo.remove();
    input.value = text;
}   

form.addEventListener("submit", addTodo);
deleteBtns.forEach(btn => btn.addEventListener("click", deleteTodo))
checkboxes.forEach(btn => btn.addEventListener("click", completeTodo))
editBtns.forEach(btn => btn.addEventListener("click", editTodo))