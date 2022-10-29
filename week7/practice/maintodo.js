//create a to do list using Ajax and sending user info to a server in JSON format

const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);

function addTask(event) {
    event.preventDefault();//prevents the default behavior of the form so that it doesn't get submitted when the Add Task button is clicked
    /*
    manual way of adding form data
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }
    This is replaced by using the ForData() method because it does all of the above for you
    */
    const task = new FormData(form);//use FormData interface to serialize all the data automatically
    //const data = JSON.stringify(task);
    const url = `http://echo.jsontest.com/id/1/title/${form.task.value}`;

    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });//using header interface to create headers in the JSON file
    
    const request = new Request(url, {
        method: 'POST',
        mode: 'cors',
        header: headers,//got from header constructor function
        body: JSON.stringify(task)//make JSON object (form) into a JSON string
    })//using request interface and request constructor function

    fetch(request)
    .then(response => response.json() )
    .then(task => console.log(`${task.title} saved with an id of ${task.id}`))
    .catch(error => console.log("There was an error:", error))
}
