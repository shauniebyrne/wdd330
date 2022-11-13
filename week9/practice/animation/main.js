/* Old way
const squareElement = document.getElementById('square');
let angle = 0;

setInterval( () => { //called the window.setInterval() for this animation
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`//how you put css in js
}, 1000/60);//60 frames per second
*/

/*
//Better way of doing animation using the window and DOM
const squareElement = document.getElementById('square');
let angle = 0;

function rotate() {
    angle = (angle + 2)%360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);
cancelAnimationFrame(id); //stops the animation
*/

//This is a great example, but it is usually better to do animation using CSS!!