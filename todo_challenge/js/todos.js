import { ToDoItems } from "./utilities.js";

// Check list
const myInput = document.getElementById('todo');
const addTaskButton = document.getElementById('add-task');
const myList = document.querySelector('.list');
let toDoList = new Array();
const incompleteTasksList = document.getElementById('incomplete-tasks');
const completedTasksList = document.getElementById('completed-tasks');
const incomplete = document.getElementById('incomplete');
const complete = document.getElementById('complete');

addTaskButton.addEventListener('click', function() {
    let id = Date.now();
    let input = myInput.value;
    let complete = false;

    let newItem = new ToDoItems (id, input, complete);
    toDoList.push(newItem);

    myInput.value = '';
    const checkButton = document.createElement('button');
    const listValue = document.createElement('li');
    const deleteButton = document.createElement('button');
    const allTogether = document.createElement('li');
    allTogether.classList.add('border-help');

    //create input for buttons and list
    checkButton.innerHTML = '&#9745;';
    listValue.textContent = input;
    deleteButton.innerHTML = '&#9746;';

    //place all buttons and value in an li then in ul
    allTogether.appendChild(checkButton);
    allTogether.appendChild(listValue);
    allTogether.appendChild(deleteButton);
    myList.appendChild(allTogether);

    deleteButton.addEventListener('click', function() {
        myList.removeChild(allTogether);
    });

    checkButton.addEventListener('click', function(e) {
        listValue.classList.add('cross-out');
        newItem.complete = true;
    });

    myInput.focus();
})

//Incomplete Tasks button
incompleteTasksList.addEventListener('click', function() {
    //toggle out completed list and put in incomplete list
    complete.classList.add('hidden');
    incomplete.classList.remove('hidden');


    //display incomplete task list
    let incompleteList = toDoList.filter(item => item.complete == false);
    incompleteList.forEach(input => {
        const listContainer = document.createElement('ul');
        const listValue = document.createElement('li');
        const deleteButton = document.createElement('button');
        listValue.classList.add('border-help');

        //create input for buttons and list
        listValue.textContent = input.content;
        deleteButton.innerHTML = '&#9746;';

        //place all buttons and value in an li then in ul
        listValue.appendChild(deleteButton);
        listContainer.appendChild(listValue);

        //place ul in div
        document.getElementById('incomplete').appendChild(listContainer);

        deleteButton.addEventListener('click', function() {
            listContainer.removeChild(listValue);
        });
    completedTasksList.addEventListener('click', function() {
        incomplete.removeChild(listContainer);
    });
    });
})

//Completed Tasks button
completedTasksList.addEventListener('click', function() {
    //Toggle out incomplete list and put in complete list
    incomplete.classList.add('hidden');
    complete.classList.remove('hidden');
    
    //display complete task list
    let completedList = toDoList.filter(item => item.complete == true);
    completedList.forEach(input => {
        const listContainer = document.createElement('ul');
        const listValue = document.createElement('li');
        const deleteButton = document.createElement('button');
        listValue.classList.add('cross-out');
        listValue.classList.add('border-help');

        //create input for buttons and list
        listValue.textContent = input.content;
        deleteButton.innerHTML = '&#9746;';

        //place all buttons and value in an li then in ul
        listValue.appendChild(deleteButton);
        listContainer.appendChild(listValue);

        //place ul in div
        document.getElementById('complete').appendChild(listContainer);

        deleteButton.addEventListener('click', function() {
            listContainer.removeChild(listValue);
        });
    incompleteTasksList.addEventListener('click', function() {
        complete.removeChild(completedList);
    });
    });
})