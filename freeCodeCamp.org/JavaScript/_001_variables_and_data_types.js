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
// ERROR can't use single and double quatation in same StrinG

// Number

const myMotherAge = 20;
// const myMotherAge = 20,000;
// this will throws an syntax error because cannot use commas in between

// Boolean

const canDrive = true;
if (canDrive) {
  console.log("Can Drive");
} else {
  console.log("Can't Drive");
}

// Arrays
// they are indexed
// Arrays in JS is basically a list, seperated by the commas, can put any data type inside, even the object.
const myFirstArray = [
  10,
  "Prince",
  true,
  0.12,
  { property: "the value" },
  [2, 4],
];

console.log(myFirstArray);
console.log(myFirstArray[0]);
console.log(myFirstArray[1]);
console.log(myFirstArray[2]);
console.log(myFirstArray[3]);
console.log(myFirstArray[4]);
console.log(myFirstArray[5][1]);
console.log(myFirstArray[6]); // Output is undefined, not an error in JS

// Objects
// Everything in JS is an Object

const objectVariables = { prop1: 20, prop2: true };
const valueOne = objectVariables.prop1;
console.log(valueOne);

// Nested objects

const nestedObjects = {
  layer1: {
    layer2: {
      layer3: {
        targetValue: 20,
      },
    },
  },
};

console.log(nestedObjects.layer1.layer2.layer3.targetValue);

console.log(nestedObjects["layer1"]["layer2"]["layer3"]);

// Functions

const myFirstFunction = function () {
  return 40;
};

console.log(myFirstFunction());

