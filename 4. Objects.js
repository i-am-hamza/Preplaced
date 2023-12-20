// Objects in JavaScript

const func = (function (a){
    delete a
    return a;
})(5)

console.log(func); // 5


// Creating and accessing a key of multiple words

const person ={
    firstName: 'Hamza',
    lastName: 'Ahmad',
    age: 23,
    jobTitle: 'Consultant',
    "favourite car": "Rolls Royce"
}

console.log(person["favourite car"]); // Rolls Royce

// Deleting a property
delete person['favourite car'];
console.log(person);


// Creating dynamic properties and values
const property = "firstName"
const name = "Hamza"

const user = {
    [property]: name
}

console.log(user);


// Looping through all values

for(key in person){
    console.log(person[key]);
}


// Output Based Questions

const obj ={
    a: "one",
    b: "two",
    a: "three"
}

console.log(obj);  // logs the lastest value to the key defined


// Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2


let nums ={
    a: 100,
    b: 200,
    title: "My nums"
}

multiplyNumeric(nums);

function multiplyNumeric(obj){
    for(key in obj){
        if(typeof obj[key] === 'number'){
            obj[key] *= 2;
        }
    }
}



console.log(nums);


// Output of the following code:

const a ={}
const b = {key: 'b'};
const c = {key: 'c'};

a[b] = 123;
a[c] = 456;

console.log(a);  // [Object Object]: 456

/*
coversion of object into string results into creation of property as 'Object Object'

*/ 




