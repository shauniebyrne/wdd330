//call canvas
const canvasElement = document.getElementById('canvas');
//call context object (holds all methods used to draw onto the canvas)
const context = canvasElement.getContext('2d');

//fill (inside) and stroke (outline) colors
context.fillStyle = '#0000cc'; //blue
context.strokeStyle = '#ccc'; //  gray
context.lineWidth = 4; //changes thickness of border

//make a filled in rectangle
context.fillRect(10,10,100,50); //first two parameters are the top-left corner, 3rd is width, and 4th is height

//make a bordered only rectangle
context.strokeRect(10,100,100,50);

//make straight lines using a path and moveTo()/lineTo() methods
context.beginPath();
context.moveTo(130, 50); //moves dot to this location
context.lineTo(180, 50); //draws line from 180 to 50
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00'; // red
context.lineWidth = 15; //thikness of line
context.stroke(); //calls path and makes lines visible

//arc can be used to draw an arc or a circle (this draws a circle) (also using path)
context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false); //first two parameters are center of arc, 3rd is the radius, 4th is start angle, 5th is end angle (angles measured in radians), 6th (boolean) says whetehr the arce should be drawn counter-clockwise
context.strokeStyle = '#ff0'; //yellow
context.lineWidth = 4; 
context.stroke(); // makes path visible

//write text onto canvas using fillText()
context.fillStyle = '#0c0'; // a blue fill color
context.font = 'bold 26px sans-serif'; //set font style; always put before .fillText()
context.fillText('Hello', 20, 200); //1st parameter: text to be displayed, next 2 are X and Y coordinates