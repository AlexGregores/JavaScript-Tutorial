//******************index.js**************** 

//date object = represents a moment in time since epoch(reference point)
//************************ 

date = new Date(0);
date = new Date(); //current day in time
date = new Date(2022, 5 , 19 , 12 , 1 , 2 , 3) // year, month, day, seconds, million seconds
date = new Date("April 20, 2022 16:20:01:02")

console.log(date)

let year = date.getFullYear();
let month = date.getMonth();
let dayOfWeek = date.getDay();
let dayOfMonth = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milliSeconds = date.getMilliseconds();
/*
console.log(year)
console.log(month)
console.log(dayOfWeek)
console.log(dayOfMonth)
console.log(hours)
console.log(minutes)
console.log(seconds)
console.log(milliSeconds)
*/

date.setFullYear(2023);
date.setMonth(6);
date.setDate(19);
date.setHours(0);
date.setMinutes(50);
date.setSeconds(2);

console.log(date)
