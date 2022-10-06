const form = document.forms['hero'];

//JS validation
//custom form validation used to make sure a user puts in information correctly
function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}

form.heroName.addEventListener('submit', validateInline, false);
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value;//creates a realName property that is secret based on the input field's value
    
    hero.powers = [];//for check boxes, to loop through and see if they are checked (true) or not (false)
        for (let i=0; i < form.powers.length; i++) {
            if (form.powers[i].checked) {
                hero.powers.push(form.powers[i].value);
            }
        }
//I LIKE THIS WAY BETTER THAN THE ABOVE METHOD
    //this example does the same as above but is more succinct by using array interators
    //hero.powers = [...form.powers]//the "..." is called a spread operator and it turns a node list into an array
        //.filter(box => box.checked)//returns an array with only checked boxes that were checked
        //.map(box => box.value);//replaces each checkbox in the array with its 'value' property

    hero.category = form.category.value;//value of radio button that was selected is stored here
    hero.age = form.age.value;//value of number input that is associated with what the user things the superheros age is
    hero.city = form.city.value;//value of selection drop down box selected by user
    hero.origin = form.origin.value;//value of text area entered by user
    
    //where all of this data is stored - will usually be used by JS but is just being stored here for our assignment
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    
    //custom form validation used to make sure a user puts in information correctly
    form.addEventListener('submit', makeHero, false);
    return hero;
}

form.heroName.addEventListener('keyup',disableSubmit,false);
form.addEventListener('submit', validate, false);
form.heroName.addEventListener('submit', validate, false);