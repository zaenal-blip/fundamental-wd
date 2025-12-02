// Create a function that can create a triangle pattern according to the height we provide like the following
// let count: number = 1;
// let rows: number = 4;
// for(let i = 1; i <= rows; i++){
//     let line: string = "";

import test = require("node:test");

//     for(let j = 1; j <= count; j++){
//         line += count + " ";
//         count++
//     }
//     console.log(line);
// };
let count = 1;  
let rows = 5;   

for (let i = 1; i <= rows; i++) { // menentukan barisnya, jika 5 maka barisnya akan 5 / vertikal
  let line = "";
  for (let j = 1; j <= i; j++) {
    let formatted = String(count).padStart(2, "0"); // menentukan angka disamping / horizontal
    line += formatted + " ";
    count++;
  }

  console.log(line);
};

// excercise 2
for(let i = 1; i <= 30 ; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        const test = ("FizzBuzz");
    } else if (i % 3 === 0) {
        const test1 = ("Fizz");
    } else if (i % 5 === 0) {
        const test2 = ("Buzz");
    } else {
        console.log(i);
    }
}

for (let i = 1; i <= 20; i++) {
  let output =
    i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" :
    i % 3 === 0 ? "Fizz" :
    i % 5 === 0 ? "Buzz" :
    i;
  console.log(output);
}

//Create a function to calculate Body Mass Index (BMI)
let weight: number = 62; // KG
let height: number = 168; // Meters

let bmi = weight / (height / 100)**2;
console.log(bmi);
if (bmi < 18.5) {
    console.log("Less weight");
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("ideal weight");
} else if (bmi >= 25 && bmi < 29.9) {
    console.log("Overweight");
}  else if (bmi >= 30 && bmi < 39.9) {
    console.log("very Overweight");
}else {
    console.log("Obesity");
};

//Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
function removeOdd(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0); }
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = removeOdd(numbers);
console.log(evenNumbers);

//Write a function to split a string and convert it into an array 
function splitString(str: string): string[] {
    return str.split(" ");}
let message = "Hello world";
let words = splitString(message);
console.log(words);
