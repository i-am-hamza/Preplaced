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



// Example 4: Arrow Functions 




// Example 5: Callback Functions