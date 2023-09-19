//add todo by submitting form
//mark todo as completed
//remove a todo
// const form = document.querySelector("form");
// form.addEventListener("submit", function(e) {
//     console.log("Submitted!");
 
// });


const form = document.querySelector("form");
const toDoList = document.querySelector('#toDoList')

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const newToDoInput = document.querySelector('#todoForm');

  const newLi = document.createElement('li');

  const removeButton = document.createElement('button');
  removeButton.innerText = "Nevermind";

  const completeButton = document.createElement('button');
  completeButton.innerText = "Completed?";

  newLi.innerText = newToDoInput.value;
  
  newLi.append(completeButton);
  newLi.append(removeButton);
  toDoList.append(newLi);
  form.reset();

  removeButton.addEventListener('click', function(e) {
    e.target.parentElement.remove();
  });
  completeButton.addEventListener('click', function(e) {
    console.log(newLi);
    newLi.style.textDecoration = "line-through";
  })

  

//   console.log(newLi);
//   const jsonNL = JSON.stringify(newLi.innerHTML);
//   console.log(jsonNL);

//   localStorage.setItem('newLi', jsonNL);

//   console.log(newToDoInput.value);
//   console.log("You submitted " + newToDoInput.value);
});
