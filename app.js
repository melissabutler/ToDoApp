// //add todo by submitting form
// //mark todo as completed
// //remove a todo

// document.addEventListener("DOMContentLoaded", function(){

const form = document.querySelector("newTodoForm");
const toDoList = document.querySelector('#toDoList');

// //retrieve from localStorage
const savedList = JSON.parse(localStorage.getItem('todos')) || [];
for(let i = 0; i < savedList.length; i++){
  let newTask = document.createElement('li');
  newTask.innerHTML = savedList[i].item;
  toDoList.appendChild(newTask);
  // newTask.isCompleted = savedList[i].isCompleted ? true : false;
  // if(newTask.isCompleted) {
  //   newLi.style.textDecoration = "line-through";
  };

//Create new todo when submitted
newTodoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let newLi = document.createElement('li');
  let newToDoInput = document.querySelector('#item').value;
  newLi.innerText = newToDoInput;
  newLi.isCompleted = false;

  newTodoForm.reset();
  toDoList.append(newLi);
  //change state of completion
  let completeButton = document.createElement('button');
  completeButton.innerText = "Completed";
  completeButton.addEventListener('click', function(e){
    if((newLi.style.textDecoration == "line-through") === false){
      newLi.style.textDecoration = "line-through";
      newLi.isCompleted = true;
    } else {
      newLi.style.textDecoration = "";
      newLi.isCompleted = false;
        }
      });
  newLi.append(completeButton);

  // remove list item
  let removeButton = document.createElement('button');
  removeButton.innerText = "Remove";
  removeButton.addEventListener('click', function(e) {
      e.target.parentElement.remove();
    })
  newLi.append(removeButton)
   //save to localStorage
  savedList.push({ item: newLi.innerHTML, isCompleted: false});
  localStorage.setItem('todos', JSON.stringify(savedList));
  });
  
;


  //Update localStorage Status of remove or completed
  

// //Add or remove Completed Status
// completeButton.addEventListener('click', function(e){
//   let listItem = e.target.parentNode;
//   console.log("is this working");
//   if(listItem.isCompleted = false){
//     listItem.style.textDecoration = "line-through";
//     listItem.isCompleted = true;
//   } else {
//     listItem.style.textDecoration = 'none';
//     listItem.isCompleted = false;
//   }})
//   console.log(listItem.isCompleted);
  

// })

  //save to localStorage
  
  // completeButton.addEventListener('click', function(e){
  //   if((newLi.style.textDecoration == "line-through") === false){
  //       newLi.style.textDecoration = "line-through";
  //   } else {
  //       newLi.style.textDecoration = "";
  //   }
  // });

//save to localStorage
