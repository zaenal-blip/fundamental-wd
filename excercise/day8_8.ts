// EXCERCISE 1 
const array1 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" }
];
const array2 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" }
];
function mergeStudents(arr1, arr2) {
    const combined = [...arr1, ...arr2]; // menggabungkan dua array
    const result = [];
    const seen = new Set(); // untuk menyimpan email yang sudah masuk

    for (const student of combined) {
        if (!seen.has(student.email)) {
            seen.add(student.email);
            result.push(student);
        }
    }

    return result;
}

console.log(mergeStudents(array1, array2));






/*Create a function that can accept input as an array of objects and switch all values into property and property 
into value*/
function switchKeyValue(arr) {
    return arr.map (obj => { // looping
        const swapped = {};
        for (let key in obj) { // looping setiap property
            const value = obj[key];
            swapped[value] = key; 
        }
        return swapped;
    });
}
console.log(switchKeyValue([{ name: "David", age: 20 }]))


// let N3 = 5 // jumlah angka yang ingin ditampilkan

// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);
// for (let i = 2; i <= N3; i++) {
    //   let next = a + b;
    //   console.log(next);
    
    //   a = b;
    //   b = next;
    // }



    
    //Create a function to find a factorial number using recursion
function factorial(n){
    if(n<0) return "Eror"
    if(n===0 || n===1) return 1;
    return n*factorial(n-1)
}
console.log(factorial(5))