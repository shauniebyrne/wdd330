function loadList() {
    const ls = localStorage.getItem('ToDoItem');
    const convJson = JSON.parse(ls);
    return convJson;
}

function savedList(task) {
    //take in array and store in local storage
    localStorage.setItem('ToDoItem', JSON.stringify(task));
}

export {loadList, savedList};