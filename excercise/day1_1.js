// Excercise 1, luas rectangle
let panjang = 5;
let lebar = 3;
let area = panjang * lebar;
console.log (area)

// Excercise 2, find perimeter  of rectangle
let panjang1 = 5;
let lebar1 = 3;
let perimeter = 2* (panjang + lebar);
console.log(perimeter)

/* Excercise 3, find diameter, circumference and 
area of a circle*/
// 1 Diameter
let radius = 5;
let diameter = radius* 2;
console.log(diameter)
// 2  circumference
const circumference = 3.14 * diameter ;
console.log(circumference);
// 3 area of a circle
const areaOfCircle = 3.14 * radius**2;
console.log(areaOfCircle)

/*find angles of triangle if two 
angles are given */
const A = 80;
const B = 65;
const angles = 180 - A - B;
console.log(angles)

/* convert days to years, months and 
days*/
function convertDays(days) {
  let years = Math.floor(days / 365);   // hitung tahun
  days = days % 365;                    

  const months = Math.floor(days / 30);   // hitung bulan

  return `${years} year, ${months} month, ${days} days`;
};

console.log(convertDays(600)); 
console.log(convertDays(366));

const totalDays = 400;

const years = Math.floor(totalDays / 365);
console.log(years)

const remainingDays = totalDays % 365;
console.log(remainingDays);

const month = Math.floor (remainingDays / 30);
console.log(month);

const days = remainingDays % 30;
console.log(days);
console.log(`${totalDays} Days -> ${years} Years ${month} Month ${days} Days`)


/* difference between dates in 
days*/
const date1 = new Date('2022-01-20');
const date2 = new Date('2022-01-22');

// 5

const totalhari = 366;

const tahun = Math.floor(totalhari / 365);
console.log(tahun)

const sisaHari = totalhari % 365;
console.log(sisaHari)

const bulan = Math.floor(sisaHari / 30);
console.log(bulan);

const Hari = sisaHari % 30;
console.log (Hari);

console.log(`${totalhari} Hari --> ${tahun} Tahun ${bulan} Bulan ${Hari} Hari`)