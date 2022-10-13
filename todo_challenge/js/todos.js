// Check list
const myInput = document.querySelector('#todo');
const addTaskButton = document.querySelector('button');
const myList = document.querySelector('.list');

addTaskButton.addEventListener('click', function() {
    let input = myInput.value;
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

    checkButton.addEventListener('click', function() {
        listValue.classList.add('cross-out');
    })

    myInput.focus();
})
