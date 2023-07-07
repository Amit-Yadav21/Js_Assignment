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
