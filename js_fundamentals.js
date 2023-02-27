console.log('Hello, World!');

// variables - use var keyword to decalre variable

var greeting = 'Hello';
console.log(greeting);

greeting = 5;
console.log(greeting);     

console.log(typeof'michael');

// Datatypes:

// Number - no floats
console.log(typeof 1.5);

// String

console.log("Don't Break");

// ("")
// ('')
// (``) - used for string interpolation. similar to fstrings in python

// String(5)
//->'5'

var name ='Michael';
var day = 'Monday'
console.log(`Hello ${name}, Happy ${day}` );

// Null - equivalent of None

var myVariable = null;
console.log(myVariable);


// Undefined - will return if a variable has no value assigned

// var myVariable;
// console.log(myVariable);

// NaN - not a number
console.log(undefined)


// Boolean
//false
//true

// Symbol





//Control Flow

if(1>0){
    var message = '1 is greather than 0';
} else if (1 == 0){
    var message ='1 is equal to 0';
} else {
    var message = '1 is not greater than 0';
}
console.log(message);


// Truthy and Falsy

// false
if (null){
    var result = 'The expression evaluated to true.'
} else{
    var result = 'The expression evaluated to false.'
}
console.log(result);


// false
if (NaN){
    var result = 'The expression evaluated to true.'
} else{
    var result = 'The expression evaluated to false.'
}
console.log(result);


// false
if (undefined){
    var result = 'The expression evaluated to true.'
} else{
    var result = 'The expression evaluated to false.'
}
console.log(result);


// False
// 0, undefined, null, " ", NaN, false

   
//Equality

// === checks value and type



//AND/OR in conditionals
// AND = &&
// OR = ||