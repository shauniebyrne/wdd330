//Change background color randomly using button
const btn = document.getElementById('rainbow');

const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];

function change() {      
    document.body.style.background = rainbow[Math.floor(7*Math.random())];
}
btn.addEventListener('click', change);

//Factorize number entered in form
function factorize(event) {
    // prevent the form from being submitted
    event.preventDefault();   
    document.getElementById('output').innerHTML = '<p>This could take a while ...</p>';
    const number = Number(form.number.value);

    //web worker runs the factoring in the background while still being able to run the other elemnts (like changing the color of the backround)
    if(window.Worker) {
        const worker = new Worker('factors.js');
        worker.postMessage(number);
        worker.addEventListener('message', (event) => {
            document.getElementById('output').innerHTML = event.data;
        }, false);
    }
}