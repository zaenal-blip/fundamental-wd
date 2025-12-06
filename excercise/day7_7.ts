// Excercise algorithms
// Create a function to convert Excel sheet column title to its corresponding column number
// cara 1
function excelColumnToNumber(columnTitle: string): number {
    let columnNumber = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        const char = columnTitle[i];
        const charCode = char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        columnNumber = columnNumber * 26 + charCode;
    }
    return columnNumber;
}
console.log(excelColumnToNumber("Ab")); 

// cara 2
function excelColumnToNumber2(column: string): number {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let total = 0;

    for (const char of column) {
        const value = letters.indexOf(char) + 1;
        total = total * 26 + value;
    }

    return total;
}

console.log(excelColumnToNumber2("C")); 


// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one
function singleNumber(nums: number[]): number {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i += 2 ) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }

    return -1;
}

console.log(singleNumber([1,2,1,2,4,]));

// Given two strings s and t, return true if t is an anagram of s, and false otherwise




// excercise data structure
const findDuplicate = ( arr: number[]) => {
    const duplicates : number [] = []

    for (let i = 0; i< arr.length; i++){
        const currentNumber = arr[i];

        let count: number=0;
        for (let j = 0; j < arr.length; j++){
            if (arr [j] === currentNumber) {
                count ++;
            }
        }
        if (count > 1 && !duplicates.includes(currentNumber)) {
            duplicates.push(currentNumber);
        }
    }
    return duplicates;

};

console.log(findDuplicate([2,2,3,4,,2,2]))