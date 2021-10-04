//*********************index.js******************** 
//modify HTML elements
// document.getElementById() (older)
// document.querySelector() (newer, morepowerful)

document.querySelector("#myButton").onclick = function () {

    const h1 = document.querySelector("#myH1");
    const underline = document.createElement("u");
    underline.innerText = " By world";
    h1.innerText = "";
    h1.append(underline);

    const p = document.querySelectorAll(".myP");
    //p[0].innerText= "Whoaaaaa"
    p.forEach(element =>element.innerText = "Whoa!");

    const buttons = document.querySelectorAll("button");
    //buttons[1].remove();
    buttons.forEach(element => element.remove());



    
}