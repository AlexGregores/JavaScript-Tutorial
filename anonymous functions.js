//***********index.js******************* 

//anonymous function = Function w/o a name.
//                     Often not accessible after   
//                     its initial creation.

//benefits = Doesn 't clutter global namespace
//           Usable once
//           Can be passed as arguments

//*****************************************
// IIFE = a JS function that runs as soon as it is defined
// grouping operator = ()

(function () {
    document.getElementById("myH1").innerHTML = "hey!";
    
})();

// setTimeout (function, milliseconds);



setTimeout(function() {
    document.getElementById("myH1").innerHTML= "Pizza?"
},
 1000);