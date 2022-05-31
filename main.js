let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('To-Do-Container');
let newTaskInput = document.getElementById('new-task-input');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    if(newTaskInput.value!="")
    {
        paragraph.innerText = newTaskInput.value;
        toDoContainer.appendChild(paragraph);
        newTaskInput.value = "";
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through";
        }
    )
    }
    else{
        alert("Please Add a Task");
    }
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})