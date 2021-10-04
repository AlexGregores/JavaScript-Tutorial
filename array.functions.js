// *******************index.js***********************
// array of function

function jump() {
    console.log("You jump");
    
}
function punch() {
    console.log("You punch")
    
}
function kick() {
    console.log("You kick")
    
}
function block() {
    console.log("You block")
    
}

let actions = [];
actions = [kick,block, jump, punch]

/*
for(let i = 0; i < actions.lenght;i++)
actions[i]();
}
*/

actions.forEach(func => func());