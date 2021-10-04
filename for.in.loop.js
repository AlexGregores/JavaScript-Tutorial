//************index.js ***************

// for in loop = loops through the elements in an array or properties of an object less syntax to writess flexible

let letters = ["H", "E", "L", "P"];

for(let i = 0; i< letters.length; i++){
    console.log(letters[i]);

}

for(let i in letters){
    console.log(letters[i]);
   
}



