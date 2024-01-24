// functional Pradime
// OOps  -> Focus on Objects
// js is a functional language....

// --------------- FUNCTIONS ---------------
// objects are {} or  []
// Function are nothing but 1st class OBjects in JS
// const obj = {};
// const arr = [];

// //  function declaration
// function sum1() {
//   console.log("hello sum");
// }

// const a = {
//   name: "utkarsh",
// };

// // Function Expression
// const sum = function () {
//   console.log("hello sum");
// };

// sum();
// sum1();

// // Function can take a Function as a parameter

// function hello(anyName) {
//   console.log(anyName);
//   // anyName();
// }

// hello({ name: "hello" });

// hello(() => {
//   console.log("hello in hindi");
// });

//  ------------------- SIDE EFFECTS -----------------

// let z = 12;
// // sum function responsibility is to do SUM ONLY and nothing else.
// function sum(a, b) {
//   z = 99; // this funciton is doing a side effect. going out to change a value
//   console.log(a); // this is also a side effect. going to console to log
//   return a + b;
// }

// --------------------- Pure and Inpure Functions ---------
// Pure functions do not have side effects.

// ImPure functoin
let z = 12;
// // sum function responsibility is to do SUM ONLY and nothing else.
function sum(a, b) {
  z = 99; // this funciton is doing a side effect.
  console.log(a); // this is also a side effect
  return a + b;
}

// pure functions

// in pure function for the same Input the output will always be same
function sum(a, b) {
  return a + b;
}

// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2
// sum(1,1) //2

// ------------------ Declarative Programming VS Imperative Programming ---------------

// 1. Imperativeprogramming or Procedural programming

// Question : [1,2,3,4,5];
// Answer: [2,4,6,8,10];

// you have dont things in steps.
// for loop
// you take value out of the original array and doubled it
// pushed the value to the new array.

// are you responsible for thsi logic ?

// You are focused on the implementation.
// const question = [1, 2, 3, 4, 5];
// function doubleNumber(array) {
//   const doubleArray = [];

//   for (let index = 0; index < question.length; index++) {
//     const element = question[index];
//     doubleArray[index] = 2 * element;
//   }

//   return doubleArray;
// }
// const answer = doubleNumber(question);
// console.log(answer);

// 2. Declarative programming

// Question : [1,2,3,4,5];
// Answer: [2,4,6,8,10];

// you take value out of the original array and doubled it

// function double(array) {
//   const newArray = array.map(item => 2 * item );
//   return newArray;
// }

//  ---------------------- MUTABLE (changing in english ) ------------------

// const obj = {
//   name: 'utkarsh'
// }

// obj.name = 'akash' // mutating

// const arr = [1,2,3,4,5]
// arr.push(6); // mutation

// In js Or in FUnctional Programming/Paradime we DO NOT MUTATE ...

//  --------------------- IMMUTABILITY RULES ----------------

// const obj1 = {
//   name: "utkarsh",
//   class: 26,
//   age: 27,
//   phone: "chinese",
//   address: {
//     street: "delhi",
//     pincode: 110034,
//   },
// };

// YOu should not change in obj1 as per the rules of Functional programming.

// shallow copy
// const obj1Copy = {
//   ...obj1,
// };

// const obj1copy2 = JSON.parse(JSON.stringify(obj1)); // deep copy (hacky method)...
// we should actually refrain from this.

// obj1Copy.name = "akash";
// obj1Copy.address.pincode = 100;

// obj1copy2.name = "akansha";
// obj1copy2.address.pincode = 100000000000;

// console.log(obj1Copy, obj1);
// console.log(obj1copy2);

// const array = [1, 2, 3, 4];

// const arrayCopy = [0, ...array, 100];
// arrayCopy.push(890);

// console.log(arrayCopy);
// console.log(array);

// ----------------- HOF (Higher order FUnction) ----------

// a function can accept a function as Parameter..
// a function can Return a function as well...
// or who can do both

// function abc() {
//   console.log("abc print");
//
// }

// setTimeout(abc, 5000);

// // HIGHER ORDER FUNCITON
// function outer(fn) {
//   console.log(fn);
//   return fn;
// }

// function sum() {
//   console.log("sum hello");
// }

// const functionReturn = outer(sum);

// functionReturn();

// In functionl Paradime - React, Js, python
// 1. Immutability
// 2. Pure function. (You cant create 100% of the software with pure function so max % is good)

const add = (x, y) => {
  return x + y;
};

const sub = (x, y) => {
  return x - y;
};

const mult = (x, y) => {
  return x * y;
};

// HOF -> it is a HOF (impure functoin)
function calculateWithLogger(fn, x, y) {
  // log the activity logger server which is outside
  return fn(x, y);
}

// earlier we had 3 impure function -> 0 pure functoin

// 3 pure functoin and 1 Impure

console.log(calculateWithLogger(mult, 1, 2)); // 2
// console.log(calculateWithLogger(add, 8, 2)); // 10

console.log(mult(1, 2)); // 2
// console.log(add(8, 2)); // 10
// console.log(sub(1, 4)); // -3

// ACtivy Quiz ->
