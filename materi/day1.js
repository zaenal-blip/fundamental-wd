console.log("Hello world");// ini adalah comment
/*
ini
adalah
comment
*/
//================VARIABLE==============
// storage / penampungan data
//var, let, const (var bisa menulis beberapa variable yang sama beberapa kali jadi susah untuk problem solv)
//let tidak bisa untuk menulis variable bebrapa kali, hanya bisa 1 kali 
//
var person = "Budi";
console.log(person);

let person2 = "joko";
console.log(person2);

person2 = "siti";
console.log(person2);

const person3 = "jack";
//person3 = "udin"; tidak bisa diubah nilai variable nya karenya menggunakan const
console.log(person3);


// var person = "test";
// console.log(person);

//================VARIABLE NAMING==============
/*
- must be contain only letters,digit,or symbol $ and_, boleh menggunakan angka tapi gaboleh di depan
- the first character must not digit
- case sensitive
*/

const companyName = "Purwadhika"; // camelcase (ada saat ujian)
const CompanyName = "Purwadhika"; // pascalcase
const company_profile = "Purwadhika"; //snake_case

//================DATA TYPES==============
// primitive data types : string, number, boolean, null & undefined
// non primitive data types : object & array

// string --> "", '', ``
console.log("purwadhika") // shift + alt + ro  bawah
console.log('purwadhika')
console.log(`purwadhika`)

//number --> 1 2 3 4 5 100
console.log(1);
console.log(2);
console.log(100);

//boolean --> true & false
console.log(true);
console.log(false);

//how to run quokka
//ctrl + k lepas + q


// null --> menandakan sebuah value itu masih kosong dan belum terisi
let orang = null;

// undefined --> js tidak tau isinya
let orang2 = undefined;

// cara ngecheck variable data
console.log(typeof true)
console.log(typeof 1)
console.log(typeof orang)
console.log(typeof orang2)
console.log(typeof companyName)