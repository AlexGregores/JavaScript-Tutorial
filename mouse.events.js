//****************index.js********************* 

//Mouse events
//element.addEventlistener(type,function)

const div = document.querySelector("#myDiv");


div.style.backgoundColor = "grey";
div.style.width= "200px";
div.style.height= "200px";
/*
div.addEventListener("click", e =>{
console.log("You clicked the mouse!");
div.style.backgoundColor = "yellow"

})


div.addEventListener("mousedown", e =>{
    console.log("You are holding  the mouse down!");
    div.style.backgoundColor = "red"
    
    })

    div.addEventListener("mouseup", e =>{
        console.log("You let go of the mouse!");
        div.style.backgoundColor = "grey"
        
        })
        
        div.addEventListener("dbclick", e =>{
            console.log("You double click!");
            div.style.backgoundColor = "purple"
            
            })
           

            div.addEventListener("contexmenu", e =>{
                console.log("You opened the contex menu!");
                
                
                })
                 
                div.addEventListener("mouseover", e =>{
                    console.log("You entered the square!");
                    div.style.backgoundColor = "purple"
                    
                    })
                    div.addEventListener("mouseleave", e =>{
                        console.log("You left the square!");
                        div.style.backgoundColor = "purple"
                        
                        })
                        */
                        div.addEventListener("mousemove", e =>{
                            console.log("You are within  the square!");
                            div.style.backgoundColor = "purple"
                            
                            })




    
    

