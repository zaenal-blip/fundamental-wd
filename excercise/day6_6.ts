// ========== EXCERCISE 1 ==========
// interface Student{
//     Name:string;
//     Email:string;
//     Age:Date;
//     Score:number;
// }

 const studentData1 = [
  { name: "John", email: "john@mail.com", age: 20, score: 85 },
  { name: "Jane", email: "jane@mail.com", age: 22, score: 90 },
  { name: "Bob", email: "bob@mail.com", age: 21, score: 75 },
  { name: "Arfn", email: "arfn@mail.com", age: 22, score: 75 },
]
function calculate(studentData1:any[]): any {
    const score = studentData1
}

/*● Create a function to calculate array of student data
 ● The object has this following properties :
 ○ Name → String
 ○ Email → String
 ○ Age → Date
 ○ Score → Number
 ● Parameters : array of student
 ● Return values :
 ○ Object with this following properties :
 ■ Score
 ● Highest
 ● Lowest
 ● Average
 ■ Age
 ● Highest
 ● Lowest
 ● Average
 */
interface Student{
    Name:string;
    Email:string;
    Age:Date;
    Score:number;
}
 const studentData  = [
  { name: "John", email: "john@mail.com", age: new Date("2005-04-01"), score: 85 },
  { name: "Jane", email: "jane@mail.com", age: new Date("2005-05-01"), score: 90 },
  { name: "Bob", email: "bob@mail.com", age: new Date("2005-06-01"), score: 75 },
  { name: "Arfn", email: "arfn@mail.com", age: new Date("2005-07-01"), score: 75 },
]
function calculateStudentData(studentData: any[]): any {
    const score = studentData.map(student => student.score);
    const highestScore = Math.max(...score);
    const lowestScore = Math.min(...score);
    const averageScore = score.reduce((a, b) => a + b, 0) / score.length;
    const age = studentData.map(student => student.age);
    const highestAge = Math.max(...age);
    const lowestAge = Math.min(...age);
    const averageAge = age.reduce((a, b) => a + b, 0) / age.length;
    return {
        score: averageScore,
        highest: highestScore,
        lowest: lowestScore,
        average: averageScore,
        age: averageAge,
        highestAge: highestAge,
        lowestAge: lowestAge,
        averageAge: averageAge
    }
}
console.log(calculateStudentData(studentData))


//