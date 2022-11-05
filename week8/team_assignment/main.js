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

        let newTable = document.querySelector('.more-details');
        newTable.addEventListener('click', function() {
            let table = document.getElementById('details');
            let headerRow = document.createElement('tr');

            let headCell1 = document.createElement('th');
            let headCell2 = document.createElement('th');
            let headCell3 = document.createElement('th');
            let headCell4 = document.createElement('th');
            let headCell5 = document.createElement('th');
            let headCell6 = document.createElement('th');
            let headCell7 = document.createElement('th');
            let headCell8 = document.createElement('th');
            let headCell9 = document.createElement('th');

            let headText1 = document.createTextNode('Name');
            let headText2 = document.createTextNode('Rotation Period');
            let headText3 = document.createTextNode('Orbital Period');
            let headText4 = document.createTextNode('Diameter');
            let headText5 = document.createTextNode('Climate');
            let headText6 = document.createTextNode('Gravity');
            let headText7 = document.createTextNode('Terrain');
            let headText8 = document.createTextNode('Surface Water');
            let headText9 = document.createTextNode('Population');

            headCell1.appendChild(headText1);
            headCell2.appendChild(headText2);
            headCell3.appendChild(headText3);
            headCell4.appendChild(headText4);
            headCell5.appendChild(headText5);
            headCell6.appendChild(headText6);
            headCell7.appendChild(headText7);
            headCell8.appendChild(headText8);
            headCell9.appendChild(headText9);

            headerRow.appendChild(headCell1);
            headerRow.appendChild(headCell2);
            headerRow.appendChild(headCell3);
            headerRow.appendChild(headCell4);
            headerRow.appendChild(headCell5);
            headerRow.appendChild(headCell6);
            headerRow.appendChild(headCell7);
            headerRow.appendChild(headCell8);
            headerRow.appendChild(headCell9);

            table.appendChild(headerRow);
            for (let i = 0; i < data.results.length; i++) {
                renderDetails(data.results[i].name, data.results[i].rotation_period, data.results[i].orbital_period, data.results[i].diameter, data.results[i].climate, data.results[i].gravity, data.results[i].terrain, data.results[i].surface_water, data.results[i].population);
        }})

        nextButton(data.next);
        previousButton(data.previous);
    
})
}

function createTable (name, climate, population) {
    //create Elements
    let table = document.getElementById('planets-table');
    
    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    cell1.classList.add('more-details');
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
        let table2 = document.getElementById('details');
        table2.innerHTML = '';
        fetchPlanets(url)
    })
}

function previousButton(url) {
    let button = document.getElementById('previous');
    button.addEventListener('click', function(event) {
        event.preventDefault();
        let table = document.getElementById('planets-table');
        table.innerHTML = '';
        let table2 = document.getElementById('details');
        table2.innerHTML = '';
        fetchPlanets(url)
    })
}

function renderDetails(name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population) {
    //create Elements
    let table = document.getElementById('details');
    
    let row = document.createElement('tr');

    let cell1 = document.createElement('td');
    let cellText1 = document.createTextNode(name);
    cell1.appendChild(cellText1); 

    let cell2 = document.createElement('td');
    let cellText2 = document.createTextNode(rotation_period);
    cell2.appendChild(cellText2);

    let cell3 = document.createElement('td');
    let cellText3 = document.createTextNode(orbital_period);
    cell3.appendChild(cellText3);

    let cell4 = document.createElement('td');
    let cellText4 = document.createTextNode(diameter);
    cell4.appendChild(cellText4);

    let cell5 = document.createElement('td');
    let cellText5 = document.createTextNode(climate);
    cell5.appendChild(cellText5);

    let cell6 = document.createElement('td');
    let cellText6 = document.createTextNode(gravity);
    cell6.appendChild(cellText6);

    let cell7 = document.createElement('td');
    let cellText7 = document.createTextNode(terrain);
    cell7.appendChild(cellText7);

    let cell8 = document.createElement('td');
    let cellText8 = document.createTextNode(surface_water);
    cell8.appendChild(cellText8);

    let cell9 = document.createElement('td');
    let cellText9 = document.createTextNode(population);
    cell9.appendChild(cellText9);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    row.appendChild(cell7);
    row.appendChild(cell8);
    row.appendChild(cell9);
    
    table.appendChild(row);
} 

fetchPlanets('https://swapi.dev/api/planets');