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

// SPLICE -> menghapus dan menambahkan value di dalam array
// syntaks -> splice(startIndex, berapayangmaudidelete, item)
const months: string[]= ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

// menambahkan data
months.splice(6, 0, "juli")
console.log(months)

// menghapus data
months.splice(0, 1)
console.log(months)

// edit data
months.splice(5, 1, "July")
console.log(months)

// untuk meng copy data array dan tidak ke ubah
const bulan: string[] = [...months];
console.log(bulan);
bulan.splice(5, 1)
console.log(bulan);

// SLICE -> mereturn array baru berdasarkan start index dan end indexs
// syntaks -> slice(startIndex, endIndex);
const fruits2: string [] = ["apple", "banana", "cherry","orange"];
console.log(fruits2.slice(1, 3)); // ["banana", "cherry"]

// SORT -> Mengurutkan isi array berupa string atau number
// sort((a, b) => b - a) untuk string
// syntaks -> sort() atau sort((a, b) => a - b) untuk number
const fruits3: string [] = ["apple", "banana", "cherry","orange"];
fruits3.sort(); // dari awal ke akhir
console.log(fruits3);
console.log(fruits3.reverse()); // dari akhir ke awal

const numbers3: number[] = [1, 4, 2, 3, 6, 5, 20];
numbers3.sort((a, b) => a - b); // dari kecil ke besar, semisal mau dari besar ke kecil (b-a)
console.log(numbers3);

// INCLUDES -> mengecek value pada array ada atau tidak, hasil return nya adalah boolean
const fruits4: string [] = ["apple", "banana", "cherry","orange"];
console.log(fruits4.includes("banana"));// jika ada
console.log(fruits4.includes("nanas"));// jika tidak ada\

// MAP -> melakkukan looping pada array dan akan mereturn array baru
const points: number[]= [1,2,3,4,5,6,7,8,9,10];
const result3 = points.map((point) =>point * 2);
console.log(result3);

const students2 = [
    {id:1, name:"oky"},
    {id:2, name:"ari"},
    {id:3, name:"dani"},
];
const result4 = students2.map((student, index) => {
    return student.id;
});// cara panjang / menggunakan kurung kurawa
console.log(result4);


const result5 = students2.map((student) => student.id);// cara pendek / tidak menggunakan kurung kurawa
console.log(result5);

// FOREACH -> melakukan looping pada array dan tidak mereturn array baru
const fruits5: string [] = ["apple", "banana", "cherry","orange"];
fruits5.forEach((fruit, index) => {
    console.log(fruit);
    console.log(index)
});

// FILTER -> melakukan filtering / looping pada array dan mereturn array baru berdasarkan kondiri pada return function
const numbers4: number[] = [1,2,3,4,5,6,7,8,9,10];
const result6 = numbers4.filter((number) => number > 5);
console.log(result6);

// FIND -> mencari value yang ditemukan pertama kali pada array
const ages: number[] = [18, 25, 30, 35, 40];
const result7 = ages.find((age) => age === 25);
console.log(result7);

const students3 = [
    {id:1, name:"oky"},
    {id:2, name:"ari"},
    {id:3, name:"dani"},
];
const result8 = students3.find((student) => student.id === 2);
console.log(result8);

// FINDINDEX -> mirip kaya find tapi yang dihasilkan index nya 

const students4 = [
    {id:10, name:"oky"},
    {id:100, name:"ari"},
    {id:400, name:"dani"},
];
const result9 = students4.findIndex((student) => student.id === 100);
console.log(result9);

// REDUCE -> biasa digunakan untuk melakukan operasi aritmatika pada setiap isi array
const numbers5: number[] = [1,2,3,4,5,6,7,8,9,10];
const result10 = numbers5.reduce((a, b) => a + b, 0);
console.log(result10);