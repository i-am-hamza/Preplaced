// 'this' Keyword in Javascript (Implicit Binding)
// Explain 'this' keyword?

this.a = 5;

console.log(this); // Window object

function getParam() {
    console.log(this.a);
}

getParam(); // 5


const getParam1 = () => {
    console.log(this.a);
};
getParam1();


let user = {
    name: "Grandular",
    age: 24,
    getDetails: function(){
        console.log(this.name);
    },
};

user.getDetails(); // Grandular

let user1 = {
    name: "Grandular",
    age: 24,
    getDetails: ()=>{
        console.log(this.name);
    },
};

user1.getDetails(); //undefined

let user2 = {
    name: "Kevin",
    age: 24,
    getDetails() {
        const nestedArrow = () => console.log(this.name);
        nestedArrow();
    },
};

user2.getDetails();


class user3 {
    constructor (n) {
        this.name = n;
    }
    getName() {
        console.log(this.name);
    }
}
const User = new user3("Ben"); 

console.log(User); // user3 { name: 'Ben' }

User.getName(); // Ben


// Output Based Questions

// Q1. 

const user4 = {
    // firstName: "Mark",
    getName(){
        firstName = "Zuckerburg";
        console.log(this.firstName);
    }
}

user4.getName(); // Mark
console.log(user4.firstName);


//Q2. 

function makeUser(){
     return{
        name: "John",
        ref: this
     }
}
 let userRef = makeUser();
 
 console.log(userRef.ref.name); //undefined


function makeUser1(){
     return{
        name: "John",
        ref(){
            return this;
        }
     }
}

let userRef1 = makeUser1();

console.log(userRef1.ref().name);


//Q3. 

const user5 = { 
    name: 'Hamza', 
    greet() { 
        return `Hello, ${this.name}`; 
    }, 
    farewell: () => { 
        return `Goodbye, ${this.name}`; 
    } 
}; 

console.log(user5.greet()); // Hello Hamza
console.log(user5.farewell()); // Goodbye undefined


// Q4. Create a calculator

let calculator = {
    read(){
        this.num1 = +prompt('num1 = ', 0);
        this.num2 = +prompt('num2 = ', 0)
    },

    sum(){
        return this.num1 + this.num2;
    },

    mult(){
        return this.num1 * this.num2;
    }
}


// calculator.read()
// console.log(calculator.sum());
// console.log(calculator.mult());

// ----------------------------------------------------------------------


// this in global scope

console.log(this); // globalObject

// this in function scope

function x(){
    console.log(this);
}



// this keyword value depends on how the function is called.
x(); // undefined
window.x(); // window


// this inside a object's method

 const obj = {
    a: 20,
    x: function (){             // here this function x is called as method
        console.log(this);
    }
 }

 obj.x()


 // this keyword uses in call, bind and apply functions

 const student1 = {
    name: "Hammas",
    printName: function(){
        console.log(this.name);
    }
 }

 