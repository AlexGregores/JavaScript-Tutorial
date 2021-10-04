//*******************index.js******************** 

let numbers = [3,14,1,2,5];

//numbers.sort(); //ASCII character order

/*
numbers.sort(function(x,y)){
    return x - y;

});
*/

numbers.sort((x,y)=> y - x);  // using arrow function 

console.log(numbers);