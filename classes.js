//****************index.js********************** 

// Class = A "blueprinter" for creating onjects.
//          Define properties and/or methods.

class Car{

    drive(){
        console.log("You drive the car");
    }
    brake(){
        console.log("You step on the brakes!")
    }

}
let player1 = new Car();
let player2 = new Car();

player1.drive();
player2.brake();