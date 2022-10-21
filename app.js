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
let age = 15;
age >= 16 ? console.log("Here are the keys!") : console.log("Sorry, you're too young.");

//LOOPS
//The Basics
for (let i = 0; i <= 10; i++) {
    console.log(i); 
};
for (let i = 10; i <= 400; i++) {
    console.log(i); 
};
for (let i = 12; i <= 4000; i+=3) {
    console.log(i); 
};

//Get Even
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(`${i} <-- is an even number`);
    } else {
        console.log(i);
    }
};

//Give Me 5
for (let i = 0; i <= 100; i++) {
     if (i % 5 == 0 && i % 3 !== 0 && i !== 0 ) {
         console.log(`I found a ${i}. High five!`);
     } else if (i % 3 == 0 && i % 5 !== 0 && i !== 0) {
         console.log(`I found a ${i}. Three is a crowd`);
     } else if (i % 3 == 0 && i % 5 == 0 && i !== 0) {
         console.log(`I found a ${i}. Three is a crowd.I found a ${i}. High five! `);
     }
};

//Savings Account
let bank_account = 0;
for (let i = 1; i <= 100; i++) {
   bank_account += i*2;
}
console.log(bank_account);


//ARRAYS & CONTROL FLOW
/*
What are the things in an array called?
It is called element, can be different datatypes.
Do Arrays guarantee those things will be in order?
Yes. Array are ordered.
What real-life thing could you model with an array?
A list of items. E.g., shopping list.
*/

//Easy Does It
const quotes = ['','',''];

// Accessing elements
const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);
randomThings[2] = "World";
console.log(randomThings);

//Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[2];
ourClass[4] = "Octocat";
ourClass.push('Cloud City') ;
console.log(ourClass);

//Mix It Up
const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.push("Great");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
console.log(myArray);
console.log(myArray.reverse());
console.log(myArray);

//Did you mutate the array with array.reverse( ) ? What does mutate mean? Did the .reverse()method return anything?
//Yes. The reverse() method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array. A value is said to be mutable if it can be changed.  A mutation is the act of changing the properties of a value. 

//Biggie Smalls
let int = 9;
//int < 100 ? console.log('little number') : console.log('big number');
if ( int < 100) {
    console.log('little number');
} else {
    console.log('big number');
}

//Monkey in the Middle
/*int < 5 ? console.log('little number') 
    : int > 10? console.log('big number')
    : console.log('monkey');
    */

if ( int < 5) {
     console.log('little number');
 } else if( int > 10) {
     console.log('big number');  
 } else {
     console.log('monkey');
 }


//What's in Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
  kristynsCloset.splice(6, 0, 'raybans');
  kristynsCloset[5] = "stained knit hat";
  thomsCloset[0][0];
  thomsCloset[1][2];
  thomsCloset[2][1];
  console.log(`Thom is looking fierce in a ${thomsCloset[0][2]}, ${thomsCloset[1][0]} and ${thomsCloset[2][2]}!`);
  thomsCloset[1][2] = 'Footie Pajamas';
  console.log(thomsCloset);



  //Functions
  //printGreeting
  function printGreeting(name) {
    console.log(`Hello, my name is ${name}.`);
  };
  printGreeting('Ying');

  //printCool
  function printCool(name) {
    console.log(`${name} is cool!`);
  };
  printCool('Ying');

//calculateCube
function calculateCube(sideLength) {
    //console.log(`The volume of this cube is ${sideLength*sideLength*sideLength}.`);
    console.log(`The volume of this cube is ${Math.pow(sideLength, 3)}.`);
}
calculateCube(5);

//isVowel
function isVowel(character) {
   switch (character.toLowerCase()) {
    case "a":
        console.log(true)
        break;
    case "e":
        console.log(true)
        break;
    case "i":
        console.log(true)
        break;
    case "o":
        console.log(true)
        break;
    case "u":
        console.log(true)
        break;     
   
    default:
        console.log(false)
        break;
   }
}
isVowel('H');

//getTwoLengths
const getTwoLengths = (string1, string2) => {
    const stringLength = [string1.length, string2.length];
    return stringLength;
}
console.log(getTwoLengths('name', 'age'));

//getMultipleLengths
const getMultipleLengths = (array) => {
    let lengthArray = [];
    for (let i = 0; i < array.length; i++) {
       lengthArray.push(array[i].length); 
    }
    return lengthArray;
};
console.log(getMultipleLengths(['amy', 'scholas', 'blablabla', 'hello world']));

//maxOfThree
const numArray = new Array(3);
const maxOfThree = (numArray) => {
    // return num1 >= num2 && num1 >= num3? num1
    //     : num1 >= num2 && num1 < num3? num3
    //     : num1 < num2 && num1 >= num3? num2
    //     : num1 < num2 && num1 < num3 && num2 >= num3 ? num2
    //     : num3;
    let max = numArray[0];
    for (let i = 0; i < numArray.length; i++){
        if (numArray[i] >= max) {
            max = numArray[i];
        }
    }
    return max;
}
console.log(maxOfThree([5,9,5])); 

//printLongestWord
const printLongestWord = (stringArray) => {
    let maxLength = stringArray[0].length;
    let maxLengthWord = stringArray[0];
    for ( let i = 0; i < stringArray.length; i++) {
        if ( stringArray[i].length > maxLength) {
            maxLength = stringArray[i].length;
            maxLengthWord = stringArray[i];
        }
    };
    return maxLengthWord;

};
console.log(printLongestWord(['elsa', 'emma', 'eva', 'longest', 'great','copycat']));

////////////////////////////////////
//Objects//////////////////////////

//Make a user object
const user = {
    name : "Ying",
    email : "aaa@gmail.com",
    age : 38,
    purchased : []
};



