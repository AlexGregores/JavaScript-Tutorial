// ******************* index.js*******************

//method chaining = calling  one method after another, in one continuous line of code
//example:captalization 

let user = "alex";

//let firstLetter = user.charAt(0);
//firstLetter = firstLetter.toUpperCase();
//user = firstLetter + user.slice(1);
//console.log(firstLetter)

user = user.charAt(0).toUpperCase() + user.slice(1);


console.log(user)
