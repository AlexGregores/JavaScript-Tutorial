//*************************index.js************************** 
// New feature as of (ES6)

// template leterals = another way of formatting ouput,
//                     can contain placeholders for formatting and insertting:
//                     strings/values/variables/etc.

//                      'backticks
//                     ${} placeholder

//                     Can use multiple lines 
//                     embed expressions

let firstName  = "Alex";
let lastName = "Greg";
let price = 10;
let taxRate= 0.05;
let total;

//console.log("Hello" + firstName + "" + lastName + "!")
console.log('Hello ${firstName} ${lastName}!');
console.log('The price is: $ ${price}');
console.log('tax rate:${taxrate}');


