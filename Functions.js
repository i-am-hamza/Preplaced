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



// Example 2: Anonymous Functions

// function (name){
//     console.log(name)
// }

/*  - Above is a anonymous function.
    - It will result an Error -> Syntax Error: Require function name
    - Is used as function expression or in objects

*/



// Example 3: Functions as First Class Functions

function add (num1, num2){
    return num1 + num2
}

function squareOfAddition(fn){
    console.log(fn * fn);
}

squareOfAddition(add(4,5));