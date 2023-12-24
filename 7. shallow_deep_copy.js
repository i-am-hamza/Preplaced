// Shalow Copy
const a = {key1: "Name", key2: "Age" }
const b = a;

b.key1 = "Hamza"

console.log(a)


// Deep copy

// Method 1: using spread operator

const personDetails = {name: "Karan", age: 24, location: "Delhi"}
const person1 = {...personDetails};

person1.name = "Mathew"

console.log(personDetails);
console.log(person1);


// Method 2: Object assignment

const person2 = Object.assign({}, personDetails)
person2.location = "Mumbai"

console.log(personDetails);
console.log(person2);


// Method 3: Stringify the object

const student = [
    {name: "Adam", age: 17},
    {name: "Eve", age: 15},
    {name: "Max", age: 17},
    
]

let studentDetails = [...student]; // This will result in shalow copy of object as though the array is deep copied, the object is being referenced in the new variable
studentDetails[1].age = 16;

console.log(student[1]);
console.log(studentDetails[1]);


let studentDetails2 = Object.assign([], student) // This will also result the same.

// To solve the above problem, we use JSON stringify and JSON parse.

let studentDetails3 = JSON.parse(JSON.stringify(student))
studentDetails3[1].name = "Helen"

console.log(studentDetails3[1]);
console.log(student[1]);

