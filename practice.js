let nums = {
    a: 200,
    b: 150,
    title: "My nums"
}

// nums {
//     a: 350,
//     b: 150,
//     title: "My nums"
// }

function duplicateValues(obj){
    for (key in obj){
        if(typeof obj[key] === 'number'){
            obj[key] += obj[key];
        }
    }

    console.log(obj);
}

// duplicateValues(nums);


function duplicateValues1(obj){
    for (key in obj){
        if (key === 'b'){
            var value = obj[key];
        }
        if(key === 'a'){
            obj[key] += value;
        }  
    }
    console.log(obj);
}


duplicateValues1(nums)

let variable = {
    a: 1
}

console.log({} === {}); 


const person1 = { name1: 'John', age: 30 };
const { name1: personName, age: personAge } = person1;

console.log(person1.personName);