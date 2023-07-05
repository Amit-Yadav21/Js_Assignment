// -------------------------- Q.1) find largest number.

const num1 = 78;
const num2 = 89;
const num3 = 69;
let largest;
if (num1 >= num2 && num1 >= num3) {
  largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largest = num2;
} else {
  largest = num3;
}
console.log("The largest number is: " + largest);

const { readlinkSync } = require("fs");

// ------------------------------ Q.2) check a leap year or not .

let readlineSync = require("readline-sync");

let year = readlineSync.question("Enter your Numbers:");
let isLeapYear = false;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  isLeapYear = true;
}
console.log(`${year} is ${isLeapYear ? 'a leap year' : 'not a leap year'}`);

// ------------------------- Q.3) using swich statement.

let month =29
let year_ = 2023;
let days;

switch (month) {
  case 1: // January
  case 3: // March
  case 5: // May
  case 7: // July
  case 8: // August
  case 10: // October
  case 12: // December
    days = 31;
    break;
  case 4: // April
  case 6: // June
  case 9: // September
  case 11: // November
    days = 30;
    break;
  case 2: // February
    if ((year_ % 4 == 0 && year_ % 100 != 0) || year_ % 400 == 0) {
      days = 29; // Leap year
    } else {
      days = 28; // Non-leap year
    }
    break;
  default:
    console.log("Invalid month number.");
    break;
}

if (days !== undefined) {
  console.log("The number of days in month " + month + " is: " + days);
}

// ---------------------------------Q.4) find the odd numbers:

for (let i = 1; i<=10; i++){
  if(i%2!=0){
    console.log(i+ " "+ "this is the Odd numbers:");
  }
}

// ------------------------------Q.5) the sum of numbers.

let numbers = [2,5,6,7,8,9];
let sum = 0;
for(let num of numbers){
  sum = sum +num;
 
}
console.log("the sum all numbers of array" +" "+ sum)


// -------------------------------Q.6) find the property and value.

const orienatetion = {
Name: "NavGurukul.org",
compuses: 8,
city: ["Himachal","Bangegore","pune","Delhi"],
}
for (let property in orienatetion){
  console.log(property);
}
for (let value of Object.values(orienatetion)){
  console.log(value);
}

// -----------------------------------Q.7) find the even numbers

let number_ = [1,2,3,4,5,6,7,8,9,10];
let evenNumbers = [];
for (let number of number_){
  if(number%2==0){
    evenNumbers.push(number)
  }
}
console.log("here is the even numbers"+" :"+ evenNumbers);

// ----------------------------Q.8) the sum of even numbes:

let number = 1;
let sums = 0;
do {
  if(number%2==0){
    sums = sums + number 
  }
  number++;
}while(number<500)
console.log("the sum of even numbers"+":"+sums);

// ---------------------------------Q.10) prime numbers:

let count = 0;
let num = 2;

while (count < 100) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime && num % 10 !== 7) {
    console.log(num);
    count++;
  }

  num++;
}
