//======================= ARRAY AND FUNCTION ================
// ARRAY
const arr = [];//cara 1
const arr1 = new Array();// cara 2

const arrayOfString: string[] =["apple", "banana", "cherry"];
const arrayOfNumber: number[] = [1, 2, 3, 4, 5];
const arrayOfBoolean: boolean[] = [true, false, true, false];
const arrayOfMixed: (string | number | boolean)[] = ["apple", 1, true, "banana", 2, false];
// ARRAY OF OBJECT DITANDAI DENGAN KURUNG KURAWANG
interface Student{
    name: string;
    age: number;
    hobby?: string;
}// bisa menggunakan interface
type product = {
    name: string;
    price: number;
    quantity: number;
};// bisa menggunakan type, tergantung tempat / lead
// array of objects
const arrayOfObject: Student[]= [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 35 },
];
console.log(arrayOfObject.length);
console.log(arrayOfObject[1]);// jika ingin melihat nama nya saja maka di belakang index dikasih (.)


//======================= FOR OF ================
const fruits: string [] = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);
};



//======================= FUNCTION ================
// fungsi adalah blok of code yang bisa digunakan beberapa kali 
// function declaration
/*
    function nama Function(parameter) {
            logic
    }
 */
function square () {// function nama(parameter)
    return 5 * 5;// logic
}
const result = square();// untuk menjalankan function
console.log(square());// atau bisa juga seperti ini untuk exsecute function
console.log(result);// untuk menampilkan hasil dari function

// function expression
/*
    const namaFunction = function (parameter) {
            logic
    }
 */

    const square2 = function(){
        return 5 * 5;
    }
    console.log(square2());


//======================= FUNCTION SCOPE ================
// variable yang di define di dalam function tidak bisa diakses di luar function
function greeting(){
    const  hello : string = "hello";
    console.log(hello);
    return hello;
}
greeting();// untuk menjalankan function
// console.log(hello);// akan error karena hello tidak bisa diakses di luar function

//======================= PARAMETER & ARGUMENT ================
// parameter -> variable yang mewakili value dari argumen yang dimasukkan
// argument -> value yang dikirimkan ke function / value yang dimasukkan saat pemanggilan function

//          Parameter👇
function greeting2(name: string, company: string){
    const hello: string= "hello ";
    return hello + name + "," + company;
}
//                Argument 👇
console.log(greeting2("Budi", "Toyota"));
console.log(greeting2("Ari", "Toyota"));
console.log(greeting2("Oky", "Toyota"));

//======================= DEFAULT PARAMETER ================
function multiplay(a: number, b: number = 3){ //
    console.log(a);
    console.log(b);

    return a * b;
}
console.log(multiplay(2, 4));
console.log(multiplay(2,));

//======================= REST PARAMETER ================
// adalah parameter yang  mewakili sisa argument ke dalam satu parameter
function myFunc(a: number, b: number, c: number, ...d: number[]){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d); // mewakili sisa
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//======================= NESTED FUNCTION ================
// fungsi yang berada di dalam fungsi
// inner function -> bisa mengakses parameter dari outer function
// outer function -> tidak bisa mengakses function dari inner function

// outer function
function getMessage(firstName: string){
    // inner function
    function sayHello(){
        return "hello " + firstName + ", ";
    }
    // inner function
    function welcome(){
        return"welcome to academy comunitas toyota indonesia";
    }
    return sayHello() + welcome();
}

console.log(getMessage("Udin"));

//======================= RECURSIVE ================
// fungsi yang meamnggil dirinya sendiri
function countdown(number: number){
    console.log(number);

    let nexNumber = number - 1;
    if (nexNumber > 0){
        countdown(nexNumber);
    }
}
countdown(10)

//======================= ARROW FUNCTION ================
// shortcut untuk membuat function
// contoh funct expression
const squareArrow = function (angka: number){
    return angka * angka
};
console.log(squareArrow(5));
// contoh arrow funct
// Syntaks : () => {}
const squareArrow2 = (a: number): number => a * a;
console.log(squareArrow2(10));

//======================= ARRAY BUILT IN METHODE ================
// join -> menggabungkan value yang ada di dalam array kedalam bentuk string
const words: string[] = ["Hello", "World", "test"];
console.log(words.join(" ")); // didalam string bisa diisi apa saja, tapi defualt nya koma

// POP -> menghilangkan value paling akhir dalam array
const words2: string[] = ["Hello", "World", "test"];
console.log(words2);
words2.pop();
console.log(words2);

// SHIFT -> menghilangkan value paling depan dalam array
const words3: string[] = ["Hello", "World", "test"];
console.log(words3);
words3.shift();
console.log(words3);

// PUSH -> menambahkan value baru di akhir array
const words4: string[] = ["Hello", "World", "test"];
console.log(words4);
words4.push("New Value");
console.log(words4);

// UNSHIFT -> menambahkan value baru di awal array
const words5: string[] = ["Hello", "World", "test"];
console.log(words5);
words5.unshift("New Value");
console.log(words5);