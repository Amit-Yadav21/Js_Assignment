// Assignment 4
// [ Topics covered : Functions, Arrow functions, Callbacks, Higher Order Functions, Timing Functions, Map+filter+reduce, JS Modules, Scope in JS, Hoisting in JS ]

// ------------------------------------------ Qn 1:- explain with help of an example -
// a. function declaration/statement 

function bolofunction() {     // declaration/statement
    // functin body
}

// b.function invocation 
bolofunction();            // function invocation/call 

// c. Anonymous function 
(function () {
  console.log("hi from anonymous function");
})

// function expression anonymous
const withoutName = function () {
  console.log("hi from function expression anonymous");  //function express without any name
}

//D.function expression 
const withName = function () {
  console.log("hi from function expression named");
}

// E. Named function expression 
const withName2 = function named() {
  console.log("hi from named function expression");
}

//F. Parameters and arguments
const withName3 = function named2(x,y ) {         // parameters:- values passed at time of function declaration inside name of func
console.log("hi from functino with parameters and arguments");
return x+y
}
named2(2,3)                                        // arguments:- value passed at the time of calling the function    

//G. (IIFEs)Imidiately invoked function expressions  
(function () {
  console.log("hello from IIFES");
}) ();                                      //in this function we just rap function+body in paranthesis

//H.first class function/citizens 
// :- function in js are called first class citizens because 
//    passed as parameters and arguments
//    they can also be return in the function.
function first(x,y) {
  //nested function 
  function second(a,b,func) {
      console.log(func());
      return a + b;
  }
  console.log(second);
  return second(4,4,function() {
      return 4
  })
}
console.log(first(3,9));

// I.callbacks

// ------------------------------------ 2.(a)
const findMax = (a, b) => {
    return Math.max(a, b);
}
const num1 = 10;
const num2 = 5;
const max = findMax(num1, num2);
// console.log(max);

const num_1 = 40;
const num_2 = 20;
const maximum = num_1 > num_2 ? num_1 : num_2;
// console.log(maximum); 

const nums1 = 10;
const nums2 = 20;
const maxNum = Math.max(nums1, nums2);
// console.log(maxNum);

// ----------------------------------------- 2.(b)
const sumArrayElements = (arr) => {
    return arr.reduce((sum, current) => sum + current);
}
const numbers = [1, 2, 3, 4, 5];
const sum = sumArrayElements(numbers);
// console.log(sum);

let sums = 0;
for (let i = 0; i < numbers.length; i++) {
    sums += numbers[i];
}
// console.log(sums);

// ------------------------------------------ 2.(c)
const str = 'coding beauty';
const noVowels = str.replace(/[aeiou]/gi, '');
console.log(noVowels);

function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}
const inputString = "Hello AMIT yAdav";
const resultString = removeVowels(inputString);
// console.log(resultString); 

// ----------------------------------------- 2.(d)
const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
const number = 5;
const result = factorial(number);
// console.log(result);

// --------------------------------------- 2.(e)
function sort(arr) {
    return arr.sort((a, b) => a - b); // Ascending order
}
const numb = [4, 2, 6, 1, 9, 5];
const sortedNumbers = sort(numb);
// console.log(sortedNumbers);

// ========================================== 6) JS Modules questions :-
// ----------------------------- a)

// import {add, sub as subtract } from "./operation";
// import * as operation from "./operation.js";

// const result_add = add(2, 3, 4);
// const result4 = operation.add(2, 3, 4);
// const result_sub = subtract(2, 3);

// console.log(result_add); 
// console.log(result_sub);
