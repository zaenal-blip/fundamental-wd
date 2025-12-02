//======================= IF STATEMENT================
// kondisi yang lebih kompleks
// if(condition) {
//     code block
// }

const age : number = 17;
if(age >= 17) {
    console.log("Anda bisa membuat KTP");
};

//======================= ELSE STATEMENT================
const age2 : number = 18;
if(age2 >= 17) {
    console.log("Anda bisa membuat KTP");
} else {
    console.log("Anda belum bisa membuat KTP");
};

//======================= ELSE IF STATEMENT================

const grade : string ="B";
if(grade === "A") {
    console.log("Selamat Anda mendapatkan nilai A");
} else if(grade === "B") {
    console.log("Selamat Anda mendapatkan nilai B");
} else if(grade === "C") {
    console.log("Selamat Anda mendapatkan nilai C");
} else if(grade === "D") {
    console.log("Selamat Anda mendapatkan nilai D");
} else if(grade === "E") {
    console.log("Selamat Anda mendapatkan nilai E");
} else {
    console.log("Maaf, Anda tidak mendapatkan nilai yang valid");
};

//======================= SWITCH CASE================
// menentukan 1 kondisi / hanya bisa digunakan untuk 1 value doang
// fungsi break yaitu semisal udah ketemu casenya ya udah ngga lanjut ke case berikutnya
// fungsi default yaitu semisal udah ketemu casenya ya udah ngga lanjut ke case berikutnya
// switch(expression) {
//     case value1:
//         code block
//         break;
//     case value2:
//         code block
//         break;
//     default:
//         code block
//         break;
// };
const day: string ="minggu";

switch(day) {
    case "senin":
        console.log("Hari ini adalah hari Senin");
        break;
    case "selasa":
        console.log("Hari ini adalah hari Selasa");
        break;
    case "rabu":
        console.log("Hari ini adalah hari Rabu");
        break;
    case "kamis":
        console.log("Hari ini adalah hari Kamis");
        break;
    case "jumat":
        console.log("Hari ini adalah hari Jumat");
        break;
    case "sabtu":
        console.log("Hari ini adalah hari Sabtu");
        break;
    case "minggu":
        console.log("Hari ini adalah hari Minggu");
        break;
    default:
        console.log("Maaf, hari yang Anda masukkan tidak valid");
        break;
};

//======================= LOGICAL AND / OR / NOT================PERATOR================
// && -> AND 
// || -> OR
// ! -> NOT

// and -> harus kedua kondisi bernilai true agar menghasilkan nilai true
const umur: number = 17;
const punyaSIM: boolean = true;
if(umur >= 17 && punyaSIM) {
    console.log("Anda sudah bisa menggunakan kendaraan");
} else {
    console.log("Anda belum bisa menggunakan kendaraan");
};  
// or -> hanya satu kondisi bernilai true agar menghasilkan nilai true
const car: string ="toyota";
if(car === "mercy" || car === "bmw")  {
    console.log("mobil eropa");
} else {
    console.log("mobil jepang");
};
// not -> negasi/ membalikkan nilai boolean
const isSunny: boolean = true;
const isRaining: boolean = !isSunny;
console.log(isSunny); // true
console.log(isRaining); // false

if (!isSunny) {
    console.log("Hari ini hujan");
} else {
    console.log("Hari ini cerah");
};  

//======================= TERNARY OPERATOR ================
//short cut untuk if else consition
// condition ? true : false
// baiknya untuk case if else saja tidak disarankan untuk else if
const str: string = "javascript";

//cara panjang
if(str==="javascript") {
    console.log ("JavaScript");
} else {
    console.log ("Not JavaScript");
};

// cara pendek
console.log(str==="javascript" ? "JavaScript" : "Not JavaScript");

//======================= LOOP STATEMENT ================
//rangkaian instruksi yang dilakukan beberapa kali hingga kondisinya tidak terpenuhi
// type loop : for loop, while loop, do while loop

// FOR LOOP -> mempunyai 3 statement
// statement1 -> mengisialisasikan variable dari looping itu sendiri
// statement2 -> mendefine kondisi dari looping tersebut
// statement3 -> kode yang di eksekusi di akhir setiap iterasi

// looping dari dari kecil ke besar
for(let i = 0; i < 10; i++) {
    console.log(i);
};

//looping dari beras ke kecil
for(let i = 10; i > 0; i--) {
    console.log(i);
};  

//WHILE LOOP -> mempunyai 2 statement
// melakukan pengecekan di awal setiap iterasi
// statement1 -> kode yang di eksekusi di awal setiap iterasi
// statement2 -> mendefine kondisi dari looping tersebut
let i: number = 1;

while(i < 10) {
    console.log("Hello world");
    i++;
};      

// do whie loop -> mempunyai 2 statement
// melakukan pengecekan di akhir setiap iterasi
// melakukan do dulu baru melakukan pengecekan
let count: number = 1;
do {
    console.log(count);
    count++;
} while(count <= 10);

// BREAK
// untuk menghentikan looping / untuk menghentikan switch case

let sum: number = 0;

while (true) { 
    console.log(sum);

    if(sum >= 5)break;
    sum++;
};

// CONTINUE
// untuk melanjutkan looping tanpa menghentikan / melakukan skip
for (let i = 0; i < 5; i++) {
    if (i === 2)  continue;
    
    console.log(i);
};

//=======================   EXCERCISE =================
// cetak angka genap dari angka 1 sampai 20 menggunakan looping
for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) console.log(i);
};
// cetak angka ganjil dari angka 1 sampai 20 menggunakan looping
for(let i = 1; i <= 20; i++) {
    if(i % 2 === 1) console.log(i);
};


//=======================   ARRAY AND FUNCTION
// bakal selalu ke pakai di BE ataupun FE =================