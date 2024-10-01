const myArray = [10, 20, 30, 40];
myArray.push(10);
console.log(myArray);
myArray.reverse();
console.log(myArray);

// Variables
const firstVaribale = "I am String";
const secondVaribale = 20;
const thirdVaribale = { firstProperty: "I am the value" };
console.log(firstVaribale, secondVaribale, thirdVaribale);

// Variables Declaration;

let a;
// Variable Assigning
a = 12;

console.log(a);

// let, const, var keywords

const v1 = 10;

let v2 = 10;
// reassign a variable in the code

var v3 = 10;
// var is against using, not to use, because it is in old version, it can be redeclared.
var v3 = 90;
console.log("v3 is " + v3);

// const v1 = 10; SyntaxError
// can't redeclared + assign, while using const keyword
// const TAX_RATE = 0.08;
console.log(v1);

// Naming Conventions

const myFirstName = "Prince"; // Camel Case
const my_first_name = "Prince"; // Snake Case
const MY_FIRST_NAME = "Prince"; // Constant Case
const myfirstname = "Prince"; // lower Case
const MyFirstName = "Prince"; // Pascal Case

// Varibale name should be meaningful, wrong using a, ex: const a = 45; cosnt age = 30;

// varibale expression
const age = 23;
const brotherAge = 25;
// ; (semicolon) - It represent the end of an expression, so it is always good to use semicolon at the end of every expression

// Data Types in JS

// Primitive Data Types

const myAge = 23; // Number
const myName = "Prince Chauhan"; // String
const canDriveCar = true; // Boolean
console.log(typeof myAge); // number

const age1 = 12;
const age2 = "12";
// Implicit casting
console.log(age1 + age2); //1212
// Explicit Casting
console.log(age1 + Number(age2)); //24
console.log(String(age1) + age2); //

// String

const myFullName = "Prince Chauhan";
// const myFullName2 = 'Prince Chauhan'; 
// This is valid
// const myFullName3 = 'Prince Chauhan"; 
// ERROR can't use single and double quatation in same String
