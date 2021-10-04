//********************index.js************************* 

// method overriding = a child class will use methods with the same name that are most closely associated with it.

class Vehicle{
    drive(){
        console.log("You drive the vehicle");
    }
}
class Car extends Vehicle{
    drive(){
        console.log("You drive car!");
    }
}
class Racecar extends Car{
    drive(){
        console.log("You drive the Racecar!")
    }
}
let raceCar = new Racecar();
raceCar.drive()