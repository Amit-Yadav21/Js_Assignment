// ============================= Math and Date Object questions :
// -------------------------------------Q.1.a find the square root of a given number
// const int = require('readline-sync');
// const num = int.questionInt('Enter your number :- ')
// let squareRoot = Math.sqrt(num);
// console.log(squareRoot);

// --------------------------------------Q.1.b find the value of PI
let piValue = Math.PI;
// console.log(piValue); // Output: 3.141592653589793

// ------------------------------------------ Q.1.c generate a random number between 1 and 10
let randomNum = Math.floor(Math.random() * 10) + 1;
// console.log(randomNum);

let randomNumber = Math.ceil(Math.random() * 10);
// console.log(randomNumber);

// ----------------------------------------- Q.1.d round a given decimal number to the nearest integer
let decimalNumber = 2.9;
let roundedNumber = Math.round(decimalNumber);
// console.log(roundedNumber); // Output: 4

// ----------------------------------------- Q.1.e find the absolute value of a given number
let number_ = -5;
let absoluteValue_ = Math.abs(number_);
// console.log(absoluteValue_); // Output: 5

let number = -5;
let absoluteValue = number >= 0 ? number : -number;
// console.log(absoluteValue); // Output: 5

// ------------------------------------------------Q.1.f calculate the power of a given base to a given exponent 
let base = 2;
let exponent = 3;
let result = Math.pow(base, exponent);
// console.log(result); // Output: 8

let base_ = 2;
let exponent_ = 3;
let result_ = base_ ** exponent_;
// console.log(result_); // Output: 8

// ----------------------------------------------------------Q.2.a to display the current date and time in ISO format (YYYY-MM-DDTHH:MM:SSZ).
let currentDate = new Date();
let isoString = currentDate.toISOString();
// console.log(isoString);

// -------------------------------------------------- Q.2.b ?

let currentDate_ = new Date();

// Get day of the week
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayOfWeek = daysOfWeek[currentDate_.getDay()];

// Get month
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let month = months[currentDate_.getMonth()];

// Get date
let date = currentDate_.getDate();

// Get year
let year = currentDate_.getFullYear();

// Get time
let hours = currentDate_.getHours();
let minutes = currentDate_.getMinutes();
let timeOfDay = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;

// Construct the message
let message = `Today is ${dayOfWeek}, ${month} ${date}, ${year}, and the time is ${hours}:${minutes.toString().padStart(2, '0')} ${timeOfDay}.`;
// console.log(message);

// ----------------------------------------------------- Q.2.c ?
function getDayOfWeek(date) {
    let options = { weekday: 'long' };
    let dayOfWeek = date.toLocaleString('en-US', options);
    return dayOfWeek;
}

let given_Date = new Date('2023-07-01');
let dayOf_Week = getDayOfWeek(given_Date);
// console.log(dayOf_Week); // Output: Monday

function getDayOfWeek(date) {
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
}

let givenDate = new Date('2021-04-12');
let day_Week = getDayOfWeek(givenDate);
// console.log(day_Week); // Output: Monday

// -------------------------------------------------- Q.2.d ?
function getDaysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}
let given_date = new Date('2023-07-01');
let daysInMonth = getDaysInMonth(given_date);
// console.log(daysInMonth); // Output: 30

// ============================ String questions :
// ------------------------------------------------------Question 1.a 
var str = "amit yadav";
// console.log(str.length);

// ---------------------------------------------Question 1.b 
var str = "amit kumar yadav";
var uppercaseStr = str.toUpperCase();
// console.log(uppercaseStr);

// ----------------------------------------------Question 1.c
var str1 = "amit ";
var str2 = "yadav";
var joinstr = str1.concat(str2);
// console.log(joinstr);

var str1 = "amit ";
var str2 = "kumar";
var concatenatedStr = str1 + str2;
// console.log(concatenatedStr);

var str1 = "yadav ";
var str2 = "kumar";
var Str = `${str1}${str2}`;
// console.log(Str);


// -------------------------------------------------Question 1.d 
var str = "amit yadav";
var firstChar = str[0];
var lastChar = str[str.length - 1];
// console.log(`First character: ${firstChar}\nLast character: ${lastChar}`);

var str = "Hello, world!";
var [firstChar, ...rest] = str;
var lastChar = str[str.length - 1];
// console.log(`First character: ${firstChar}\nLast character: ${lastChar}\nRest of the characters: ${rest.join('')}`);

// -----------------------------------------------Question 1.e
var str = "my name is amit yadav and i am from Utter Pradesh";
var all_Str = str.replace(/a/g, "b");
// console.log(all_Str);

var str = "my name is amit yadav and i am from Utter Pradesh";
var replacedStr = str.split('a').join('b');
// console.log(replacedStr);

var str = "my name is amit yadav";
var Str = str.replaceAll('a', 'b');
// console.log(Str);

// ----------------------------------Question 1.f
const str_ = "my name is amit yadav";
const a = str_.split(" ").join("");
// console.log(a);

// ----------------------------------------Question 1.g 
var str = 'amit yYadav';
var vowels = str.match(/[aeiou]/gi); // [] is colling range and /g for globle and i for small/capital letter 
var consonants = str.match(/[^aeiou\s]/gi).length; // (\s) is use to remove space, ^ is a Caret symble use in negative way
// var consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/g);

// console.log(`Vowels: ${vowels}\nConsonants: ${consonants}`);
// ------------------------------------------
var str = "s yadav"
let vow = 0
let conso = 0
let vowe = ['a', 'e', 'i', 'o', 'u']
for (ch of str.toLowerCase()) {
    if (vowe.includes(ch)) {
        vow++
    }
    else {
        conso++
    }
}
// console.log(`vowels here : ${vow}\nconsonents : ${conso}`);


// ------------------------------------------------- Question 2
// var userInput = require('readline-sync');
// const data = userInput.questionInt('Enter your string : ')
// var reverse_data = data.split('').reverse().join('');

// if (userInput === reverse_data) {
//   console.log("The string is a palindrome.");
// } else {
//   console.log("The string is not a palindrome.");
// }


// ---------------------------------------------- Question 3
const sen = "capitalize the first letter of every word";
let output = sen.split(' ').map(str =>{
    return str[0].toLocaleUpperCase() + str.slice(1)
})
// console.log(output.join(' '));

// ------------------------------------------------- Quwstion 4
var Input = require('readline-sync');
const data = Input.question('Enter your string : ')
var sortedString = data.split('').sort().join('');
// console.log(sortedString);

// ---------------------------------------------------- Question 5
