//Event listeners for Events.html
//for one click
const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

//for double click event
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event) {
    event.target.classList.toggle('highlight');
}

//for hover event
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

//for mouse moved event
mouseParagraph.addEventListener('mousemove', () => console.log('You Moved!'));

//practice of keyboard events
addEventListener('keydown', highlight);
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));
addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));

//modifier keys: shift, ctrl, alt, meta
addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));

//checks to see if the user held down the C key while holding down the Ctrl key
addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
            console.log('Action canceled!');
        }
});

//checks to see if the shift key was held down when the mouse was clicked
addEventListener('click', (event) => {
    if (event.shiftKey) {
        console.log('A Shifty Click!');
    }
});

//practice touch events (for touch computer screens and phones)
//occurs when user stops touching surface
addEventListener('touchend', () => console.log('Touch stopped'));

//removing an event listener
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);

function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click', remove);
}

//practice stopping the default behavior of some events
const brokenLink = document.getElementById('broken');

brokenLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

//Propogation - starts at child and moves up to root parent (HTML)
ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

// capturing

ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);

// bubbling

ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),false );

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),false );

//stop propogation that you have added
liElement.addEventListener('click', (event) => {
    console.log('clicked on li');
    event.stopPropagation(); }, false);

//event delegation
ulElement.addEventListener('click', highlight);