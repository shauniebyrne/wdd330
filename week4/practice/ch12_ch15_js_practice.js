//**CHAPTER 12: OOP (OBJECT-ORIENTED PROGRAMMING) */

//create a class operator just like in python
//this class creates a dice
class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }

    static description() {
        return 'A way of choosing random numbers';//creates a static method
    }
}
console.log(Dice);

//create instance of Dice class
const blueDice = new Dice(20);
console.log(blueDice);

blueDice instanceof Dice //output: true
console.log(blueDice instanceof Dice);
blueDice.sides //output: 20
console.log(blueDice.sides);

blueDice.roll()//calls function and runs it //output: 13 (random number)
console.log(blueDice.roll());

//finding constructor of blueDice
blueDice.construtor //output: [Function: Dice]
console.log(blueDice.construtor);

//call static method
Dice.description()
console.log(Dice.description);

//new class create, turtle
class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}
console.log(Turtle);

//create new turtle instance (object)
const leo = new Turtle('Leonardo');//output: Turtle { name: 'Leonardo' }

leo.name; //output: 'Leonardo'
console.log(leo.name);
leo.sayHi(); //output: 'Hi dude, my name is Leonardo'
console.log(leo.sayHi());

//using 'prototype' property to return a new object
Turtle.prototype; //output: Turtle {}
console.log(Turtle.prototype);

//add a new property (key:value pair) to Turtle class by using assignment
Turtle.prototype.weapon = 'Hands';

//add a method to Turtle class by using assignment
Turtle.prototype.attack = function() {
    return `Feel the power of my ${this.weapon}!`;
}
console.log(Turtle);

//create new turtle instance
const raph = new Turtle('Raphael');
raph.name //output: 'Raphael'
console.log(raph.name);
raph.sayHi()//output: 'Hi dude, my name is Raphael'
console.log(raph.sayHi());
raph.weapon //ouptut: 'Hands'
console.log(raph.weapon);
raph.attack //output: 'Feel the power of my Hands!'
console.log(raph.attack());

//Find out prototype using Object.gteProtototypeof() method
Object.getPrototypeOf(raph); //output: Turtle {attacke: [Function], weapon: 'Hands'}
//OR
//Find out prototype using non-standard __proto__ property
raph.__proto__ //output: Turtle {attack: [Function], weapon: 'Hands'}
//HOWEVER THIS IS NOT RECOEMMENDED, US THE OBJECT.PROTOTYPEOF() INSTEAD
console.log(Object.getPrototypeOf(raph));

//check if its a prototype of an instance in an object using isPrototypeOf() method
Turtle.prototype.isPrototypeOf(raph); //output: true
console.log(Turtle.prototype.isPrototypeOf(raph));

//check if method is its own property or if it is inherited
raph.hasOwnProperty('name'); //output: true
console.log(raph.hasOwnProperty('name'));
raph.hasOwnProperty('weapon'); //output: false
console.log(raph.hasOwnProperty('weapon'));// came back true, didnt work

const don = new Turtle('Donatello');
don.weapon;
console.log(don.weapon);

//old prototypes have access to new prototypes you add later on in the program
leo.weapon; //output: hands
console.log(leo.weapon);
leo.attack(); //<<'Feel the power of my Hands!
console.log(leo.attack());

//Change the value of prototype weapon, this will automatically change on all instances of Turtle
Turtle.prototype.weapon = 'Feet';
console.log(Turtle.prototype.weapon);
leo.attack();//<<'Feel the power of my feet!'
console.log(leo.attack());

raph.attack();//<<same as above
console.log(raph.attack());

don.attack();//<<same as above
console.log(don.attack());
//THIS DIDN'T WORK IN MY PROGRAM, STILL SAYS HANDS

//assign a value so each turtle has their own weapon
leo.weapon = 'Katana Blades';
raph.weapon = 'Sai';
don.weapon = 'Bo Staff';

console.log(leo);//<< Turtle {name: 'Leonardo', weapon: 'Katana Blades'}
leo.attack();//<<'Feel the power of my Katana Blades!'
console.log(leo.attack());

console.log(raph);//<< Turtle {name: 'Raphael', weapon: 'Sai'}
raph.attack();//<<'Feel the power of my Sai!
console.log(raph.attack());

console.log(don);//<< Turtle {name: 'Donatello', weapon: 'Bo Staff'}
don.attack();//<<'Feel the power of my Bo Staff!
console.log(don.attack());

//create a new prototype called pizza 
Turtle.prototype.food = 'Pizza';
console.log(Turtle.prototype.food);

//create a method to the prototype
Turtle.prototype.eat = function() {
    return `Mm, this ${this.food} tastes great!`
}

//create last turtle in an instance
const mike = new Turtle('Michelangelo');
//make sure it has inherited everything
mike.eat();//<<'Mm, this Pizza tastes great!'
console.log(mike.eat());

//give mike his own weapon of choice
mike.weapon = 'Nunchucks'
console.log(mike.weapon);
mike.attack();//>>'Nunchucks'
console.log(mike.attack());

//making a property private (so it cant be changed by users)
class Turtles {
    constructor(name,color) {
        this.name = name;
        let _color = color;
        this.setColor = color => { return _color = color; }
        this.getColor = () => _color;
    }
}

const raphs = new Turtles('Raphael','Red');//<< Turtle { name: 'Raphael', setColor: [Function], getColor: [Function] }
console.log(raphs);
raphs.getColor();//<< 'Red'
console.log(raphs.getColor());
raphs.setColor();//<< 4
console.log(raphs.setColor());

raphs.setColor = (color) => {
    if(typeof color === 'string'){
        return _color = color;
        } else {
            throw new Error('Color must be a string');
    }
}

raphs.setColor('');//<< Error: Color must be a string
console.log(raphs.setColor('orange'));

//seeing prototype chain
Object.getPrototypeOf(raphs);//<< Turtle {}
console.log(Object.getPrototypeOf(raphs));

//Creating a class within a class using the 'extends' keyword
class NinjaTurtle extends Turtle {
    constructor(name) {
        super(name);//super refers to the parent class, is used to access any properties and call any methods of the parent class
        this.weapon = 'hands';
    }
    attack() {return `Feel the power of my ${this.weapon}!`};
}

//calling toString() on an array returns each value in a comma-sparated string
[1,2,3].toString();//<<'1,2,3'
console.log([1,2,3].toString());

//calling toString() on a primitive number returns a string of that number
2..toString;//<<'2' **remember 2 dot operators for integers
console.log(2..toString);

//use extends on built-in functions instead of monkey-patching
class myArray extends Array {
    constructor(...args){
        super(...args);
    }
    delete(i) {
        return this.splice(i,1);
    }
}

//create a new array object
const list = new myArray(1,2,3);//<<myArray [1,2,3]
console.log(list);

//check that our delete() method from class above, works
list.delete(1);//<<myArray [2]
console.log(list.delete(1));
list //<<myArray [1,3]
console.log(list);

//add properties to objects using Object.defineProperty() instead of assignment, if you want
const me = { name: 'DAZ' };
Object.defineProperty(me, 'eyeColor', {value: 'blue', writable: false, enumerable: true});//eyecolor is now not changeable because we made writeable: false
//for console.log
const practice = Object.defineProperty(me, 'eyeColor', {value: 'blue', writable: false, enumerable: true});
console.log(practice);

//add to me that uses properties using getter() and setter() methods
me.age = 21;
me.retirementAge = 65;

Object.defineProperty(me, 'yearsToRetirement',{
    get() {
        if(this.age > this.retirementAge) { return 0; }
        else { return this.retirementAge - this.age; }
    },
    set(value) {
        this.age = this.retirementAge - value;
        return value;
    }
});

me.yearsToRetirement; //<<44
console.log(me.yearsToRetirement);

//can change age in the class, this changes the result
me.yearsToRetirement = 10;
me.age//<<55
console.log(me.age);

//create Dice class that uses get function to return a description of the number of sides
class Dices {
    constructor(sides=6){    
        Object.defineProperty(this, 'sides', {
            get() {
            return `This dice has ${sides} sides`;
            },
            set(value) {
            if(value > 0) {
                sides = value;
                return sides;
            } else {
                throw new Error('The number of sides must be positive');
            }
            }
        });
    
        this.roll = function() {
            return Math.floor(sides * Math.random() + 1)
        }
    }
}

const yellowDice = new Dice;

yellowDice.sides//<< "This dice has 6 sides"
console.log(yellowDice.sides);
yellowDice.sides = 10;//<< 10
console.log(yellowDice.sides);
yellowDice.sides//<< "This dice has 10 sides"
console.log(yellowDice.sides);
yellowDice.sides = 0;//<< Error: "The number of sides must be positive"
console.log(yellowDice.sides);

//create human object
const Human = {
    arms: 2,
    legs: 2,
    walk() { console.log('Walking'); }
}
const lois = Object.create(Human);//creates an instance of Human
lois.arms//<< 2
console.log(lois.arms);
lois.legs//<< 2
console.log(lois.legs);
lois.walk()//<< Walking
console.log(lois.walk);
lois.name = 'Lois Lane';//<< 'Lois Lane'
console.log(lois.name);
lois.job = 'Reporter';//<< 'Reporter'
console.log(lois.job);

//OR add a second argument to Object.create()method containing wanted properties
const jimmy = Object.create(Human, { name: { value: 'Jimmy Olsen', enumerable: true }, job: { value: 'Photographer', enumerable: true } });
console.log(jimmy);

//objects can act like super-class
const Superhuman = Object.create(Human);

Superhuman.change = function() {
return `${this.realName} goes into a phone box and comes out as ${this.name}!`;
};
//create default values
Superhuman.name = 'Name Needed';//<< 'Name Needed'
Superhuman.realName = 'Real Name Needed';//<< 'Real Name Needed'
//use Superhuman object as a prototype to create more ojbects based on it
const superman = Object.create(Superhuman);
superman.name = 'Superman';
superman.realName = 'Clark Kent';
superman.change()//<< Clark Kent goes into a phone box and comes out as Superman!
console.log(superman.change);

Superhuman.init = function(name,realName){
    this.name = name;
    this.realName = realName;
    this.init = undefined; // this line removes the init function, so it can only be called once
    return this;
}
const batman = Object.create(Superhuman);
batman.init('Batman','Bruce Wayne');

batman.change();//<< 'Bruce Wayne goes into a phone box and comes out as Batman!'
console.log(batman.change());
//use init() in a different way
const aquaman = Object.create(Superhuman).init('Aquaman', 'Arthur Curry');

aquaman.change();//<< 'Arthur Curry goes into a phone box and comes out as Aquaman!'
console.log(aquaman.change());

//because of prototype chains, superman objects have the same properties and methods as Human and Superhuman objects
superman.walk();//<< Walking
console.log(superman.walk());
superman.change();//<< 'Clark Kent goes into a phone box and comes out as Superman!'
console.log(superman.change());

//using mixin through Object.assign() method
const a1 = {};
const b1 = { name: 'JavaScript' };
Object.assign(a1,b1);//<< { name: 'JavaScript' }
a1.name//<< 'JavaScript'
console.log(a1.name);

//creating deep or hard copies so the original wont change
function mixin(target,...objects) {
    for (const object of objects) {   
    if(typeof object === 'object') {
        for (const key of Object.keys(object)) {
            if (typeof object[key] === 'object') {
            target[key] = Array.isArray(object[key]) ? [] : {};
            mixin(target[key],object[key]);
            } else {
            Object.assign(target,object);  
            }
        }
        }
    }
    return target;
}

//check if it worked
const a = {}, b = { foo: 'bar' }, c = { numbers: [1,2,3] };

mixin(a,b,c);//<< { foo: 'bar', numbers: [ 1, 2, 3 ] }

c.numbers.push(4);//<< 4
console.log(c.numbers.push(4));
a.numbers//<< [ 1, 2, 3 ]
console.log(a.numbers);
c.numbers//<< [ 1, 2, 3, 4]
console.log(c.numbers);

const wonderWoman = Object.create(Superhuman);
//use mixin to assign two properites at once, also using templete literal
mixin(wonderWoman,{ name: 'Wonder Woman', realName: 'Diana Prince' });

wonderWoman.change()//<< 'Diana Prince goes into a phone box and comes out as Wonder Woman'
console.log(wonderWoman.change());

//super powered mixin objects
const flight = {
    fly() {
        console.log(`Up, up and away! ${this.name} soars through the air!`);
        return this;
    }
}

const superSpeed = {
    move() {
        console.log(`${this.name} can move faster than a speeding bullet!`);
        return this;
    }  
}

const xRayVision = {
    xray() {
        console.log(`${this.name} can see right through you!`);
        return this;
    }  
}
mixin(superman,flight,superSpeed,xRayVision);

//mixin(wonderwoman,flight,superSpeed);

superman.xray();//<< 'Superman can see right through you!'
console.log(superman.xray());
//wonderWoman.fly();//<< 'Up, up and away! Wonder Woman soars through the air!'
//console.log(wonderWoman.fly());

//call all superpower methods at once because they were returned this in the function above
superman.fly().move().xray();//<<  Up, up and away! Superman soars through the air!
    //Superman can move faster than a speeding bullet!
    //Superman can see right through you!
console.log(superman.fly().move().xray());

//use that=this
//superman.findFriends = function(){
    //const that = this;
    //this.friends.forEach(function(friend) {
        //console.log(`${friend.name} is friends with ${that.name}`);
    //}
    //);
//}

//superman.findFriends();//<<  Batman is friends with Superman
    //Wonder Woman is friends with Superman
    //Aquaman is friends with Superman

//use bind(this) instead of that=this
//superman.findFriends = function() {
    //this.friends.forEach(function(friend) {
        //console.log(`${friend.name} is friends with ${this.name}`);
    //}.bind(this);)
//}

//superman.findFriends();//<<  Batman is friends with Superman
   // Wonder Woman is friends with Superman
    //Aquaman is friends with Superman

//use for-of instead of forEach
//superman.findFriends = function() {
    //for(const friend of this.friends) {
        //console.log(`${friend.name} is friends with ${this.name}`);
    //};
//}

//superman.findFriends();//<<  Batman is friends with Superman
    //Wonder Woman is friends with Superman
    //Aquaman is friends with Superman

//can use arrow function instead
//superman.findFriends = function() {
    //this.friends.forEach((friend) => {
        //console.log(`${friend.name} is friends with ${this.name}`);
    //}
    //);
//}

//superman.findFriends();//<<  Batman is friends with Superman
    //Wonder Woman is friends with Superman
    //Aquaman is friends with Superman

//**CHAPTER 15: MODERN JS**
//old way
//para.classList.add('important');
//const newPara = document.createElement('p');
//newPara.textContent = 'Another Paragraph';
//para.appendChild(newPara);

//new way using a library to cut down on coding
//$(para).addClass('important').append('<p>Another Paragraph</p>');

//underscore and Lodash library examples
// flatten an array
//_.flatten([1, [2, [3, [4]], 5]]);//<< [1, 2, [3, [4]], 5]

// return the last element in an array
//_.last([1, 2, 3]);//<< 3

// randomly shuffle an array
//_.shuffle([1, 2, 3, 4]);// => [4, 1, 3, 2]


//importing from other js files
//make a pi.js file and put this code in it
//export const PI = 3.1415926;
//then access this file in main.js by using import
//import { PI } from './pi.js';

//library for stats (saved in stats.js file)
/*
function square(x) {
    return x * x;
}

function sum(array, callback) {
    if(callback) {
        array = array.map(callback);
    }
    return array.reduce((a,b) => a + b );
}

function variance(array) {
    return sum(array,square)/array.length - square(mean(array))
}

function mean(array) {
    return sum(array) / array.length;
}

export {//this makes the function importable
    variance,
    mean
}

//import function
import { mean, variance } from './stats.js';
*/
//NOTICE THAT SQUARE AND SUM FUNCTIONS ARE NOT AVAILALBE BECAUSE THEY WEREN'T EXPORTED, THIS MAKES THEM PRIVATE
//IF YOU WANT TO IMPORT ALL THE MODULE FILE, USE THE *
//import * as stats from '.stats.js';
//use a function from the stats module
//stats.mean([2,6,10]);

//how to import just a variable
/*
const PI = 3.145926;
export default PI;

how to export a single default function
function square(x) {
    return x*x;
}
export default square;

how to export an object
const stats = {

    square(x) {
        return x * x;
    },

        sum(array, callback) {
        if(callback) {
            array = array.map(callback);
        }
            return array.reduce((a,b) => a + b );
        },

    mean(array) {
        return this.sum(array) / array.length;
    },

    variance(array) {
        return this.sum(array,this.square)/array.length - this.square(this.mean(array))
    }
}
export default stats;

how to call all three exported values
import PI from './pi.js';
import square from './square.js';
import stats from './stats.js';
*/

/*
display this array made in JS into HTML without a ton of JS code
JS file code
const tasks = [
    { name: 'Get Milk' },
    { name: 'Go for a run' },
    { name: 'Finish writing last chapter' },
    { name: 'Phone bank' },
    { name: 'Email Craig' }
    ]

HTML file code
<ul>
{{#tasks}}
<li>{{name}}</li>
{{/task}}
</ul>

result users see on website
<ul>
    <li>Get Milk</li>
    <li>Go for a run</li>
    <li>Finish writing last chapter</li>
    <li>Phone bank</li>
    <li>Email Craig</li>
</ul>
*/

