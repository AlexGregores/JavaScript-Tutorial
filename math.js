// **************** index.js *********************
// Math = An object that provides basic mathematics functionality an constants.

var myNum;

//myNum = Math.round(3.5);
//myNum = Math.floor(3.9);
//myNum = Math.ceil(3.1);
//myNum = Math.pow(3,3);
//myNum = Math.abs(-1);
//myNum = Math.min(1,5,2,4,3)
//myNum = Math.PI;
//myNum = Math.E;

//console.log(myNum)

// solve of hypotenuse of a right triangle

var a = window.prompt("Enter side A");
var b = window.prompt("Enter side B");
var c;

c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

console.log("Side c=", c)

