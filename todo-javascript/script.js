const myInput = document.getElementById("myInput");
const submitBtn = document.querySelector(".submitBtn");
const todoContainer = document.querySelector(".todo-list");

// myInput.addEventListener("input", ()=>{
//   const userInput = myInput.value;

//   if(userInput.length >= 2){
//     submitBtn.classList.add("submitBtn")
//     submitBtn.classList.remove("disableBtn")

//   }

  
  
// });

// const todos = [];

submitBtn.addEventListener("click", () => {
  const userInput = myInput.value;

  if(userInput.length < 2){
    return alert("Input value cannot be less than 2");
  }
  
  const template = `
    <div class="todo-item">
      <div class="checkButton"></div>
      <p class="todo-title">${userInput}</p>
      <div class="deleteButton">Delete</div>
    </div>
  `

  myInput.value = "";
  todoContainer.innerHTML += template;
  
  const completeBtns = document.querySelectorAll(".todo-item");

  completeBtns.forEach((todo) => {
    const completeBtn = todo.querySelector(".checkButton");
    const todoTitle = todo.querySelector(".todo-title");
    const deleteButton = todo.querySelector(".deleteButton");

    completeBtn.addEventListener("click", () => {
      if(todoTitle.className == "completeTodo"){
        completeBtn.style.background = "Transparent";
        todoTitle.classList.add("todo-title");
        todoTitle.classList.remove("completeTodo");
      } else {
        completeBtn.style.background = "#112D4E";
        todoTitle.classList.remove("todo-title");
        todoTitle.classList.add("completeTodo");
      }
    })

    deleteButton.addEventListener("click", () => {
      deleteButton.parentNode.remove();
    })
  })

});
