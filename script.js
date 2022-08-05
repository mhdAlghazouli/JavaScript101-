// console.log("Hello World!");

const myName = "Moe";
const someNum = 42;

var someName = "Not Moe";

// console.log(myName);

//get in the habit of leaving useful comments..

// Data types

// number

const one = 1;
const floatNum = 3.14;
const add = 2+ 2;
const subtract = 4-2;
const divide = 4 /2 ;
const multiply = 2 * 2;
const modulo = 6 % 2;

// console.log(add,subtract,divide,multiply,modulo)

// boolean

let is18 = true;
is18 = false;

// arrays

const someArr = ["milk","butter","eggs",true] //0,1,2

// Objects

const myObj = {
  name : "Hadi",
  hp : 100,
  magic : false,
  is18 : is18 // is18: false
}



// console.log(myObj);

// console.log(someArr[0,1]);

// console.log(myObj.is18);

// someArr[0] = "cat";

// console.log(someArr)

// console.log(console)

// string

var somString = "I'm a string";
let anotherString = 'I\'m also a string';
const theString = `This is my favorite but any is fine, a 'string' is a "string"`

// console.log(anotherString)

const theAnswer = 23 + 19;

// console.log("thw answer is " + theAnswer);

// console.log(typeof theAnswer)


// functions

function myfunction() {
  let testNum = 42;
  return "Hello world! " + testNum

}

console.log(myfunction());

// parameters aka arguments

function greet(name) { //name is the parameter
  return "Hello " + name + "!";
}

console.log(greet("Moe")); // moe is an argument