export function Hello(){
    return"hello!";
}

function getDouble(numb: any): void {
  console.log(2 * 2);
}

getDouble(4);

const fruits: string[] = ["Pisang", "Jeruk", "Jambu", "Semangka"];
fruits.splice(0, 2, "Lemon", "Kiwi");
fruits.shift();
console.log(fruits);

// const sentence: string = "Learn Javascript at Purwadhika"; // String
// sentence.replace('a', 'o'); // Mengembalikan string baru, TIDAK mengubah sentence
// sentence.split(' ');       // Mengembalikan array string, TIDAK mengubah sentence
// sentence.reverse();        // Method .reverse() TIDAK tersedia pada tipe String.
// console.log(sentence);     // Mencetak nilai sentence yang tidak diubah

// getDouble(4);
// const getDouble = function(numb:any){
//     console.log(2*2);
// };

function printMessage (Message:string, callback:any):void {
    callback(Message);
}
printMessage("hello","world")