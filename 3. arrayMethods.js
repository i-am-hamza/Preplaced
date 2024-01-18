 /* Array Methods are functions that are used to iterate over an array and perform tranformation or computation */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];            // initializing an array

//length

let totalNumbers = arr.length
console.log(totalNumbers);


// toString

const cars = ['BMW', 'Audi', 'Ferrari', 'Tesla']

let carsString = cars.toString()
console.log(carsString);                // BMW AUDI Ferrari Tesla 
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


cars[3] = 'Nissan';
 

// concat - merge two arrays and creates a new array

const bikes = ['Fz', 'Harley', 'Royal Enfield']
const vehicles = cars.concat(bikes);
console.log("Cars are: ", cars);
console.log("Vehicles are: ", vehicles);


// flat - it reduces the dimensity of the array
const myArr = [[1,2],[2,4],[3,4]];
const newArr = myArr.flat();

console.log(myArr);
console.log(newArr);


// map - creates a new array from an existing array by applying a function to each of the elements.
const array = [1, 2, 3]
const newArrMap = array.map((num, i, array)=>{
    return num * num;
})

console.log(newArrMap);


// uppercase 
const name = ['alan', 'wanda', 'maxwell']
const nameUppercase = name.map((value)=>{
    return value.toUpperCase();
})

console.log(nameUppercase);

// filter - creates a new array by applying a conditional statement on each element of the exiting array
const newArrFilter = array.filter((num, i, array)=>{
    return num > 4;
})

console.log(newArrFilter);


// reduce - creates a new array by reducing the existing array by applying function to each element and accumulating the result
let arr2 = [1,2, 4, 5, 6]

const sumReduce = array.reduce((prev, curr, i, array)=>{
    return prev + curr;
}, arr2)

// console.log(sumReduce);


// Output based questions on array methods - map, filter and reduce

let students = [
    {name: 'Piyush', rollNumber: 31, marks: 80},
    {name: 'Jenny', rollNumber: 15, marks: 69},
    {name: 'Kaushal', rollNumber: 16, marks: 35},
    {name: 'Dilpreet', rollNumber: 7, marks: 35}
]


// Q1 - Return all student names in capital letters

// using for loop

const studentForUpper = []

for(let  i= 0;  i< students.length; i++) {
        studentForUpper.push(students[i].name.toUpperCase())        
}

console.log(studentForUpper);
console.log(students);

// using map function
const studentMapUpper = students.map((stu)=>{return stu.name.toUpperCase()})
console.log(studentMapUpper);


//Q2. Return details of only those who scored less than 60
// filter
let studentFilter = students.filter((stu) => stu.marks < 60)
console.log(studentFilter);

//Q3. Return details of only those who scored more than 60 and roll number greater than 15
let goodStudents = students.filter((stu)=> stu.marks > 60 && stu.rollNumber > 15 )
console.log(goodStudents);


//Q4. Return sum of all marks
// reduce

let sumMarks = students.reduce((prev, curr, i, students)=>{
    return prev + curr.marks
}, 0)
console.log(sumMarks);


// Q5. Return only names of those who scored more than 60
let nameStudent = students.filter((stu)=> stu.marks > 60).map((stu)=>stu.name)
console.log(nameStudent);





const arr1 = [1, 2, [3, 4], [3, 3, 8], 7, 8]
console.log(arr1.flat(2));


// [1, 2, 3, 4, [3, 3, 8], 7, 8]



console.log(typeof sumReduce);