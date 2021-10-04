//*********************index.js********************** 
//Nested functions =   Functions inside other functions.
//                     Outer functions have access to inner outside the scope.
//                     Inner functions are "hidden" from outside the scope
//                     used in clousers.

function login(){
let userName = "Alex";
let userInbox = 0;

function displayUserName() {

    console.log("Hello", userName);
    
}
function displayUserInbox() {
    console.log("You have", userInbox, "new massages")
    
}

displayUserName();
displayUserInbox();
}
login();