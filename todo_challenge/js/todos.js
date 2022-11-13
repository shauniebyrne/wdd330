import { ToDoItems } from "./utilities.js";
import { loadList, savedList } from "./localstorage.js";

// Check list
const myInput = document.getElementById('todo');
const addTaskButton = document.getElementById('add-task');
const myList = document.querySelector('.list');
let toDoList = new Array();
const incompleteTasksButton = document.getElementById('incomplete-tasks');
const completedTasksButton = document.getElementById('completed-tasks');
const incompleteDiv = document.getElementById('incomplete');
const completeDiv = document.getElementById('complete');

addTaskButton.addEventListener('click', function() {
    let id = Date.now();
    let input = myInput.value;
    let complete = false;
    let newItem = new ToDoItems (id, input, complete);

    if (toDoList === null) {
        toDoList = new Array();
        toDoList.push(newItem);
        savedList(toDoList);

    } else {
        toDoList.push(newItem);
        savedList(toDoList);
    }

    const checkButton = document.createElement('button');
    const listValue = document.createElement('li');
    const deleteButton = document.createElement('button');
    const allTogether = document.createElement('li');
    allTogether.classList.add('border-help');

    //create input for buttons and list
    checkButton.innerHTML = '&#9745;';
    listValue.textContent = myInput.value;
    deleteButton.innerHTML = '&#9746;';

    //place all buttons and value in an li then in ul
    allTogether.appendChild(checkButton);
    allTogether.appendChild(listValue);
    allTogether.appendChild(deleteButton);
    myList.appendChild(allTogether);
    myInput.value = '';

    deleteButton.addEventListener('click', function() {
        myList.removeChild(allTogether);
        toDoList.pop();
        savedList(toDoList);
        //delete localStorage.ToDoItem[]
    });

    checkButton.addEventListener('click', function(e) {
        listValue.classList.add('cross-out');
        const found = toDoList.findIndex(element => element.content == input);
        toDoList[found].complete = true;
        savedList(toDoList);
    });

    //send curser in input label everytime so user doesn't have to
    myInput.focus();
})

//Incomplete Tasks button
incompleteTasksButton.addEventListener('click', function() {
    //toggle out completed list and put in incomplete list
    completeDiv.classList.add('hidden');
    incompleteDiv.classList.remove('hidden');
    incompleteDiv.innerHTML = '';

    //display incomplete task list
    toDoList = loadList();
    let incompleteList = toDoList.filter(item => item.complete == false);
    incompleteList.forEach(input => {
        const listContainer = document.createElement('ul');
        const listValue = document.createElement('li');
        const deleteButton = document.createElement('button');
        listValue.classList.add('border-help');
        listValue.classList.add('incomplete');

        //create input for buttons and list
        listValue.textContent = input.content;
        deleteButton.innerHTML = '&#9746;';

        //place all buttons and value in an li then in ul
        listValue.appendChild(deleteButton);
        listContainer.appendChild(listValue);

        //place ul in div
        incompleteDiv.appendChild(listContainer);

        deleteButton.addEventListener('click', function() {
            listContainer.removeChild(listValue);
        });

        //remove list so it can create another list (so it doesn't repeat items)
        completedTasksButton.addEventListener('click', function() {
            incompleteList.innerHTML = '';
            const incompleteItems = document.querySelectorAll('.incomplete');
            incompleteItems.forEach(item => item.remove());
        });
    });  
})

//Completed Tasks button
completedTasksButton.addEventListener('click', function() {
    //Toggle out incomplete list and put in complete list
    incompleteDiv.classList.add('hidden');
    completeDiv.classList.remove('hidden');
    completeDiv.innerHTML = '';

    //display complete task list
    toDoList = loadList();
    let completedList = toDoList.filter(item => item.complete == true);
    completedList.forEach(input => {
        const listContainer = document.createElement('ul');
        const listValue = document.createElement('li');
        const togetherLi = document.createElement('li');
        const deleteButton = document.createElement('button');
        listValue.classList.add('cross-out');
        togetherLi.classList.add('completed');
        togetherLi.classList.add('border-help');

        //create input for buttons and list
        listValue.textContent = input.content;
        deleteButton.innerHTML = '&#9746;';

        //place all buttons and value in an li then in ul
        togetherLi.appendChild(listValue);
        togetherLi.appendChild(deleteButton);
        listContainer.appendChild(togetherLi);

        //place ul in div
        completeDiv.appendChild(listContainer);

        deleteButton.addEventListener('click', function() {
            listContainer.removeChild(togetherLi);
        }); 
        
        //remove list so it doesn't repeat
        incompleteTasksButton.addEventListener('click', function() {
            completedList.innerHTML = '';
            const completedItems = document.querySelectorAll('.completed');
            completedItems.forEach(item => item.remove() );
        });
    }); 
})