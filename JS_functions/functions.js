// Function declaration

function sayHello(){ 
    return 'Hello World!';
};
console.log(sayHello()); 
// hoisting - interpreter pulls all functions to top of file. only works for function declarations



function sayHello(name){
    return `Hello ${name}`;
};
console.log(sayHello('Michael'));      





// Function expression

var add = function (firstNumber, secondNumber){
    return firstNumber + secondNumber;  
};

console.log('1+3 with add:', add(1,3));






// arrow function - works without retrun and curly brackets only if it is on a single line
var multiply = (firstNumber,secondNumber)=> firstNumber * secondNumber;

console.log('multiply 2 and 5:', multiply(2,5));








// Declare a named function that takes an array of numbers,
// and returns the sum , or total , of all the numbers in array


function calculateTotal(array){
    var total = 0;
    for (var number of array){  
        total += number;
        console.log(total);
    };
    return total;
}

var numbers = [1,2,3,4,5];

var total =calculateTotal(numbers);

console.log(total);


// Define an anonymous function expression that takes two arguments:
// - an object for example {name: 'Wojtek, age: 30}
// - a strong for example 'name'

// Your function should return true if given string is a key on the given object
// and false if the object does not have this key

var objectHasKey = function(object, searchString){
    for (var key in object){
        if (searchString === key){
            return true
        }
        
    }
    return false
}

var person ={
    name: "Michael",
    age: 35
}



var test1 = objectHasKey(person,'name');
console.log(test1);

var test2 = objectHasKey(person,'profession');
console.log(test2);




//self invoking function

(function (){
    console.log('Hi!')
})()