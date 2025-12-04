// excercise
// Mencari nilai TERKECIL, TERBESAR, dan RATA-RATA di sebuah array
let Number = [12, 5, 23, 18, 4, 45, 32];
let min = Math.min(...Number);
let max = Math.max(...Number);
let average = Number.reduce((a,b ) => a + b, 0) / Number.length;
console.log("Nilai terkecil: " + min);
console.log("Nilai terbesar: " + max);
console.log("Rata-rata: " + average);
// sort function
Number.sort((a, b) => a - b); 
console.log (min = Math.min(...Number));
console.log( max = Math.max(...Number));
console.log(Number.reduce((a,b ) => a + b, 0) / Number.length);

/* Write a function that takes an array of words and returns a string by concatenating the words in the array
 separated by commas and - the last word - by an 'and'
*/

// let fruits =  ["apple", "banana", "cherry", "date"];
// let lastWord = words.pop;
// let result = fruits.join(", ");
// const hasil= result + ` and ${lastWord}`;
// console.log(result)
let fruits = ["apple", "banana", "cherry", "date"];
let result = joinWords(fruits);
function joinWords(words: string[]): string{
    let lastWord = words.pop();
    let result = words.join(", ");
    if (lastWord) {
        result += ` and ${lastWord}`;
    }
    return result;
}
console.log(result);

// Write a function from a given array of numbers and return the second smallest number
function secondSmallest(arr: number[]): number {
    let smallest = Math.min(...arr);
    let secondSmallest = Math.min(...arr.filter(ang => ang !== smallest));
    return secondSmallest;
}
console.log(secondSmallest([5, 3, 1, 7, 4, 6]));
// let angka = [5, 3, 1, 7, 2, 6];
// let Min = Math.min(...angka);
// console.log(Min);

/* Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of 
the same length.*/
