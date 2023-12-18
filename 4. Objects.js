// Objects in JavaScript

const func = (function (a){
    delete a
    return a;
})(5)

console.log(func); // 5


// Creating and accessing a key of multiple words

const person ={
    name: "Hamza",
    age : 23,
    "favourite car": "Rolls Royce"
}

console.log(person["favourite car"]); // Rolls Royce