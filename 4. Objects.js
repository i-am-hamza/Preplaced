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

// Question 4 - What's JSON.stringify and JSON.parse ?
const user1 = {
    name: "Piyush",
    age: 24,
    };
console.log(JSON.stringify(user1)); // {"name":"Piyush","age":24}


const strobj = JSON.stringify(user1);

console.log(JSON.parse(strobj)); //{ name: 'Piyush', age: 24 }


// Use case of stringify and parse
// used in localStorage for storing data

// localStorage.setItem('key', strobj)

// console.log(localStorage.getItem('key'));


// Spread Operator

console.log([..."Karan"]); // "K","a","r","a","n"
console.log(typeof [..."Karan"]); // object


const user2 = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user2 };
console.log(admin); // { admin: true, name: 'Lydia', age: 21 }

const settings = {
    username: "Piyush",
    level: 19,
    health: 90,
};
const data = JSON.stringify(settings, ["level", "health"]);
console.log(data); //{"level":19,"health":90}


const shape ={
    radius: 10,
    diameter() {
    return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};
    console.log(shape.diameter());  // 20 ---> references to the object shape
    console.log(shape.perimeter()); // NaN ---> references to the window object





// Destructuring in JavaScript

const person1 = { name1: 'John', age: 30 };
const { name1, age } = person1;

console.log(name1); // Output: John
console.log(age);  // Output: 30


// Renaming Variables:

const { name1: personName, age: personAge } = person1;

console.log(personName); // Output: John
console.log(personAge);  // Output: 30

// Destructing from nested objects

let user5 = {
    name: "Max",
    age: 24,
    fullName: {
    first: "Carlos",
    last: "Pablo",
    },
};
const name4 = "Roadside Coder";
const { fullName:{first} } = user5;
console.log (first); // Carlos


// Object Referencing

let e = { greeting: "Hey!" };
let d;

d = e;
e.greeting = "Hello";
console.log(d.greeting); // Hello ---> Objects are referenced


console.log({ a: 1 } == { a: 1 }); // false
console.log({ a: 1 } === { a: 1 }); // false

let person3 = { name: "Lydia" };
const members = [person3];
person3.name= null;
console.log(members[0])
console.log(person3);


const value = { number: 10 };
const multiply = (x = { ...value }) => {
console.log((x.number *= 2));
};

multiply(); // 20
multiply(); // 20
multiply (value); // 20
multiply (value); // 40


// Output based question
function changeAgeAndReference (person) {
    person.age = 25;
    person = {
        name: "John",
        age: 50,
    }; 
    return person;
}
const personObj1 = {
    name: "Alex",
    age: 30,
};
const personObj2 = changeAgeAndReference (personObj1);
console.log(personObj1); // { name: 'Alex', age: 25 }
console.log (personObj2); // { name: 'John', age: 50 }



// To be covered:
// 1. Shalow copy
// 2. Deep copy


