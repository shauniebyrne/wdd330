// Check list
const myInput = document.querySelector('#todo');
const addTaskButton = document.querySelector('button');
const myList = document.querySelector('.list');

addTaskButton.addEventListener('click', function() {
    let input = myInput.value;
    myInput.value = '';
    const checkButton = document.createAttribute('button');
    const listValue = document.createElement('li');
    const deleteButton = document.createElement('button');

    checkButton.innerHTML = '&#9745;';
    listValue.textContent = input;
    deleteButton.innerHTML = '&#9746;';

    listValue.appendChild(deleteButton);
    myList.appendChild(listValue);

    deleteButton.addEventListener('click', function() {
        myList.removeChild(listValue);
    });

    myInput.focus();
})
