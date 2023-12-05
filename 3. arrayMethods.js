/* Array Methods are functions that are used to iterate over an array and perform tranformation or computation */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];            // initializing an array

//length

let totalNumbers = arr.length
console.log(totalNumbers);


// toString

const cars = ['BMW', 'Audi', 'Ferrari', 'Tesla']

let carsString = cars.toString()
console.log(carsString);
console.log(typeof carsString);


// push - adding elements at the last
cars.push("Lamborgini");
console.log(cars);

let carPush = cars.push("Bentley");             // returns new array length
console.log(carPush);


// shift - removes the first element
cars.shift()
console.log(cars);

let carShifted = cars.shift()                   // returns element that is removed
console.log(carShifted);

//unshift - adds new element at the beginning of the array and unshifts old elements
cars.unshift("Audi")
console.log(cars);


// delete - this deletes the element from the array through index, however leaves the empty index with undefined
delete cars[3];
console.log(cars);          // [ 'Audi', 'Ferrari', 'Tesla', <1 empty item>, 'Bentley' ]
console.log(cars[3]);       // undefined





