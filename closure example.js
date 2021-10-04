// Clousers exemplo w/argments

function makeSize(size){

    return function () {

        document.body.style.fontSize = size + "px"
        
    }
}


function makeFont(font){

    return function () {

        document.body.style.fontFamily = size + "px"
        
    }
}

let size20 = makeSize(20);
let size30 = makeSize(30);
let size40 = makeSize(40);

let fontInkFree = makeFont("Ink Free");
let fontConsolas = makeFont("consolas");

size20();
size30();
size40();

fontInkFree();
fontConsolas();



