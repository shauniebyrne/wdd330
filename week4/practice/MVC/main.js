'use strict'
//for variable holding the form info
const form = document.forms[0];

//create Item class
class Item {
    constructor(name) {
        this.name = name;
    }
}

//adds an event listener to see when user adds info, this thn creates a new instance and then shows the updated view
const controller = {
    watch(form) {
        form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent the form from being submitted
        this.add(form.name.value);
        }, false);
    },

    add(name) {
        const item = new Item(name);
        view.render(item);
    }
};

//create a view object with a render method (produces an HTML fragment that shows the instances name)
const view = {
    render(item) {
        const list = document.getElementById('list');
        const li = document.createElement('li');
        li.innerHTML = item.name;
        list.appendChild(li);
        // reset the input field
        form.name.value = '';
    }
};

//call the watch() method that keeps an eye on the form and checks when it is submitted
controller.watch(form);