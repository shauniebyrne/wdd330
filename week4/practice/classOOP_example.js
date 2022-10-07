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

raphs = new Turtles('Raphael','Red');//<< Turtle { name: 'Raphael', setColor: [Function], getColor: [Function] }
console.log(raphs);
raphs.getColor();//<< 'Red'
console.log(raphs.getColor());
raphs.setColor(4);//<< 4
console.log(raphs.setColor());

this.setColor = (color) => {
    if(typeof color === 'string'){
        return _color = color;
        } else {
            throw new Error('Color must be a string');
    }
}

raphs.setColor(4);//<< Error: Color must be a string
console.log(raphs.setColor());