// Functions in Js 

// Example 1. Function Statement and Function Expression


function abc (num){
    return num * num;
}

var xyz = function (value){
    return value + value;
}


/* Differences:
    1. Hoisting: Function Statement -> complete function hoisted at the top of the scope
                  Function Expression -> only variable hoisted at the top of the scope

    2. Name: Func Statement -> function identifier is mandatory
            Func Expression -> function identifier is optional
            
*/


const obj = {
    functionDeclaration: function foo (){
        console.log("Function Declaration invoked");
    },

    functionExpression: function (){
        console.log("Function Expression invoked");
    }
}

obj.functionDeclaration();
obj.functionExpression();



// Example 2: First Class Functions and other types of Functions

function add (num1, num2){
    return num1 + num2
}

function squareOfAddition(fn){
    console.log(fn(4,5) * fn(4,5));
}

squareOfAddition(add);

// 2.1 Anonymous Functions

// function (name){
//     console.log(name);
// }

// 2.2 Immediately Invoked Function Expression (IIFE)

(function solve (a, b){
    console.log(a * b); // 20
})(5, 4);



(function(x){
    return (function (y){
        console.log(x); // 6
    })(5)
})(6);


// 2.3  Function Scopes

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"



// Example 3: Hoisting in Function and Params & Arguments

function divide (){                                 // functions are hoisted at the top of the scope
    var a = 10;                                     // variables are also hoisted at the top of function scope (var, let and const)
    var b = 2;                                      

    console.log("Division-quotient is: ", a/b);     // Division-quotient is:  5
}

divide();


function operation(){
    var a = 15;
    var b = 5;

    if(true){
        var a = 20;                             // "var" keywords are not hoisted under block scope
        var b = 10;                             

        console.log(a/b);                       // 2
    }
    console.log(a/b);                           // 2
}


operation();


for(let i = 1; i < 5; i++){
    setTimeout(function(){
        console.log(i);                         // variable is defined by "let" which is hoisted under block scope and creates a new copy of
    }, i * 1000);                               // i for every loop.    
}


// 3.1 Parameters and Functions
function paramFunctions(a){                     // parameter
    console.log(a);
}

paramFunctions(5)                               // arguments


// 3.2 Spread and Rest Operator

function multiply(...nums){                     // rest operator
    console.log(nums[0] * nums[1]);
}

let mult = [2, 6];

multiply(...mult);                              // spread operator


var fn = function (a, b, ...arr){
    console.log(a, b, arr);                  // spread or rest operator should be always be placed in the last of the args or params
}

fn(2, 4, 6, 9, 10, 14);

// Example 4: Arrow Functions 

const addNumbers = (data1, data2) => {
    return data1 + data2;
}

console.log(addNumbers(3, 4))


// Difference between Arrow Functions and Normal Functions

// 4.1 Syntax

function square(num){
    return num * num;
}

const squareArrow = (num) => {
    return num * num;
}

//4.2 Implicit "return" function
const squareWithoutReturn = (num) => num * num;     
const squareFunction = function (num){
    console.log(num * num);
}

console.log(squareFunction());                      // undefined


// 4.3 Arguments 
function square(){
     console.log(arguments);
     console.log(typeof arguments);
}

square(1,2,3)

const arrowArgs = () =>{
    console.log(arguments);
}

// arrowArgs(4,5,6);


// Example 5: Callback Functions

// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name); // Hi Hamza
    callback();                     // I am callback function
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Hamza', callMe);




