function fetchPlanets (url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let table = document.getElementById('planets-table');
        let headerRow = document.createElement('tr');
        let headCell1 = document.createElement('th');
        let headCell2 = document.createElement('th');
        let headCell3 = document.createElement('th');
        let headText1 = document.createTextNode('Name');
        let headText2 = document.createTextNode('Climate');
        let headText3 = document.createTextNode('Population');
        headCell1.appendChild(headText1);
        headCell2.appendChild(headText2);
        headCell3.appendChild(headText3);

        headerRow.appendChild(headCell1);
        headerRow.appendChild(headCell2);
        headerRow.appendChild(headCell3);

        table.appendChild(headerRow);
        for (let i = 0; i < data.results.length; i++) {
            createTable(data.results[i].name, data.results[i].climate, data.results[i].population);
        }
        nextButton(data.next);
        previousButton(data.previous);
    })
}

function createTable (name, climate, population) {
    //create Elements
    let table = document.getElementById('planets-table');
    
    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    let cellText1 = document.createTextNode(name);
    cell1.appendChild(cellText1); 
    let cell2 = document.createElement('td');
    let cellText2 = document.createTextNode(climate);
    cell2.appendChild(cellText2);
    let cell3 = document.createElement('td');
    let cellText3 = document.createTextNode(population);
    cell3.appendChild(cellText3);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    
    table.appendChild(row);
}

function nextButton(url) {
    let button = document.getElementById('next');
    button.addEventListener('click', function(event) {
        event.preventDefault();
        let table = document.getElementById('planets-table');
        table.innerHTML = '';
        fetchPlanets(url)
    })
}

function previousButton(url) {
    let button = document.getElementById('previous');
    button.addEventListener('click', function(event) {
        event.preventDefault();
        let table = document.getElementById('planets-table');
        table.innerHTML = '';
        fetchPlanets(url)
    })
}

fetchPlanets('https://swapi.dev/api/planets');