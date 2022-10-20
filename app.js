/*Q & A
How do we assign a value to a variable?
We use the assignment operator to assign a value to a variable.
How do we change the value of a variable?
We can reassign a value to a variable by using assignment operator .
How do we assign an existing variable to a new variable?
After a value is assigned to a variable using the assignment operator, we can assign the value of that variable to another variable using the assignment operator.
Remind me, what are declare, assign, and define?
Creating a variable in JavaScript is called "declaring" a variable. 4 Ways to Declare a JavaScript Variable: using var, const, let or nothing.
Assignment operators assign values to JavaScript variables.
Defining a function means to write a function with all the code inside it. Defining a function does not run any of the code inside that function. It only teaches the computer what that function means. You can run that code by “calling” the function.
A variable declared without a value will have the value undefined.
What is pseudo coding and why should you do it?
Pseudo code is a text description of a piece of code or an algorithm. It is not the actual code. The methodology allows programmers to present the implementation of an algorithm. Algorithms are represented using pseudo codes as they can be interpreted by programmers without any background of coding.
What percentage of time should be spent thinking about how you're going to solve a problem vs typing in code to solve it?
80% of the time to think about how to solve the problems.
*/

// STRINGS 
let firstVariable;
firstVariable = "Hello World";
firstVariable = 3;
let secondVariable = firstVariable;
secondVariable = "modified";
console.log(firstVariable);
const yourName = "Ying";
console.log( `Hello, my name is ${yourName}.`);

//BOOLEANS
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a != b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !=='48');

//the Farm
let animal = "cow";
let isCow = animal == "cow" ? 'mooooo' : "Hey! You're not a cow.";
console.log(isCow);
animal = 'dog';
isCow = animal == "cow" ? 'mooooo' : "Hey! You're not a cow.";
console.log(isCow);

//Driver's Ed



//LOOPS

//The Basics

//Get Even

//Give Me 5

//Savings Account



//ARRAYS & CONTROL FLOW



