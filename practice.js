

// nums {
//     a: 350,
//     b: 150,
//     title: "My nums"
// }

// function duplicateValues(obj){
//     for (key in obj){
//         if(typeof obj[key] === 'number'){
//             obj[key] += obj[key];
//         }
//     }

//     console.log(obj);
// }

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


console.log({} === {}); 


const person1 = { name1: 'John', age: 30 };
const { name1: personName, age: personAge } = person1;

console.log(person1.personName);



/* Given an object, write a function that adds a value from a key to another key and removes the former key */

let nums = {
    a: 200,
    b: 150,
    title: "My nums"
}

function replaceRemove(obj, key1, key2){
    if(key1 in obj && key2 in obj){
        obj[key1] += obj[key2];
        delete obj[key2]
    }

    return obj;
}

console.log(replaceRemove(nums, 'a', 'b'));


