// OBJECT ORIENTATED PROGRAMMING - JS
// JS is not an OOP language but can use OOP features listed below

// create object literal
const erika = {
    firstName: 'Erika',
    lastName: 'Herrera',
    email: 'e@h.com',

    // add function to object
    // 'this' refers to actual object
    // getFullName is property set equal to a function
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

const key = 'lastName';

// brakcet notation using variable
console.log(erika[key]);

// dot notation
console.log(erika.lastName);

// bracket notation using string
console.log(erika['email'])

// call function
console.log(erika.getFullName());


// another way to create object. create constructor function, takes in args - 1 default arg provided if none others are given
function Human(firstName, lastName, email, hairColor = 'black') {
    // establish properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.hairColor = hairColor;

    this.sayFullName = function() {
        console.log('this is inside the object constructor');
    }
}

// create person (object) using fuction above
// hair color is black so we let it use default
// when object is created this way; gives access to special object called 'the prototype' allows us to establish functions or methods to use with our objects
const aya = new Human('Aya', 'Ibayashi', 'a@i.com');
console.log(aya);
console.log(aya.__proto__);

// establish new function on top of prototype
Human.prototype.sayFullName = function() {
    console.log(this.firstName + ' ' + this.lastName);
}

aya.sayFullName();

console.log(aya.__proto__);

// create class
class Polygon {
    // initialize function that will run everytime a new polygon is created
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getArea() {
        return this.height * this.width;
    }
}

class Triangle extends Polygon {
    constructor(height, width) {
        super(height, width);
    }

    getArea() {
        return this.height * this.width * 0.5;
        // return super.getArea(); - calls the parent class of the function instead
    }
}

const myPoly = new Polygon(5, 10);
console.log(myPoly.getArea());

const myTri = new Triangle(10, 10);
console.log(myTri.getArea());