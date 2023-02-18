

let sendBtn = document.querySelector("#liveToastBtn")
var ulDom = document.querySelector("#list")
let textDOM = document.querySelector("#task")


const clearBtn = document.getElementById("ClearBtn")


window.onload = loadTask; //onload
sendBtn.addEventListener("submit", (e) => {
   e.preventDefault();
   newElement()
})

function loadTask() {
   if (localStorage.getItem("tasks") == null) return;
   let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")))

   tasks.forEach(todo => {
     
      const newLi = document.createElement("li");
      newLi.innerHTML = todo.task;
      newLi.setAttribute('data-text', todo.task) 
      /* 
      25.satırın nedeni: Altta açtığımız butonu (X) da newLi içerisine attığımız için;
      taskComplete fonksiyonun içerisindeki veriyi okuyacağı zaman butonu da okur.
      Fakat 25. satırda girilen text i bir değişkene atadığımız için, bu taskı  kullanmak 
      istediğimiz zaman  değişkenin ismini kullanabiliyoruz. Böylece newLi içerisindeki
      tüm veriyi almamış oluyoruz.
      */
      newLi.onclick = taskComplete;
       if(todo.completed){ //new
         newLi.classList.add('completed');
      }
      const button = document.createElement("button");
      button.innerHTML = "X";
      button.onclick = removeTask;
      newLi.appendChild(button);
      ulDom.insertBefore(newLi, ulDom.children[0]);

         
   });
}
function newElement() {
   if (textDOM.value.trim() === "") {
      alert("Please add some task!")
      return false;
   }
   if (document.querySelector(`input[value="${textDOM.value}"]`)) {
      alert("Task already exist!")
      textDOM.value = "";
      return false;
   }
  
   localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: textDOM.value, completed: false }]))
   const newLi = document.createElement("li")
   newLi.onclick = taskComplete;
   const button = document.createElement("button")
   button.innerHTML = "X";
   button.onclick = removeTask;
   newLi.appendChild(button);
   ulDom.insertBefore(newLi, ulDom.children[0]);
   location.reload();
   task.value = "";
}

//Task is complete:
function taskComplete(event){
   let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")))
   let text = event.target.getAttribute('data-text'); //new
   tasks.forEach(todo =>{
      if(todo.task == text){ //new
         todo.completed = !todo.completed;
      }
   })
   //Save Localstorage
   localStorage.setItem("tasks", JSON.stringify(tasks))
   event.target.classList.toggle("completed");

}


//Delete
function removeTask(event) {
   let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")))
   tasks.forEach(todo => {
      if (todo.task == event.target.parentNode.firstChild.textContent) {
         tasks.splice(tasks.indexOf(todo), 1);
      }
   });
   localStorage.setItem("tasks", JSON.stringify(tasks))
   event.target.parentElement.remove();

}
function removeAll(event) {
   localStorage.clear();
   location.reload();
}


function editTask(event) {
   //
}

sendBtn.addEventListener("submit", newElement)