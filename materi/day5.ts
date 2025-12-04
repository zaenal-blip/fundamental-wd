// excercise
// Mencari nilai TERKECIL, TERBESAR, dan RATA-RATA di sebuah array
let Number = [12, 5, 23, 18, 4, 45, 32];
let min = Math.min(...Number);
let max = Math.max(...Number);
let average = Number.reduce((acc, curr) => acc + curr, 0) / Number.length;
console.log("Nilai terkecil: " + min);
console.log("Nilai terbesar: " + max);
console.log("Rata-rata: " + average);

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
    let secondSmallest = Math.min(...arr.filter(num => num !== smallest));
    return secondSmallest;
}
console.log(secondSmallest([5, 3, 1, 7, 2, 6]));
// let angka = [5, 3, 1, 7, 2, 6];
// let Min = Math.min(...angka);
// console.log(Min);

// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] === target - nums[i]) {
//                 return [i, j];
//             }
//         }
//     }
//     // Return an empty array if no solution is found
//     return [];
// };