//********************index.js********************** 

// add/change CSS properties

document.querySelector("#myButton1").onclick = function () {
    const h1 = document.querySelector("#myH1")

    console.log(h1.style);
    
    h1.style.color = "#00ff00";
    h1.style.backgroudColor = "black";
    h1.style.fontFamily = "consolas";
    h1.style.textAlign = "center";
    h1.style.border = "4px solid";
    h1.style.borderColor = "blue";
}