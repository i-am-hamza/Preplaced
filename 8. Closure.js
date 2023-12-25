// It is basically the function along with its lexical environment



function x(){
	var a = 7;
	function y(){
		console.log(a);
	}
	y();
}

x();

// Closures can be accessed even after the lexical scope is removed from the call stack.

function x(){
	var a = 7;
	function y(){
		console.log(a);
	}
	return y
}

var z = x()

console.log(z)  

z(); // 7


// Output Based Questions

// 1. 

function x(){
	var a = 7;
	function y(){
		console.log(a);
	}

	var a = 100
	return y

}

var z = x()

z(); // 100

/* Here the output is 100. This is because the function y( ) does not store the value of variable "a". 
Rather it stores the reference to the memory whose variable name is "a".
*/


// 2. 

function z(){
	var m = 100;
	function y(){
		var n = 20;

		function x(){
			console.log(n)
			console.log(m)	
		}
		x()
	}
	y()
}

z();

/* In this case, function x( ) forms a closure with both functions y ( ) and z( ). */

// 3. 

   
function dataHiding(){
    let counter = 0;
    
    function incrementCounter(){
        counter++;
        console.log(counter);
        }
    return incrementCounter;
    }
    
    // console.log(counter) // ReferenceError: counter is not defined
    
    let counter1 = dataHiding();
    counter1() // 1
    counter1() // 2


// 2.

    function outer() {
        var a = 10;
        function inner() {
            var b = 20;
            function deepInner() {
                var c = 30;
                console.log(a + b + c);
            }
            return deepInner;
        }
        return inner;
    }
    
    var closureFn = outer()();
    closureFn();
    
// 3. 

function createCounter() {
    var count = 0;
    return {
        increment: function() {
            count++;
        },
        getValue: function() {
            return count;
        }
    };
}

var counter = createCounter();
counter.increment();
console.log(counter.getValue());


// 4. 

for (var i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}




for (let i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}


// 5. 

function createFunction(i) {
    return function() {
        console.log(i);
    };
}

var functions = [];
for (var i = 0; i < 5; i++) {
    functions.push(createFunction(i));
}

functions[2]();


// 6. 
function Counter() {
    this.value = 0;
    setInterval(function() {
        this.value++;
        console.log(this.value);
    }, 1000);
}

// var counter = new Counter();


// Method 1: Using arrow function

function Counter() {
    this.value = 0;
    setInterval(() => {
        this.value++;
        console.log(this.value);
    }, 1000);
}

// var counter = new Counter();


// Method 2: using bind method



function Counter() {
    this.value = 0;
    setInterval(function() {
        this.value++;
        console.log(this.value);
    }.bind(this), 1000);
}

var counter = new Counter();




/* To be covered: 
 - Currying

*/
