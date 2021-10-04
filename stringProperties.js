// ******************index.js****************************

//useful string properties & methods

var myName = "Alex";
var myStreet = "123 Fake st";
var myCity = "Nowhere XY 12345";

console.log(myName.length);
console.log(myName.charAt(0));
console.log(myName.indexOf(""));
console.log(myName.lastIndexOf("e"));
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

var myAddress = myStreet.concat(" ", myCity);

console.log(myAddress)