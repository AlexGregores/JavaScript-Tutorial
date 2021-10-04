//***************index.js****************** 

//reduce() = Reduces an array to a single value The return value os a callback function is the accumulated result, and is provided as an argument in the next call to the callback function

let letters = ["H", "E", "L", "P"];

function combineLetters(total, nextletter, index, array){

    return total + nextletter
}
let word = letters.reduce(combineLetters);

console.log(word)