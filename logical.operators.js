// logical operators = used to write more complex conditions
//&& and (checks if both conditions are true)
// || or (checks if at least one conditional is true)
// ! not (reverses boolean value)

var temperature = 15; //celsius

if(temperature >= 30) {
    console.log("It's hot outside");
}  
else if(temperature > 0 && temperature <=30) {
    console.log("It's warn outside")
}

else{
    console.log("It's cold outside!"); 
}

var hour = 20; //military time

 if(hour < 6 || hour >=20){
     console.log("It's dark outside");
     
 }
 else {
    console.log("It's light outside")
 }

 /*var myName = window.prompt("Enter your name");

 if(!(myName == "" )){
     console.log("hello" , myName)
 }
 else{
     console.log("You have not enter your name")
 }*/
 






