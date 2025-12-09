// var romanToInt = function(s) {

//     const symbols = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     };

//     let total = 0;

//     console.log("Input:", s);
//     console.log("-----------------------------");

//     for (let i = 0; i < s.length; i++) {

//         let curr = s[i];
//         let next = s[i+1];

//         let currVal = symbols[curr];
//         let nextVal = symbols[next];

//         console.log(`Step ${i}:`);
//         console.log(`  curr = '${curr}' (${currVal})`);
//         console.log(`  next = '${next}' (${nextVal})`);
        
//         if (nextVal !== undefined && currVal < nextVal) {
    //             total -= currVal;
    //             console.log(`  Karena ${currVal} < ${nextVal}, maka total = total - ${currVal}`);
    //         } else {
//             total += currVal;
//             console.log(`  Karena ${currVal} >= ${nextVal}, maka total = total + ${currVal}`);
//         }

//         console.log(`  Total sementara = ${total}`);
//         console.log("-----------------------------");
//     }

//     console.log("HASIL AKHIR:", total);
//     return total;
// };
// romanToInt("MCMXCIV");

var romanToInt = function(s) {
    
    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for(let i = 0; i < s.length; i++){
        let curr = s[i];
        let next = s[i+1];
        console.log(curr)
        console.log(next)
        
        if(symbols[curr] < symbols[next]){
            total -= symbols[curr];
        } else {
            total += symbols[curr];
        }
    }
    
    return total;
};
console.log(romanToInt(""));

var intToRoman = function(number) {
     const Symbols = {"M":1000, "CM":900, "D":500, "CD":400, "C":100, "XC":90, "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4, "I":1};

    let result = "";
    Object.entries(Symbols).forEach(([key, value]) => {
        result += key.repeat(Math.floor(number / value));
        number%=value;
    })
    return result;
};
console.log(intToRoman("1994"))

var countOdds = function(low, high) {
    const range = high-low+1;
    const base = Math.floor(range/2);
    if (range%2===1 && (low % 2===1 || high % 2===1)){
        return base + 1;
    }
    return base;
    
};
//console.log(countOdds())

// const list = [[1,4,5],[1,3,4],[2,6]];
// const numbers3: number[] = [1, 4, 2, 3, 6, 5, 20];
// numbers3.sort((a, b) => a - b);
// console.log(numbers3);
// var mergeKLists = function(list) {
// const numbers3: number[] = [[1,4,5],[1,3,4],[2,6]];
// numbers3.sort((a, b) => a - b);
// console.log(numbers3);
// };
// console.log(mergeKLists)