const url = 'https://swapi.dev/api/people/';

fetch(url)
    .then(function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            return response.json();
        }
    })
    .then(function response (jsonObject) {
        const info = jsonObject['results'];
    
        info.forEach(displayInfo);
        console.log(info);
    })
    .catch(function (error) {
        console.log(error);
    });

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
