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
            cityWeather(data);
        })
        .catch(function(error) {
            console.log(error);
        });  
}

//create function to show API on the DOM
function cityWeather(data) {
    //create necessary elements
    //create section for each weather card
    let section1 = document.createElement('section');
    let section2 = document.createElement('section');
    let section3 = document.createElement('section');
    let section4 = document.createElement('section');
    let section5 = document.createElement('section');
    section1.classList.add('grow');
    section2.classList.add('grow');
    section3.classList.add('grow');
    section4.classList.add('grow');
    section5.classList.add('grow');
    
    //create heading for each card
    let heading1 = document.createElement('h3');
    let heading2 = document.createElement('h3');
    let heading3 = document.createElement('h3');
    let heading4 = document.createElement('h3');
    let heading5 = document.createElement('h3');
    
    //create elements for inside each weather card
    //weather info
    let description = document.createElement('h5');
    let img = document.createElement('img');

    //main info
    let temp = document.createElement('h5');
    let feelsLike = document.createElement('h5');
    let tempMin = document.createElement('h5');
    let tempMax = document.createElement('h5');
    let humidity = document.createElement('h5');

    //wind info
    let speed = document.createElement('h5');
    let gust = document.createElement('h5');

    //cloud info
    let cloud = document.createElement('h5');

    //system info
    let sunrise = document.createElement('h5');
    let sunset = document.createElement('h5');

    //put API info into elements
    //current weather
    heading1.textContent = 'Current Weather';
    description.textContent = data.weather[0].description.toUpperCase();
    //weather icon (picture)
    let iconImg = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    img.setAttribute('src', iconImg);
    img.setAttribute('alt', description);

    //main weather
    heading2.textContent = 'Temperature Information'
    temp.innerHTML = `Temperature: ${data.main.temp.toFixed()} &#8451`;
    feelsLike.innerHTML = `Feels Like: ${data.main.feels_like.toFixed()} &#8451`;
    tempMax.innerHTML = `Maximum: ${data.main.temp_max.toFixed()} &#8451`;
    tempMin.innerHTML = `Minimum: ${data.main.temp_min.toFixed()} &#8451`;
    humidity.textContent = `Humidity: ${data.main.humidity} %`;

    //wind info
    heading3.textContent = 'Wind Information';
    speed.textContent = `Speed: ${data.wind.speed} meters/sec`;
    gust.textContent = `Gusting at: ${data.wind.gust} meters/sec`

    //cloud info
    heading4.textContent = 'Cloud Cover';
    cloud.textContent = `Cloudiness: ${data.clouds.all} %`;

    //system info
    heading5.textContent = 'Sunrise/Sunset';

    //convert UTC/unix time to clock
    let sunriseTimeStamp = new Date(data.sys.sunrise * 1000);
    amHours = sunriseTimeStamp.getHours();
    amMinutes = sunriseTimeStamp.getMinutes();
    amSeconds = sunriseTimeStamp.getSeconds();
    amTime = `${amHours}:${amMinutes}:${amSeconds}`

    let sunsetTimeStamp = new Date(data.sys.sunset * 1000);
    pmHours = sunsetTimeStamp.getHours();
    pmMinutes = sunsetTimeStamp.getMinutes();
    pmSeconds = sunsetTimeStamp.getSeconds();
    pmTime = `${pmHours}:${pmMinutes}:${pmSeconds}`;

    sunrise.textContent = `Sunrise: ${amTime}`;
    sunset.textContent = `Sunset: ${pmTime}`;

    //add weather card info to each section
    //weather card
    section1.appendChild(heading1);
    section1.appendChild(description);
    section1.appendChild(img);

    //temperature card
    section2.appendChild(heading2);
    section2.appendChild(temp);
    section2.appendChild(feelsLike);
    section2.appendChild(tempMax);
    section2.appendChild(tempMin);
    section2.appendChild(humidity);

    //wind card
    section3.appendChild(heading3);
    section3.appendChild(speed);
    section3.appendChild(gust);

    //cloud card
    section4.appendChild(heading4);
    section4.appendChild(cloud);

    //system card
    section5.appendChild(heading5);
    section5.appendChild(sunrise);
    section5.appendChild(sunset);

    //add each section to div on HTML
    const mainDiv = document.getElementById('info-holder');
    mainDiv.appendChild(section1);
    mainDiv.appendChild(section2);
    mainDiv.appendChild(section3);
    mainDiv.appendChild(section4);
    mainDiv.appendChild(section5);
}

//code for when the button is pressed
document.getElementById('show-info').addEventListener('click', usersChoice)

function usersChoice () {
    let userValue = document.getElementById('city-of-choice').value;

    //create heading for the city chosen
    let cityHeading = document.createElement('h3');
    cityHeading.textContent = userValue;
    document.getElementById('info-holder').appendChild(cityHeading);
    
    getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${userValue}&units=metric&appid=502854408fb5e148e3e7e1ca21917b63`);
    localStorage.setItem('cityChoice', userValue);
}

window.onload = savedCityInfo;

function savedCityInfo () {
    let cityHeading = document.createElement('h3');
    cityHeading.textContent = localStorage.getItem('cityChoice');
    document.getElementById('info-holder').appendChild(cityHeading);

    getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem('cityChoice')}&units=metric&appid=502854408fb5e148e3e7e1ca21917b63`)
}