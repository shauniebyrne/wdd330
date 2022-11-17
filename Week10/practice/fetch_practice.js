//Basic Fetch request
fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

//Supply Request Options
//fetch method accepts a second parameter, an init object that allows you to control a number of different settings
// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://example.com/answer', { answer: 42 })
    .then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });

//Sending a request with credentials included
fetch('https://example.com', {
  credentials: 'include'
});

// The calling script is on the origin 'https://example.com'
fetch('https://example.com', {
  credentials: 'same-origin'
});

//To ensure browsers don't include credentials in the request
fetch('https://example.com', {
  credentials: 'omit'
})

//Use fetch to POST JSON-encoded data
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

//Uploading a file using HTML <input type="file">
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
  .then((response) => response.json())
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

//Uploading multiple files using HTML <input type="file" multiple>
const formData2 = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData2.append('title', 'My Vegas Vacation');
let i = 0;
for (const photo of photos.files) {
  formData2.append(`photos_${i}`, photo);
  i++;
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData,
})
  .then((response) => response.json())
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

//Processing a text file line by line
async function* makeTextFileLineIterator(fileURL) {
    const utf8Decoder = new TextDecoder('utf-8');
    const response = await fetch(fileURL);
    const reader = response.body.getReader();
    let { value: chunk, done: readerDone } = await reader.read();
    chunk = chunk ? utf8Decoder.decode(chunk) : '';
  
    const re = /\n|\r|\r\n/gm;
    let startIndex = 0;
    let result;
  
    while (true) {
      let result = re.exec(chunk);
      if (!result) {
        if (readerDone) break;
        let remainder = chunk.substr(startIndex);
        ({ value: chunk, done: readerDone } = await reader.read());
        chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : '');
        startIndex = re.lastIndex = 0;
        continue;
      }
      yield chunk.substring(startIndex, result.index);
      startIndex = re.lastIndex;
    }
  
    if (startIndex < chunk.length) {
      // Last line didn't end in a newline char
      yield chunk.substr(startIndex);
    }
  }
  
  async function run() {
    for await (const line of makeTextFileLineIterator(urlOfFile)) {
      processLine(line);
    }
  }
  
  run();

//Checking that a fetch was successful
fetch('flowers.jpg')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.blob();
  })
  .then((myBlob) => {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });

//Supplying your own request object (instead of using fetch() use Request() constructor)
const myHeaders = new Headers();

const myRequest = new Request('flowers.jpg', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});

fetch(myRequest)
  .then((response) => response.blob())
  .then((myBlob) => {
    myImage.src = URL.createObjectURL(myBlob);
  });

//HEADERS
//using the Headers() constructor
const content = 'Hello World';
const myHeaders1 = new Headers();
myHeaders1.append('Content-Type', 'text/plain');
myHeaders1.append('Content-Length', content.length.toString());
myHeaders1.append('X-Custom-Header', 'ProcessThisImmediately');

//same can be achieved by passing an array of arrays or an object literal to the constructor
//use same content value ('Hellow World') from above
const myHeaders2 = new Headers({
    'Content-Type': 'text/plain',
    'Content-Length': content.length.toString(),
    'X-Custom-Header': 'ProcessThisImmediately'
  });

//query and retrieve the content
console.log(myHeaders2.has('Content-Type')); // true
console.log(myHeaders2.has('Set-Cookie')); // false
myHeaders2.set('Content-Type', 'text/html');
myHeaders2.append('X-Custom-Header', 'AnotherValue');

console.log(myHeaders2.get('Content-Length')); // 11
console.log(myHeaders2.get('X-Custom-Header')); // ['ProcessThisImmediately', 'AnotherValue']

myHeaders2.delete('X-Custom-Header');
console.log(myHeaders2.get('X-Custom-Header')); // null

//use headers to check if content type is correct before process it further
fetch(myRequest)
  .then((response) => {
     const contentType = response.headers.get('content-type');
     if (!contentType || !contentType.includes('application/json')) {
       throw new TypeError("Oops, we haven't got JSON!");
     }
     return response.json();
  })
  .then((data) => {
      /* process your data further */
  })
  .catch((error) => console.error(error));