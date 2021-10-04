// arrow function =>
// shortcut for a function expression


let hello;
let x = "Hey";
let y = "Alex";

// Function expression
hello = function () {
    return "Hello world"
    
}
console.log(hello())
//
hello = function (x) {
    return "Hello world"
    
}
console.log(hello(x))


//

hello = function (x,y) {
    return x +" " + y 
    
}
console.log(hello(x,y))



    

//arrow function
hello =() => "Hello world"
console.log(hello())
//
hello = x => "Hello world"
console.log(hello(x))

//

hello =(x,y) => x +" " + y 
console.log(hello(x,y))

// Map()
/*
let storeUSD = [5,6,7,8,9];
let storeEUR;

function toEuros(value) {
    value*=0.84;
    return value;
}
console.log(toEuros(2))
*/

let storeUSD = [5,6,7,8,9];
let storeEUR;
storeEUR = storeUSD.map(value => value *=0.84)
console.log(storeEUR)

// Filter
/*
let students = [16,17,18,19,20];
let adultStudents;

function checkAge(age) {

    if(age>=18){
        return age;
    }
    
}
adultStudents = students.filter(checkAge);
console.log(adultStudents);

*/
let students = [16,17,18,19,20];
let adultStudents;

adultStudents = students.filter(age =>age>=18);
console.log(adultStudents);

// Reduce()

/*
let letters = ["H","E","L","P"];
let word;

function combineLetters(total, nextLetter){
    return total + nextLetter;
}

word = letters.reduce(combineLetters);
console.log(word)
*/

let letters = ["H","E","L","P"];
let word;

word = letters.reduce((total,nextLetter)=>total + nextLetter);
console.log(word)






