// Call

var obj = {name: 'Hamza'}

function sayHello(age){
    console.log(age);
    // console.log(profession);
    return "Hello " + this.name + " is " + age;
}

const bindFunc = sayHello.bind(obj, 23);
console.log(bindFunc('Artist'), 46);


// console.log(sayHello.call(obj, 23));


// Apply function

function sayHello2(age, profession){
    return "Hello " + this.name + " is " + age + " and is a " + profession;
}

// console.log(sayHello2.apply(obj, [23, "Con"]));


// Bind function




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


// // Q2. Call printAnimals such that it prints all animals in object

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


// // Append an array to another array
const array = ["a", "b"]
const elements = [5, 1, 6, 3, 10];

array.push.apply(array,elements);

console.log(array);


// // Find min/ max from the array element using apply function

console.log(Math.max.apply(null, elements));

console.log(Math.min.apply(null, elements));


// More questions:

// 1. 

var numbers = [1, 6, 3, 4, 5];
var maxNumber = Math.max.call(null, ...numbers);
console.log(maxNumber);



//2. 

function power(base, exponent) {
    console.log(this.name + ' powered up to ' + Math.pow(base, exponent));
}

var superhero = { name: 'Iron Man' };
var ironManPower = power.bind(superhero, 2);
ironManPower(3);


//3. 
var multiplier = {
    factor: 3,
    multiply: function(a) {
        return this.factor * a;
    }
};

var triple = multiplier.multiply.bind(multiplier, 2);
console.log(triple(3));


// 4. 
function calculateSum(a, b, c) {
    console.log(this.multiplier * (a + b + c));
}

var context = { multiplier: 2 };
calculateSum.apply(context, [1, 2, 3]);

//5. 

let multiplier = {
    factor: 4,
    multiply: function(a, b) {
        return this.factor * a * b;
    }
};

var result = multiplier.multiply.apply(multiplier, [2, 3]);
console.log(result);

