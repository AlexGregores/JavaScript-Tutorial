// ************* index.js ****************
/* 

A function  is a block of code designed to perform a particular task/procedure. (subroutine)

We invoke  "call" whenever we want it to do something
We need to define what we want task to do;

*/

function sayHello(){
    console.log("Hello", myName)
    console.log("Have a nice day!")
    console.log("Goodbye!")
}
var myName = "Alex"
sayHello();

function toCelsius(f){
    return (f-32) * (5/9)

} ;
 var myTemp = toCelsius(100);

 console.log("My temp in C is",myTemp,"degrees")

 function toFarenheit(c){
     return(c * 9/5) + 32;
 }
 var myTemp = toFarenheit(37.7);

 console.log("My temp in C is",myTemp,"degrees")