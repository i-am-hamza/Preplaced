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
