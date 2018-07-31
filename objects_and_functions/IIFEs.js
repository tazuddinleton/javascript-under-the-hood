// Expression returns value

// function statement
function greet(name){
    console.log('Hello', name);
}

greet('John');
// function expression

var greetFunc = function(name){
    console.log('Hello', name);
}

greetFunc('John');


// IIFE - Immediately Invoked Function Expression

var greeting = function(name){
    return 'Hello'+ ' '+name;
}('John');

console.log(greeting);

(function(name){
    var greeting = 'Inside IIFE: Hello'+ ' '+ name;
    console.log(greeting);
}('John')); // The classic IIFE 
