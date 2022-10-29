//Ajax request - online API's
//First API - NumbersAPI (returns facts about random numbers as a text string)
//Second API - chucknorris.io (returns a JSON string containing random factoids about Chuck Norris)

//Assign each button and div in HTML to a variable 
const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

//Assign URLs to variables
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

//Assign event handlers to each button
//Number facts button
textButton.addEventListener('click', function() {
    fetch(textURL)
    .then (response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;//checks to see if URL is responding and giving a value, if it is it will return the value
    }
        throw Error(response.statusText);//if it is not working, it will send an error code of where it isn't working
    })
    .then(response => response.text() )//takes URL text and changes it to JS text string
    .then(text => outputDiv.innerText = text)//puts the now JS text string into the div
    .catch(error => console.log('There was an error:', error))//prints if there is an error
},false);

//Chuck Norris Fact button
apiButton.addEventListener('click', function() {
    fetch(apiURL)
    .then(response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
        throw Error(response.statusText);
    })
    .then(response => response.json() )//takes JSON data and transforms it into JS object
    .then(data => outputDiv.innerText = data.value )
    .catch(error => console.log('There was an error:', error))
},false);

