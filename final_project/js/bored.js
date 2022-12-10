//fetch url function
function getJSON(url) {
    fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .then((data) => {
            createTable(data);
        })
        .catch(function(error) {
            console.log(error);
        });  
}

function createTable (data) {
    //create elements of table
    let title = document.createElement('h3');
    let table = document.createElement('table');
    let row1 = document.createElement('tr');
    let row2 = document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    let th4 = document.createElement('th');
    let th5 = document.createElement('th');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');

    //put data in created elements
    //title of table
    title.textContent = 'Things To Do If You Are Bored';
    title.classList.add('bigger-size');

    //header cells
    th1.textContent = 'Activity';
    th2.textContent = 'Type';
    th3.textContent = 'Number of Participants';
    th4.textContent = 'Price';
    th5.textContent = 'Link';

    //table data (row of data)
    td1.textContent = data.activity;
    td2.textContent = data.type;
    td3.textContent = data.participants;
    td4.textContent = `$ ${data.price}`;
    td5.textContent = data.link;

    //put table together
    table.appendChild(row1);
    table.appendChild(th1);
    table.appendChild(th2);
    table.appendChild(th3);
    table.appendChild(th4);
    table.appendChild(th5);
    table.appendChild(row2);
    table.appendChild(td1);
    table.appendChild(td2);
    table.appendChild(td3);
    table.appendChild(td4);
    table.appendChild(td5);

    //put table in div holder in HTML
    let div = document.getElementById('table');
    div.appendChild(title);
    div.appendChild(table);

    //code for when the delete table button is pressed
    document.getElementById('delete-table').addEventListener('click', deleteTable);

    function deleteTable () {
        div.textContent = '';
    }
}

//code for when fun button is pressed
document.getElementById('create-table').addEventListener('click', callJson);

function callJson () {
    getJSON('https://www.boredapi.com/api/activity/');
}

