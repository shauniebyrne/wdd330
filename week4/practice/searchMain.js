const form = document.forms['search'];
const input = form.elements.searchInput;

//default text disappears on click so user can type in their wanted search
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

//goes back to default 'search here' placed in input field if user doesn't search something and clicks out of the box
input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);
//input.addEventListener('change', () => alert('changed'), false);

//submit event - do this in frontend with JS rather than submitting with backend
form.addEventListener ('submit', search, false);

function search(event) {
    alert(`You Searched for: ${input.value}`);//this input is a variable named above, calling the input element by its name (above)
    event.preventDefault();
}

//input.value = 'Search Here';//places these words inside the input field (box); set the value using JS