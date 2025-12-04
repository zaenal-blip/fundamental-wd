// ========== CARA MENULISKAN OBJECT ==========
// di object bisa dimasukin all type data bahkan bisa object didalam object
const object1 = {}; // cara 1 sering digunakan
const object2 = new Object(); // cara 2 jarang digunakan

interface user{ // kontrak, jadi ngga sesuai kontrak maka akan protes, untuk meminimalisir typo 
    name:string;
    email:string;
    password:string;
    hobby:string[];
    price:number;
    adress:Adress;
    greet:() => void;
    makan:() => void;
}
interface Adress{
    street:string;
    city:string;
    postalcode:string;
}

const user:user = {
    name:"Arifin",
    email:"arifin@gmail.com",
    password:"toyota123",
    hobby:["mancing","badminton","ngoding"],
    price: 100000,
    adress:{ // object didalam object
        street: "jl.setiabudi",
        city:"jakarta selatan",
        postalcode:"123123"
    },
// function yang ada didalam opbjek dinamakan methode, bukan function lagi
    greet(){
        console.log("hello");
    },
    makan(){
        console.log("makan");
    },
}; // untuk akses objek bisa menggunakan titik atau kurung siku

console.log (user.email);// cara 1
console.log (user.name);// cara 1
console.log (user.password);// cara 1
console.log (user.hobby);// cara 1
console.log (user.hobby[1]);// cara 1
console.log (user.price);// cara 1
console.log (user.adress.city);// cara 1
console.log (user.adress["city"]);// hybrid

console.log(user["email"]);// cara 2
console.log(user["name"]);// cara 2
console.log(user["password"]);// cara 2
user.greet()// ini ngga bisa di console log, karena functionnya tidak me return sesuatu, kalau functionnya ada return maka bisa console.log

// ========== ADD PROPERTY ==========
const Person: any = {
    name:"arifin",
    age:20,
};
console.log(Person);
Person.hobby="mancing"; // add property didalam object menggunakan titik
console.log(Person)
Person["adress"]="jakarta"; // add property didalam object menggunakan kurung siku
console.log(Person)

// ========== DELETE PROPERTY ==========
delete Person.name;// delete data menggunakan titik
console.log(Person);
delete Person["age"];// delete data menggunakan kurung siku
console.log(Person);

// ========== IMMUTABLE & MUTABLE ==========
/*  
    immutable: merujuk pada tipe data yang tidak bisa diubah setelah dibuat( primitive data type: string,number....)
    mutable : merujuk pada tipe data yang bisa diubah setelah dibuat (non primitive data type : array, object)
*/

//immutable
const Number: number= 4;
let Number2: number= Number;
Number2 = 10;

console.log (Number);
console.log (Number2);


//mutable
const orang1 = {nama:"jack"}
// const orang2 = orang1; // langsung diubah tanpa di copy sehingga data aslinya ikut keubah
const orang2 = {...orang1};// shallow coppy / di copy dulu baru diubah copyannya
orang2.nama = "udin";

console.log(orang1);
console.log(orang2);

// ========== OPTIONAL CHAINING ==========
const user2: any = {};

console.log(user2.adress);
//console.log(user2.adress.street);// aplikasi crash pasti eror atau mati
console.log(user2.adress?.street);// cara mengatasinya ditambah tanda tanya

// ========== FOR IN ==========
// untuk melooping object

const person2: any={
    name:"arifin",
    age: 20,
};

for (const key in person2){ // nama (key) bisa diubah sesuka hati
    console.log(key);
    console.log(person2[key]) // harus pakai kurung siku karena tidak ada item (key) didalam object
}

// ========== DESTRUCTURING ASSIGNMENT ==========
// mengeluarkan property dalam object / array menjadi variable

const animal:any={
    name:"joe",
    age:30
};

console.log(animal.name);
console.log(animal.age);

const {name,age} = animal;// mengeluarkan property dalam object terlebih dahulu

console.log (name)
console.log (age)

// versi array
const array =[10, 20];

console.log(array[0]);
console.log(array[1]);

const[a, b] = array;

console.log(a);
console.log(b);

// ========== SPREAD OPERATOR ==========
// digunakan untuk copy isi object / menggsbungkan object

const objectOne = {name:"joko", password:"admin123"};
const objectTwo = {emial:"joko@gmail.com", password:"joko123"};

const result = {...objectOne, ...objectTwo};// ketika ada property yang sama maka yang menang yang belakang, contohnya properti password, otomatis yg ke console yang objectTwo

console.log(result);

// ========== THIS KEYWORD ==========
// mengakses property lain di dalam sebuah object
const person3 = {
    firstName:"jack",
    lastName:"blake",
    greet(){
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
}
person3.greet()

// ========== CLASS ==========
// template atau cetakan untuk membuat object

// CLASS DECLARATION -> sering dipakai
class Person4 {
    greeting(){
        console.log("Hello world");
    }
}
// CLASS EXPRESSION
const Person5 = class{
    greeting(){
        console.log("Hello world");
    }
}

// cara menggunakan templatenya/ classnya
const human = new Person4()
const human2 = new Person4()

// ========== CONSTRUCTION ==========
// methode bawaan dari class yang akan dijalankan pertama kali saat membuat
// object baru menggunakan class
{
    brand: "...";
    type: "...";
}

class Vehicle{
    brand : string;
    type : string;
    #databaseVehicle: string[];
    #chassisNumber: string //privat

    constructor(brand: string, type: string, chassisNumber){
        this.brand=brand;
        this.type=type;
        this.#chassisNumber=chassisNumber;
        this.#databaseVehicle= ["123-123-123"];
    }
    start() {
        return"engine started!!"
    }

    service(){
        const isBlocked = this.#databaseVehicle.includes(this.#chassisNumber);

        if (isBlocked){
            return "Tidak bisa service, mobil ini hasil curian"
        }
        return "Service selesai !"
    }
}

const kendaraan = new Vehicle("toyota", "avanza", "123-123-123");
console.log(kendaraan);
console.log(kendaraan.start());
console.log(kendaraan.service())

const kendaraan2 = new Vehicle("honda", "mobilio", "321-321-321");
console.log(kendaraan2);
console.log(kendaraan2.start());
console.log(kendaraan2.service())