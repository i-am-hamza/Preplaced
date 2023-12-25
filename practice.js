

// // nums {
// //     a: 350,
// //     b: 150,
// //     title: "My nums"
// // }

// // function duplicateValues(obj){
// //     for (key in obj){
// //         if(typeof obj[key] === 'number'){
// //             obj[key] += obj[key];
// //         }
// //     }

// //     console.log(obj);
// // }

// // duplicateValues(nums);


// function duplicateValues1(obj){
//     for (key in obj){
//         if (key === 'b'){
//             var value = obj[key];
//         }
//         if(key === 'a'){
//             obj[key] += value;
//         }  
//     }
//     console.log(obj);
// }


// console.log({} === {}); 


// const person1 = { name1: 'John', age: 30 };
// const { name1: personName, age: personAge } = person1;

// console.log(person1.personName);



// /* Given an object, write a function that adds a value from a key to another key and removes the former key */

// let nums = {
//     a: 200,
//     b: 150,
//     title: "My nums"
// }

// function replaceRemove(obj, key1, key2){
//     if(key1 in obj && key2 in obj){
//         obj[key1] += obj[key2];
//         delete obj[key2]
//     }

//     return obj;
// }

// console.log(replaceRemove(nums, 'a', 'b'));



// 

let obj_1 = {
    person1: {
        name: "Max",
        roll: 55
    },
    person2: {
        name: "Eva",
        roll: 24
    },
    person3: "Karen"

}


// [Max, 55, Eva, 24]


let personDetails = [];

function pushToArray (obj){
     for(key in obj){
        if(typeof obj[key] === "object"){
            for(key1 in obj[key]){
                personDetails.push(obj[key][key1]);
            }
            
        }else{
            personDetails.push(obj[key])
        }
    }
    console.log(personDetails);
}

// pushToArray(obj_1)


var age = 10;

var person = {
    name: "Hamza",
    age: 23,
    getAge: () => {
        return this.age;
    },
};

var person2 = {age: 24}
// console.log(person.getAge()); //23 
// console.log(person.getAge.call(person2)); // 24




function x(){
    function y(){
		console.log(a);
	}
    y();
	var a = 7;
	

    
	var a = 100
	

}
// x()


;
    for (var i = 1; i <= 5; i++) {
        function ab(i){
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
        }
        ab(i);
}
        


