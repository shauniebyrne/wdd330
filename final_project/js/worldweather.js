//fetch url function
function getJSON(url, city) {
    fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .then((data) => {
            weatherCardHTML(data, city);
        })
        .catch(function(error) {
            console.log(error);
        });  
}

//create function to hold DOM and API info
function weatherCardHTML (card, city) {
    //create HTML attributes for section
    let section = document.createElement('section');
    let title = document.createElement('h3');
    let weatherTitle = document.createElement('h3');
    let temp = document.createElement('h5');
    let feelsLike = document.createElement('h5');
    let description = document.createElement('h5');
    let img = document.createElement('img');

    //fill attributes with weather api
    // temp
    title.innerHTML = `Weather in ${city}`;
    temp.innerHTML = `Temp: ${card.main.temp.toFixed()} &#8451`;
    feelsLike.innerHTML = `Feels Like: ${card.main.feels_like.toFixed()} &#8451`;
    //current weather
    weatherTitle.innerHTML = 'Current Weather';
    description.textContent = card.weather[0].description.toUpperCase();
    //weather icon (picture)
    let iconImg = `https://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`;
    img.setAttribute('src', iconImg);
    img.setAttribute('alt', description);

    //append all elements to section
    section.appendChild(title);
    section.appendChild(temp);
    section.appendChild(feelsLike);
    section.appendChild(weatherTitle);
    section.appendChild(description);
    section.appendChild(img);

    //append section to div
    document.getElementById(city).appendChild(section);
}

//create function for each city
function taberCard() {
    getJSON("https://api.openweathermap.org/data/2.5/weather?q=Taber&units=metric&appid=502854408fb5e148e3e7e1ca21917b63", 'Taber');
}

function londonCard() {
    getJSON("https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=502854408fb5e148e3e7e1ca21917b63", 'London');
}
function tempeCard() {
    getJSON("https://api.openweathermap.org/data/2.5/weather?q=Tempe&units=metric&appid=502854408fb5e148e3e7e1ca21917b63", 'Tempe');
}
function saoPauloCard() {
    getJSON("https://api.openweathermap.org/data/2.5/weather?q=Taber&units=metric&appid=502854408fb5e148e3e7e1ca21917b63", 'Sao-Paulo');
}
function durbanCard() {
    getJSON("https://api.openweathermap.org/data/2.5/weather?q=Durban&units=metric&appid=502854408fb5e148e3e7e1ca21917b63", 'Durban');
}
function sydneyCard() {
    getJSON("https://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric&appid=502854408fb5e148e3e7e1ca21917b63", 'Sydney');
}
function tokyoCard() {
    getJSON("https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=502854408fb5e148e3e7e1ca21917b63", 'Tokyo');
}
function khatangaCard() {
    getJSON("https://api.openweathermap.org/data/2.5/weather?q=Khatanga&units=metric&appid=502854408fb5e148e3e7e1ca21917b63", 'Khatanga');
}
function shanghaiCard() {
    getJSON("https://api.openweathermap.org/data/2.5/weather?q=Shanghai&units=metric&appid=502854408fb5e148e3e7e1ca21917b63", 'Shanghai');
}

function delhiCard() {
    getJSON("https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=502854408fb5e148e3e7e1ca21917b63", 'Delhi');
}
function florenceCard() {
    getJSON("https://api.openweathermap.org/data/2.5/weather?q=Florence&units=metric&appid=502854408fb5e148e3e7e1ca21917b63", 'Florence');
}
function madridCard() {
    getJSON("https://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&appid=502854408fb5e148e3e7e1ca21917b63", 'Madrid');
}

//call functions
taberCard();
londonCard();
tempeCard();
saoPauloCard();
durbanCard();
sydneyCard();
tokyoCard();
khatangaCard();
shanghaiCard();
delhiCard();
florenceCard();
madridCard();
