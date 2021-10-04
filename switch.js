// ************* index.js **************

// switch = statement tht evaluates a value/expression,
// matches the value to many case clauses
// more efficient that many "else if " statement

 /*var grade = "F";

if(grade == "A"){
    console.log("You did  great")
}
else if(grade =="B"){
    console.log("You did good!")
}
else if(grade =="C"){
    console.log("You did okey!")
}
else if(grade =="D"){
    console.log("You did not do that well!")
}
else if(grade =="F"){
    console.log("You failed!")
}
else if(grade =="B"){
    console.log("You did good!")
}
else{
    console.log("Is not a letter grade")
} */

var grade = "A"
switch (grade){

    case "A":
        console.log("You did great")
        break;

    case "B":
        console.log("You did good")
        break; 
        
    case "C":
        console.log("You did okey") 
        break;
        
    case "D":
        console.log("You...did not do that  well")    
        break;

    case "F":
        console.log("You failed!")  
     break;
     
    default:
        console.log("Is not a letter grade") 
        
}


