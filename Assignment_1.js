
// -------------------------------- Q. 1) Change the value of myLe

let myLet;
myLet = 10
console.log(myLet);
myLet = 20;
console.log(myLet);

// ---------------------------------- Q. 2) constant variable.

const myConst = 3.14;
console.log(myConst);
// myConst = 2.71; 
// console.log(myConst) //TypeError: Assignment to constant variable.

// ----------------------------------Q. 3) find the area of circle.

const radius = 5;
const area = Math.PI * radius ** 2;
console.log("The area of the circle is:", area);


// -------------------------------Q. 4)  converts a temperature.

let readlineSync = require("readline-sync")
const celsius = readlineSync.question("please inter your temperature Numbers:")
const f = (celsius * 9/5) + 32;
console.log("The temperature in Fahrenheit is:", f);

// -----------------------------------Q. 5) pre-increment and post-increment.

let A = 5;
console.log("Initial value of a:", A); //5
console.log("Value after pre-increment:", ++A); //6
console.log("Value after post-increment:", A++); //6
console.log("Value after pre-decrement:", --A); //6
console.log("Value after post-decrement:", A--); //6
console.log("Final value of a:", A); //5

//--------------------------------Q. 6) Operators.

const a = 15;
const b = 20;
// Comparison Operators
console.log("Comparison Operators:");
console.log(a === b);     //F
console.log(a !== b);     //T
console.log(a === b);    //F
console.log(a !== b);   //T
console.log(a > b);      //F
console.log(a >= b);     //F
console.log(a < b);       //T
console.log(a <= b);     //T

// Logical Operators
console.log("Logical Operators:");
console.log(a > 5 && b > 10);     //T
console.log(a > 10 || b > 25);     //T
console.log(!a);                //F

//----------------------------------Q. 7) find the largestNumbers.

const num1 = 89;
const num2 =79
const largestNumber = num1 > num2 ? num1:num2;
console.log(largestNumber)

// --------------------------------Q. 8) all data type and typeof operators.

const age = 25;
console.log(typeof(age));    //number

const Name = "John Doe";
console.log(typeof (Name));   //string

const Student = true;
console.log(typeof (Student));   //boolean

const bigNumber = BigInt(999991008888);
console.log(typeof (bigNumber));    //bigint

let variable;
console.log(typeof (variable));    //undefined

const nullValue = null;
console.log(typeof (nullValue));    //object

const symbol = Symbol("unique");
console.log(typeof (symbol));     //symbol

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
console.log(typeof (person));   // Output: object

// ---------------------------------Q. 9) type conversion.

// Addition with implicit type conversion
let num_1 = 10;
let num_2 = "5";
let sum_ = num_1 + num_2;
console.log(sum_); 

// Explicitly converting string to number
let str = "50";
let num = Number(str); 
console.log(num); // Output: 50

// -----------------------------Q. 10) type conversion.

let number1 = 10;
let number2 = "5";
// Convert num1 to a string
let num1AsString = String(number1);
console.log(num1AsString);
// Convert num2 to a number
let num2AsNumber = Number(number2);
console.log(num2AsNumber);

//add string & numbers
let sum = num1AsString+num2AsNumber;
let product = num1 + num2;
console.log(num1AsString,num2AsNumber,sum,product);
