//websocket practice
//set up variables to store info
const URL = 'wss://echo.websocket.org/'; //URL used to connect to the websocket
const outputDiv = document.getElementById('output'); //store reference to the div element
const form = document.forms[0]; //store reference to the form element
const connection = new WebSocket(URL); //store reference to our websocket object

//event handler added to deal with open WebSocket
connection.addEventListener('open', () => {
    output('CONNECTED');
}, false);

//event handler invoked a function called message, made below
function message(event) {
    event.preventDefault();
    const text = form.message.value;
    output(`SENT: ${text}`);
    connection.send(text);//calls a method of the connection object, sends message to URL that websocket is connected to; server will process it and send a response
}

//event handler to deal with servers response
connection.addEventListener('message', (event) => {
    output(`RESPONSE: ${event.data}`);
}, false);

