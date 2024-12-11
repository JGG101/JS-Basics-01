// BASICS OF JAVASCRIPT:
// Understanding the fundamentals thoroughly will give you a solid foundation for mastering the language and building more complex applications.


// 1. Variables and Data Types

// 1.1 Variables: (let, const, var)

// let name = "Alice"; // Can change later
// console.log(name);

// let nameA = "Alice";
// name = "Bob"; // Reassigned
// console.log(nameA);

let name = "Alice";
console.log(name);

let nameA = "Alice";
nameA = "Bob";
console.log(nameA);

// const pi = 3.14159; // Cannot be reassigned
// console.log(pi);

const pi = 3.14159;
console.log(pi);

// pi = 3.14; 
// console.log(pi); // Error

// var age = 25; // Avoid using 'var' for modern JavaScript code

var age = 25;
console.log(age);

// 1.2 Data Types:
// a. Example of Primitive Data Types:

// let str = "Hello"; // String
// console.log(str);

let str = "Hello";
console.log(str);

let str0 = 'Hi!';
console.log(str0);

let str1 = `What!`;
console.log(str1);

// let num = 10; // Number
// console.log(num);

let num = 10;
console.log(num);

// let isActive = true; // Boolean
// console.log(isActive);

let isActive = true;
console.log(isActive);

// let empty = null; // Null
// console.log(empty);

let empty = null;
console.log(empty);

// let nothing; // Undefined
// console.log(nothing);

let nothing;
console.log(nothing);


// b. Non-primitive types: also called reference types.
// Object: {}, arrays, functions, dates

// let user = {
//     firstName: 'Alice',
//     lastName: 'Bob', 
//     age: 25
// }; // Object

// console.log(user);
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);

let user = {
    firstName: 'Alice',
    lastName: 'Bob', 
    age: 25
};

console.log(user);
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);


// c. Type Coercion
// JavaScript automatically converts types when necessary. This is known as type coercion.

// For example, adding a number to a string will result in the number being converted to a string:

// let result = "5" + 10; // "510"
// console.log(result);

let result = '5' + 10;
console.log(result);

// 2. Operators
// JavaScript has several types of operators that allow you to perform operations on variables or values:

// 2.1 Arithmetic Operators
// +, -, *, /, %, ++, --

// Example:
// let x = 5;
// let y = 3;

// console.log(x + y); // 8
// console.log(x - y); // 2
// console.log(x * y); // 15
// console.log(x / y); // 1.6666666666666667
// console.log(x % y); // 2 (remainder of x / y)

let x = 5;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// x++; // increment x by 1
// y--; // decrement y by 1

// console.log(x++);
// console.log(y--);

x++;
y--;

console.log(x++);
console.log(y--);



// 2.2 Assignment Operators
// Used to assign values to variables:

//     =, +=, -=, *=, /=

// let a = 10;

// a += 5; // a = a + 5 → 15
// console.log(a);

// a -= 3; // a = a - 3 → 12
// console.log(a);

// a *= 2; // a = a * 2 → 24
// console.log(a);

// a /= 4; // a = a / 4 → 6
// console.log(a);

// a **= 2; // a = a*6 → 36
// console.log(a);


let a = 10;

a += 5;
console.log(a);

a -= 3;
console.log(a);

a *= 2;
console.log(a);

a /= 4;
console.log(a);

a **= 2;
console.log(a);


// 2.3 Comparison Operators
// Used to compare two values:

//     ==, ===, !=, !==, >, <, >=, <=

//     ==: Checks equality with type coercion.

//     ===: Checks equality without type coercion (more reliable).

// let b = 10, c = "10";

// console.log(b == c); // true (coerces "10" to 10)
// console.log(b != c); // false (coerces "10" to 10)
// console.log(b === c); // false (no coercion)
// console.log(b !== c); // true (no coercion)

// console.log(b > c); // false
// console.log(b >= c); // true
// console.log(b < c); // false
// console.log(b <= c); // true

let b = 10, c = '10';

console.log(b == c);
console.log(b != c);
console.log(b === c);
console.log(b !== c);

console.log(b > c);
console.log(b >= c);
console.log(b < c);
console.log(b <= c);


// 2.4 Logical Operators
// Used to combine multiple conditions:

//     && (AND)
//     || (OR)
//     ! (NOT)

// let xx = true, yy = false;
// console.log(x0 && yy); // false
// console.log(xx || yy); // true
// console.log(!xx); // false
// console.log(!yy); // true 

let xx = true, yy = false;

console.log(xx && yy);
console.log(xx || yy);
console.log(!xx);
console.log(!yy);


// 3. Conditional Statements: (if, else, if else, switch)

// 3.1 if statement

// let num1 = 5;

// if (num1 > 0) {
//     console.log('Number is positive');
// }

let num1 = 5;

if(num1 > 0) {
    console.log('Number is positive');
}


// 3.2 If & Else Statements

// let num2 = -5;

// if (num2 > 0) {
//     console.log('Number is positive');
// } else {
//     console.log('Number is negative.');
// }

let num2 = -5;

if(num2 > 0) {
    console.log('Number is positive');
} else {
    console.log('Number is negative.');
}


// 3.3 if, Else If & Else Statements

// let num3 = -5;

// if (num3 = 0) {
//     console.log('Number is positive.');
// } else if (num3 < 0) {
//     console.log('Number is negative.');
// } else {
//     console.log('Number is zero.');
// }

let num3 = -5;

if(num3 = 0) {
    console.log('Number is positive.');
} else if (num3 < 0) {
    console.log('Number is negative.');
} else {
    console.log('Number is zero.');
}


// 3.4 switch Statement

// let day = 3;
// let dayName;

// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     default:
//         dayName = "Invalid day";
// }

// console.log(dayName); // Wednesday

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(dayName);


// 4. Loops

// 4.1 for loop
// The for loop is used when you know how many times you need to execute a statement.

// for (let i = 0; i < 5; i++) {
//     console.log(i); // Prints numbers 0 through 4
// }

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 4.2 while loop

// let i = 0;
// while (i < 5) {
//     console.log(i); // Prints numbers 0 through 4
//     i++;
// }

let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// 4.3 do...while loop

// let i$ = 0;
// do {
//     console.log(i$); // Prints numbers 0 through 4
//     i$++;
// } while (i$ < 5);

let i$ = 0;

do {
    console.log(i$);
    i$++;
} while (i$ < 5);

// 4.4 for of loop
// for (const item of array) {
    // code to run
// }

// const numArray = [1, 2, 3, 4, 5];

// for (const num of numArray) {
//     console.log("Iteration number " + num)
// }

const numArray = [1, 2, 3, 4, 5];

for (const num of numArray) {
    console.log('Iteration number ' + num)
}


// 5. Functions:

// 5.1 Function Declaration

// function greet(name) {
//     return "Hello, " + name;
// }

// console.log(greet("Alice")); // "Hello, Alice"

function greet(name) {
    return 'Hello, ' + name;
}

console.log(greet('Alice'));


// 5.2 Function Expression:

// const greet = function(name) {
//     return "Hello, " + name;
// };

// console.log(greet("Bob")); // "Hello, Bob"

const greeting = function (name) {
    return 'Hello, ' + name;
}

console.log(greeting('Bob'));


// 5.3 Arrow Functions (ES6):

// const greet = (name) => "Hello, " + name;
// console.log(greet("Charlie")); // "Hello, Charlie"


const greets = (name) => 'Hello, ' + name;
console.log(greet('Charlie'));


// 6. Scope:

// 6.1 Scope

// a. Global Scope

let globalConst = 'I am a global variable';

function showGlobalConst() {
    console.log(globalConst); // Can access the global variable
}

showGlobalConst(); // Output: 'I am a global variable'



// b. Function Scope

function testFunctionScope() {
    let testFunctionScoped = 'I am inside the function!';
    console.log(testFunctionScoped); // Access inside the function
}

testFunctionScope(); // Output: 'I am inside the function!'
// console.log(testFunctionScoped); // Error: functionScoped is not defined

//c. Block Scope

if (true) {
    let blockScoped = 'I am inside the block!';
    const blockConst = 'I cannot be assigned';
    console.log(blockScoped);
    console.log(blockConst);
}

// console.log(blockScoped); // Error: blockScoped is not defined
// console.log(blockConst); // Error: blockConst is not defined

// Example with var (no block scope)
// in this case, functionScopeVar is accessible outside the block, because var does not respect block scope, only fuction scope.

if (true) {
    var functionScopedVar = 'I am still function scope!';
}

console.log(functionScopedVar); // Accessible outside the block (function-scoped)


