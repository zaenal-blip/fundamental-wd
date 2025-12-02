// EXCERCISE
// 25 odd number, 2 even number
let odd: number = 25;
if(odd % 2 === 0) {
    console.log("Ini adalah bilangan genap");
    } else {
        console.log("Ini adalah bilangan ganjil");
    };

//prime number or not
let number = 19;
let isPrime = true;

if (number <= 1) {
  isPrime = false;
}
for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log(number + " is prime number");
} else {
  console.log(number + " Not prime number");
}

// find the sum of the numbers 1 to N
let N1 : number = 3;
let total: number = 0;
for (let i = 1; i <= N1; i++) total = total + i;
console.log(total);

// find factorial of a number
let N2 = 4;
let factorial = 1;
for (let i = 1; i <= N2; i++) factorial = factorial * i;
console.log(factorial);

// //print the first N fibonacci numbers
let N3 = 15; // jumlah angka yang ingin ditampilkan

let a = 0;
let b = 1;
console.log(a);
console.log(b);
for (let i = 2; i <= N3; i++) {
  let next = a + b;
  console.log(next);

  a = b;
  b = next;
}


// ==================== REVIEW EXCERCISE ====================
/*
Write a code to check whether the number is odd or even
 ○ Example: 25 → odd number, 2 → even number
*/

let angka :number = 2;
if(angka % 2 === 0) {
    console.log("Ini adalah bilangan genap");
    } else {
        console.log("Ini adalah bilangan ganjil");
    };

/* Write a code to check whether the number is prime number or not */
let angka2 = 12;
let isPrime1 = angka2 > 1;
for (let i = 2; i < angka2 && isPrime1; i++) {
  if (angka2 % i === 0) {
    isPrime1 = false;
  }
}
console.log(isPrime1 ? "Prima" : "Bukan prima");
