//import{hello}from "../excercise/test";

import { Hello } from "./test";

// PROMISES
// bisa then bisa juga catch, then jika berhasil, catch jika gagal, dan finally itu pasti dijalankan terahir setelah then atau catch
function fetchData(){
    return new Promise((resolve,reject)=>{
        const succes: boolean = true;

        if (succes){
            resolve("budi")
        }else{
            reject("Something went wrong !!")
        }
    });
}

fetchData()
.then((Response)=>{
    console.log(Response);
    return Response
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promise selesai !");
});



// Excercise 
// fetch bawaan js untuk fetch data
function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")// ini adalah sebuah promisse, mengambil data 
    .then((Response)=>{
        return Response.json();
    })
    .then((user)=>{
        console.log(user)
    })
    .catch((error)=>{
        console.log(error)
    });
}
fetchUsers()
// cara simple
async function getUsers(){
    try {
        const Response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await Response.json();
        console.log(users);
    } catch (error) {
        console.log(error)
    }
}
getUsers();

// ==================== JSON ====================
// JSON-> javascript object notation 
const user ={
    name:"budi",
    age:20,
};

// mengubah objeck  menjadi JSON
const userJSON = JSON.stringify(user);
console.log(userJSON);

// mengubah json menjadi object
const parseJSON = JSON.parse(userJSON);
console.log(parseJSON);

console.log(Hello);
console.log()
// untuk menguraikan step by step 
// 5 type data, 2 type data(object,array)
// var adalah untuk declare global variable
// keuntungan menggunakan typescript 1.type safety, 2.
// perbedaan while dan do while = while check dulu kondisinya jika do while menjalankan kondisinya dulu
// type of null hasilnya object
// apa itu hoisting yaitu langsung otomatis dikeatasin function declaration, yang termasuk function declaration dan var
// SPLICE
// NAN (not a number), mengubah string menjadi number apabila di dalam string terdapat selain angka
// This => referensi to current object, didalam object bisa di referensi
// Super untuk menjalankan/eksekusi constructor dalam class
// ...... dalam OOP => improve data security
// POP,PUSH, SORT
// Queue menggunakan konsep apa
// ON
// Built in methode MAP