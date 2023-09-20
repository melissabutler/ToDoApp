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
  newTask.isCompleted = savedList[i].isCompleted ? true : false;
  if(newTask.isCompleted) {
    newTask.style.textDecoration = 'line-through';
  }
  toDoList.appendChild(newTask);
  newTask.isCompleted = savedList[i].isCompleted ? true : false;
  if(newTask.isCompleted) {
    newTask.style.textDecoration = "line-through";
  };
};
//Create new todo when submitted
newTodoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const newLi = document.createElement('li');
  let newToDoInput = document.querySelector('#item').value;
  newLi.innerText = newToDoInput;
  newLi.isCompleted = false;

  // let completeButton = document.createElement('button');
  // completeButton.innerText = "Completed";
  // newLi.append(completeButton);

  let removeButton = document.createElement('button');
  // removeButton.className = removeBtn;
  removeButton.innerText = "Remove";
  newLi.append(removeButton) 


  newTodoForm.reset();
  toDoList.append(newLi);

  savedList.push({ item: newLi.innerHTML, isCompleted: false,});
    localStorage.setItem('todos', JSON.stringify(savedList));
});

function findIndex(target){
  for(let i = 0; i< savedList.length; i++){
    if(savedList[i].item === target.innerHTML) {
      let foundIndex = [i];
      return(foundIndex);
    }
  }
}

toDoList.addEventListener('click', function(e) {
  e.preventDefault();
  //if clicked item is a button, do remove
  let target = e.target;
  let removeMe = e.target.parentElement;
  let itemTag = e.target.tagName;

  //remove item
  if(itemTag.toLowerCase() === 'button'){
    removeMe.remove();
    let storageIndex = findIndex(removeMe);
    savedList.splice(storageIndex, 1);
    localStorage.setItem('todos', JSON.stringify(savedList));
};
  //update item between completed not
   if(itemTag.toLowerCase() === 'li') {
    if(!target.isCompleted) {
      let storageIndex = findIndex(target);
      target.isCompleted = true;
      target.style.textDecoration = 'line-through';
      savedList[storageIndex].isCompleted = true;
    } else if(target.isCompleted) {
      let storageIndex = findIndex(target);
      target.isCompleted = false;
      target.style.textDecoration = "none";
      savedList[storageIndex].isCompleted = false;
    }

  localStorage.setItem('todos', JSON.stringify(savedList));
}

});
  //if clicked item is li item, strikethrough
 



  // toDoList.addEventListener('click', function(e){
  //   if((newLi.style.textDecoration == "line-through") === false){
  //     newLi.style.textDecoration = "line-through";
  //     newLi.isCompleted = true;
  //   } else {
  //     newLi.style.textDecoration = "";
  //     newLi.isCompleted = false;
  //       }
  //     });
 

  

    
   //update localStorage

  
  ;
  
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
