// ============================= Math and Date Object questions :
// -------------------------------------Q.1.a find the square root of a given number
// const userInput = require('readline-sync');
// const num = userInput.questionInt('Enter your number :- ')
// let squareRoot = Math.sqrt(num);
// console.log(squareRoot);

// --------------------------------------Q.1.b find the value of PI
let piValue = Math.PI;
// console.log(piValue); // Output: 3.141592653589793

// ------------------------------------------ Q.1.c generate a random number between 1 and 10
let randomNum = Math.floor(Math.random() * 10) + 1;
// console.log(randomNum);

let randomNumber = Math.ceil(Math.random() * 10);
// console.log('random number :',randomNumber);

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
let message = `Today is ${dayOfWeek}, ${month} ${date}, ${year}, and the time is ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${timeOfDay}.`;
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

// =============================================== String questions :
// -----------------------------------------Question 1.a 
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
const ans_ = str_.split(" ").join("");
// console.log(ans_);

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
// const data = userInput.question('Enter your string : ')
// var reverse_data = data.split('').reverse().join('');

// if (userInput === reverse_data) {
//   console.log("The string is a palindrome.");
// } else {
//   console.log("The string is not a palindrome.");
// }


// ---------------------------------------------- Question 3
const sen = "capitalize the first letter of every word";
let output = sen.split(' ').map(str => {
    return str[0].toLocaleUpperCase() + str.slice(1)
})
// console.log(output.join(' '));

// ------------------------------------------------- Quwstion 4
// var Input = require('readline-sync');
// const data = Input.question('Enter your string : ')
// var sortedString = data.split('').sort().join('');
// console.log(sortedString);                       // #$%&*+-/,number,@,capital_letter,small_letter

// ---------------------------------------------------- Question 5

var str = "Welcome???@@##$ to#$% kumar%$^$%^& yadav";
// similar to Matcher.replaceAll
const removePunchu = str = str.replace(/[^a-zA-Z ]/g, "");
// console.log(removePunchu);

// ....................................

var punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
// Remove punctuation characters from the string
const ans = str.replace(punctuationRegex, '');
// const ans = str.replace(/[^\w\s]/g, '');
// const ans = str.replace(/[^a-zA-Z0-9 ]/g, '');
// console.log(ans);

// --------------------------------------------------------- Question 6
function two(name, age) {
    console.log(`My name is ${name} and I am ${age} years old.`);
}
// two("Amit Yadav", 24);

// ============================================= Array methods questions ?
// -------------------------------------------- 1.(a) 
function sumArrays(arr_1, arr_2) {
    return arr_1.map((num, index) => num + arr_2[index]);
}
var arr_1 = [1, 2, 3];
var arr_2 = [4, 5, 6];
var sumArray = sumArrays(arr_1, arr_2);
// console.log(sumArray);

// .......................................
const sum = []
for (var i = 0; i < arr_1.length; i++) {
    sum.push(arr_1[i] + arr_2[i]);
}
//  console.log(sum);

// -------------------------------------------- 1.(b)
var myArray = [1, 2, 3, 4, 5];
const arr = myArray.shift();
// console.log("get removed item -",arr);

myArray.shift();
// console.log("After removing - ",myArray);

// ------------------------------------------------ 1.(c)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
// console.log(fruits);

// -------------------------------------------------- 1.(d)
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const remove = data.pop(); // get removed item
// console.log(remove);

data.pop()
// console.log(data);  // after removing get item 

// ------------------------------------------------------  1.(e)
const add = [1, 2, 3, 4, 5, 6, 7, 8, 9];
add.push(10); // get removed item
// console.log(add);

// --------------------------------------------------- 1.(f)
// frist index in splice to add element given by index and second index to remove element given frist index right-side
const months_ = ['Jan', 'March', 'April', 'June', 'july', 'august'];
months_.splice(1, 0, 'Feb');
// console.log(months_); // ["Jan", "Feb", "March", "April", "June"]

months_.splice(4, 1, 'May');
// console.log(months_);   // ["Jan", "Feb", "March", "April", "May"]

months_.splice(4, 2, 'May');
// console.log(months_);   // ["Jan", "Feb", "March", "April", "May"]

// -------------------------------------------------------- 1.(g)
// slice take 2 parameter , 1st start index and second endind point but inclided (end -1) 
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));  // ["camel", "duck", "elephant"]
// console.log(animals.slice(2, 4));   // ["camel", "duck"]
// console.log(animals.slice(1, 5));   // ["bison", "camel", "duck", "elephant"]
// console.log(animals.slice(-2)); // ["duck", "elephant"]
// console.log(animals.slice(2, -1));  // ["camel", "duck"]
// console.log(animals.slice());   // ["ant", "bison", "camel", "duck", "elephant"]

// --------------------------------------------------------- 1.(h)
const array1 = [1, 2, 3];
// console.log(array1.includes(4));    // true

// -----------------------------------------------------------1.(i)
var array = [10, 20, 30, 40, 50];
array.splice(array.indexOf(10), 1);
// console.log(array); // 20,40,50]

// ------------------------------------------------------------1.(j)
var array = [1, 2, 3, 2, 4, 5, 2, 5, 4, 6];
const value = 2;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
        count++;
    }
}
// console.log(`${value} in array ${count} times`);

// ----------------------------------------------------------1.(k)
const sent = 'my name is amit yadav.'
const periods = sent.split(' ')
// console.log(periods);

// -------------------------------------------------------------1.(l)
const strings = ["Hello", "World", "OpenAI", "Chatbot"];
const reverseArray = strings.map(str => str.split('').reverse().join(''));
// console.log(reverseArray);

// =============================================== Destructuring Assignment, Spread and Rest Operator
// -------------------- What will be the output of the following code snippet?
var data1 = [1, 2, 3];
var data2 = [...data1, 4, 5, 6];
// console.log(data2);  // [ 1, 2, 3, 4, 5, 6 ]

const user = { name: 'John', age: 30 };
const { name, age } = user;
// console.log(name); // John

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
// console.log(obj2); // { a: 1, b: 2, c: 3 }

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const [a, b, c] = arr1;
const [d, ...e] = arr2;
const f = [...arr1, ...arr2];
// console.log(a,b,c,d,e,f); // 1 2 3 4 [ 5, 6 ] [ 1, 2, 3, 4, 5, 6 ]

const obj = {
    name_: "John",
    age: 30,
    address: { street: "123 Main St", city: "Anytown", state: "CA" }
};
const { name_, address: { city } } = obj;
// console.log(name_); // John
// console.log(city);  // Anytown

// =============================== Exception Handling in JS
// ----------------------------------- 1)
// function SquareRoot(num) {
//     if (num < 0) {
//         throw new Error("Input must be a positive number");
//     }
//     return Math.sqrt(num);
// }
// try {
//     const input = -4;
//     const result = SquareRoot(input);
//     console.log(result);
// } catch (error) {
//     console.log(error.message);
// }

// ------------------------------------------ 2)
// function divideNumbers(a, b) {
//     if (b === 0) {
//         throw new Error("Division by zero is not allowed");
//     }
//     return a / b;
// }
// try {
//     const dividend = Input.questionInt('Enter your 1st number : ')
//     const divisor = Input.questionInt('Enter your 2nd number : ')
//     const result = divideNumbers(dividend, divisor);
//     console.log(result);
// } catch (error) {
//     console.log(error.message);
// }
