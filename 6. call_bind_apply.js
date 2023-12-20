// Call

var obj = {name: 'Hamza'}

function sayHello(age, profession){
    return "Hello " + this.name + " is " + age;
}


console.log(sayHello.call(obj, 23));


// Apply function

function sayHello2(age, profession){
    return "Hello " + this.name + " is " + age + " and is a " + profession;
}

console.log(sayHello2.apply(obj, [23, "Consultant"]));


// Bind function

const bindFunc = sayHello.bind(obj);
console.log(bindFunc(23));


// Output Based Questions

// Q1. 

const age = 10;

var person = {
    name: "Hamza",
    age: 23,
    getAge: function(){
        return this.age;
    },
};

var person2 = {age: 24}
console.log(person.getAge()); //23 
console.log(person.getAge.call(person2)); // 24


// Q2. Call printAnimals such that it prints all animals in object

const animals = [
    {species: "Lions", name: "King"},
    {species: "Whale", name: "Queen"}
];

function printAnimals(i){
    this.print = function(){
        console.log("#" + i + " "+ this.species + ": "+ this.name);
    };
    this.print();
}

for(let i = 0; i < animals.length; i++){
    printAnimals.call(animals[i], i);
}


// Append an array to another array
const array = ["a", "b"]
const elements = [5, 1, 6, 3, 10];

array.push.apply(array,elements);

console.log(array);


// Find min/ max from the array element using apply function

console.log(Math.max.apply(null, elements));

console.log(Math.min.apply(null, elements));



