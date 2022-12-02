//For drag and drop of moon and sun images on index.html page
//grab moon (drag) imag
const moon = document.getElementById('moon');

//add an event listener for the dragstart event, so the moon can be dragged
moon.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData("text/plain", this.id);
})

//add an event listener to the sun so it can be changed by the moon using dragover and drop
const sun = document.getElementById('sun');
sun.addEventListener('dragover', function(event) {
    event.preventDefault();
})
sun.addEventListener('drop', function(event) {
    let newSunHeading = 'Solar Eclipse';

    //grab h3 heading to change to message above
    let sunHeading = document.getElementById('change-heading');
    sunHeading.innerHTML = newSunHeading;

    //change sun color
    sun.style.fill = 'red';
})
