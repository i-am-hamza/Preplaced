// 1. Comparison Operator

var a = "42";
var b = 42

console.log(a == b); // true
console.log(a === b); // false


// 2. Write a JavaScript program to display the current day and time in the following format.

var today = new Date();
console.log(today);

var date = today.getDate()

var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

console.log("Today is", dayList[date], ".");

var hour = today.getHours();
var minute = today.getMinutes();
var seconds = today.getSeconds();

var prepand = (hour >= 12)? "PM":"AM";

hour = (hour >=12)? hour - 12: hour;

if (hour === 0 && prepand === "PM"){
    if (minute === 0 && second === 0){
        hour = 12;
        prepand = 'Noon';
    }else{
        hour = 12;
        prepand = 'PM';
    }
}

if (hour === 0 && prepand === 'AM'){
    if(minute === 0 && second === 0){
        hour = 0;
        prepand = 'Midnight'
    }else{
        hour = 12;
        prepand = 'AM'
    }
}

console.log("Time is", hour + prepand + " : " + minute + " : " + seconds);