// ************* index.js ***********

//array = a special variable, that  can hold more than one value

// Each "space" is known as an element
// You access elements in an array by referring to the index number ex.[0]

var cars = ["Mustang","Ferrari","Jaquar"];

console.log(cars)
console.log(cars[0])
console.log(cars[1])
console.log(cars[2])

cars.push("corvette") //add an element
cars.pop()//remove  last element

var numberOfCars = cars.length;
console.log(numberOfCars)

cars = cars.sort()// sorts an array alphabetically/numerically
cars = cars.reverse()//reverse sort an array

console.log(cars)
