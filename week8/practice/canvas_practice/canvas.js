//First Canvas Box (using string for color)
function drawString() {
    //call canvas element from HTML
    const canvas = document.getElementById('myCanvas');
    //set context (place where drawing is rendered) to 2D
    const context = canvas.getContext("2d");
    context.strokeStyle = 'red';
    context.fillStyle = 'rgba(0, 0, 255, 0.5)';//first three numbers are rgb (color numbers), last number is opacity % (in this case 50% shown as 0.5)
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
}
drawString();

//Second Canvas Box (using CanvasPattern)
function drawPattern() {
    const canvas = document.getElementById('demo2');
    const context = canvas.getContext('2d');
    context.strokeStyle = 'red';

    const img = new Image();
    img.src = "../css_transform_practice/transform_img/bike.png";
    //do this so that the pattern is only added once the image is downloaded so you aren't waiting for it
    img.onload = function() {
        const pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(10, 10, 150, 100);
        context.strokeRect(10, 10, 150, 100);
    };
}
drawPattern();

//Box Number 3 (using CanvasGradient)
function drawGradient() {
    const canvas = document.getElementById('demo3');
    const context = canvas.getContext('2d');
    context.strokeStyle = 'red';
    const gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(0.5, 'red');
    gradient.addColorStop(0.8, 'black');
    context.fillStyle = gradient;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100)
}
drawGradient();

//Box Number 4 (drawing a circle)
//Made with a parameter so that the same circle could be called and used for Box 5 too
function drawCircle(canvas) {
    const context = canvas.getContext('2d');
    context.beginPath();
    context.arc(70, 70, 60, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = 'red';
    context.fillStyle = 'blue';
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}
let canvas4 = document.getElementById('demo4');
drawCircle(canvas4);

//Box Number 5 (saving canvas drawings)
//When button is clicked, it will open the image we created in a new tab
function saveDrawing() {
    const canvas5 = document.getElementById('demo5');
    drawCircle(canvas5);
    window.open(canvas5.toDataURL('image/png'));
}
let canvas5 = document.getElementById('demo5');
drawCircle(canvas5);
const button = document.getElementById('saveButton');
button.addEventListener('click', saveDrawing);

//Box Number 6 (drawing an img to canvas)
//set up canvas and context the normal way than grab image by using document.getElementById
function drawImageToCanvas() {
    const canvas = document.getElementById('demo6');
    const context = canvas.getContext('2d');
    const image = document.getElementById('myImageElem');
    context.drawImage(image, 0, 0);
}
//only run the code if and when the image has loaded
window.addEventListener('load', drawImageToCanvas, false);

//Box Number 7 (manipulate copied canvas image)
function manipulateImage() {
    //copied image into canvas
    const canvas = document.getElementById('demo7');
    const context = canvas.getContext('2d');
    const image = document.getElementById('secondImage');
    context.drawImage(image, 68, 68);

    //manipulate image to be black and white
    let imageData = context.getImageData(0, 0, 200, 200);
    
    //create variables for each of the four color letters (r,g,b,a)
    let red, green, glue, greyscale;
    //create for loop to iterate through each pixel in the image to change it to greyscale
    for (let i = 0; i < imageData.data.length; i += 4) {
        red = imageData.data[i];
        blue = imageData.data[i + 1];
        green = imageData.data[i + 2];

        //convert all 3 colors to greyscale
        greyscale = red * 0.3 + green * 0.59 + blue * 0.11;

        //replace old colors with new greyscale color
        imageData.data[i] = greyscale;
        imageData.data[i + 1] = greyscale;
        imageData.data[i + 2] = greyscale;
    }
    context.putImageData(imageData, 0, 0);
}
window.addEventListener('load', manipulateImage, false);

//Manipulate video with canvas
function makeVideoBlackAndWhite() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvasOverlay');
    const context = canvas.getContext('2d');

    //video eventlistener that responds to the play button
    video.addEventListener('play', function() {
        draw(video,context,canvas); //called function made below
    }, false);
}

function draw(video, context, canvas) {
    if (video.paused || video.ended) {
        return false;
    }
    drawOneFrame(video, context, canvas); //called function made below

    //start over! Keep repeating
    setTimeout(function() {
        draw(video, context, canvas);
    }, 0);
}

function drawOneFrame(video, context, canvas) {
    //draw video onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    //error code
    try {
        let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        let pixelData = imageData.data;//do this for performance, downloads only once instead of several times if we used imageData

        //loop through red, green, and blue pixels turning them greyscale
        let red, green, blue, greyscale
        for (let i = 0; i < pixelData.length; i += 4) {
            red = pixelData[i];
            green = pixelData[i + 1];
            blue = pixelData[i + 2];

            //change all colors to greyscale 
            //(will always times the three colors by these float numbers to change them greyscale)
            greyscale = red * 0.3 + green * 0.59 + blue * 0.11;

            //change color to greyscale
            pixelData[i] = greyscale;
            pixelData[i + 1] = greyscale;
            pixelData[i + 2] = greyscale;
        }

        context.putImageData(pixelData, 0, 0);
    } catch (err) {
        //error handling code will go here
        canvas.width = canvas.width; //clears canvas
        canvas.style.backgroundColor = 'transparent';
        context.fillStyle = 'white';
        context.textAlign = 'left';

        //use canvas to insert text
        context.font = '18px LeagueGothic, Tahoma, Geneva, sans-serif';
        context.fillText('There was an error rendering', 10, 20);
        context.fillText("the video to the canvas.", 10, 40);
        context.fillText("Perhaps you are viewing this page from", 10, 70);
        context.fillText("a file on your computer?", 10, 90);
        context.fillText("Try viewing this page online instead.", 10, 130); 

        return false; //lets us check in the draw fucntion whether an exception was thrown
    }
}
makeVideoBlackAndWhite();

//using SVG and Raphael to create a spinner while waiting for things to download
//thing to download
function displayOnMap(position) {
    document.getElementById('spinner').style.display = 'none';
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    // Let's use Google Maps to display the location 
    var myOptions = {
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("geoForm"), myOptions);
    
    var initialLocation = new google.maps.LatLng(latitude, longitude);
    
    var marker = new google.maps.Marker({
        position: initialLocation,
        map: map,
        title: "Hello World!"
    });
    
    map.setCenter(initialLocation);  

}

function determineLocation() {
    if (navigator.onLine) {
        if (Modernizr.geolocation) {
            navigator.geolocation.getCurrentPosition(displayOnMap);

            let container = Raphael(document.getElementById('spinner'), 125, 125);
            let spinner = container.image('images/spinnerBW.svg', 0, 0, 125, 125);
            let attrsToANimate = { transform: "r720" }; //"" indicate the transformation is a rotation
            spinner.animate(attrsToANimate, 60000);
        }
    } else {
        alert('You must be online to use this feature!');
    }
}

var geobutton = document.getElementById('geobutton');
//geobutton.addEventListener('click', determineLocation);

//Drop and Drag Practice
//grab all draggable images
const mice = document.querySelectorAll('#mouseContainer img');

//loop through all img and add an event listener for the dragstart event, so mouse can be dragged
let mouse = null;
for (let i=0; i < mice.length; i++) {
    mouse = mice[i];
    mouse.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData("text/plain", this.id);
    });
}

// add an event listener to the cat so it can catch the mice using dragover and drop
const cat = document.getElementById('cat');
cat.addEventListener('dragover', function(event) {
    event.preventDefault();
});
cat.addEventListener('drop', function(event) {
    let mouseHash = {
        mouse1: 'NOM NOM NOM',
        mouse2: 'Meow',
        mouse3: 'Purrrrrr'
    };

    //grab h2 heading to change to messages above
    let catHeading = document.getElementById('catHeading');
    let mouseID = event.dataTransfer.getData('text/plain');
    catHeading.innerHTML = mouseHash[mouseID];
    
    //now that mouse has been eaten, remove it from the page
    const mousey = document.getElementById(mouseID);
    mousey.parentNode.removeChild(mousey);
    event.preventDefault();
})
