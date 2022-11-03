const url = 'https://swapi.dev';
const request = new Request (url, {
    mode: 'non-cors'
})

fetch(request)
    .then(response => response.json())
    .then(function(jsonObejct) {
        const info = jsonObejct['directory'];
    
        info.forEach(displayInfo);
    })

function displayInfo(info) {
    //create Elements
    let section = document.createElement('section');
    let heading = document.createElement('h1');
    let p = document.createElement('p');
    let a = document.createElement('a');

    //Add text content
    heading.textContent = `${info.name}`;
    p.textContent = `${info.birth_year}`;
    a.textContent = `${info.homeworld}`;

    //Append to the section
    section.appendChild(heading);
    section.appendChild(p);
    section.appendChild(a);

    //Add section to HTML div
    document.querySelector('.star-wars').appendChild(section);
}
