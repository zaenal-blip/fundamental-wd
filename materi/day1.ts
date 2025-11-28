// versi js
const message = "Hello";

// versi TS
const message2 : number = 12345;
const message3 : string = "Hello"

//=========== STRING BUILT IN METHODE ==========
// fungsi yang udah dibuatin JS kita tinggal pakai

const name: string = "BuBdi world";
const name2: string = "Ucok";
console.log(name.toLocaleUpperCase());
console.log(name.toLocaleLowerCase());
console.log(name.replace("B", "P"));
console.log(name.replaceAll("B", "P"));
console.log(name.split(" "));
console.log(name.split(""));
console.log(name.concat(name2));// jarang dipakai 
console.log(name+ " " + name2);
console.log(name.slice(6)); // untuk memotong mulai dari urutan ke 1
console.log(name.slice(1 ,5)); // untuk memotong mulai dari urutan ke 1
console.log(name.slice(6 ,11)); // untuk memotong mulai dari urutan ke 1


//=========== TEMPPLATE LITERALS / TEMPLATE STRING (``)==========
const welcome: string= "Hello"; 
const nama: string= "Budi"; 

console.log(welcome + "" + nama);
console.log(`${welcome} ${nama}`);

//=========== NUMBER BUILT IN METHODE ==========
const angka: string= "4000";

console.log(angka);
console.log(Number(angka));
console.log(parseInt(angka));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//=========== STRING CONVERSION ==========
const angka2: string= '4000';

console.log(String(angka2));
console.log(angka2.toString())

//=========== BOOLEAN CONVERSION ==========
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(""));
console.log(Boolean(" "));// kalau ada isinya apapun itu maka jadi true, tapi jika kkosing ("") maka false

//=========== DATE ==========
const now: Date= new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()+ 1);// untuk bulan(januari) mulai dari 0 jadinya dikasih + 1
console.log(now.getDate());

// bisa diubah
now.setDate(10);
now.setMonth(2);
console.log(now);

//=========== BASIC OPERATOR ==========
/*
+ --> Pertambahan
- --> Pengurangan
* --> Perkalian
/ --> Pembagian
% --> Modulo (sisa bagi)
** --> Pangkat
*/

console.log(1+1);
console.log(12-1);
console.log(12/2);
console.log(12*2);
console.log(9%2);
console.log(3 ** 2);

//=========== MODIFY IN PLACE ==========
let n: number = 4;

n += 2;

console.log(n);

//=========== INCREMENT & DECREMENT ==========
let counter: number = 3;

counter++;
counter--;

console.log (counter);

//=========== POSTFIX & PREFIX ==========
//POSTFIX -> ditampilkan dulu baru ditambahkan
//PREFIX -> ditambahkan dulu baru ditampilkan

let counter2: number = 2;

//console.log(counter2++); //postfix
console.log(++counter2); //prefix

//=========== COMPARATION OPERATOR ==========
/* 
==
===
<
>
<=
>=
*/

// console.log(2 == "2");// pengecekan di valuenya saja(sebaiknya jangan menggunakan ini)
// console.log(2 === "2");// pengecekan di value & type data
console.log(2 < 5);
console.log(2 > 5);
console.log(2 <= 5);
console.log(2 >= 5);

//=========== MATH ==========
//Math ceil -> membulatkan angka ke atas, tidak peduli komanya diatas 5 / dibawah 5
console.log(Math.ceil(4.2));

//math floor -> membulatkan angka ke bawah ,tidak peduli komanya berapa
console.log(Math.floor(4.5));

//math round -> membulatkan angka ke bilangan bulat terdekat
console.log(Math.round(4.7));
console.log(Math.round(4.2));

//math max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(10, 77, 81, 2, 56));

//math min -> mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(10, 77, 81, 2, 56));

//math absolute -> menghilangkan tanda negative
console.log(Math.abs(-200));

//math random -> menghasilkan angka acak antara 0-1
console.log(Math.random());

//math random dari angka 1 - 100
console.log(Math.floor(Math.random() * 100) + 1);


