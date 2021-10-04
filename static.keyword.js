// ************************** index.js*********************
// static = a method or property that belongs to a class and not any one object

// Math.PI

class Car{
    static numbersOfCars = 0;

    static beginRace(){
        console.log("The race has begun!")
    }

    constructor(model){
        this.model = model;
        Car.numbersOfCars += 1;
    }
}
let car1 = new Car("Mustang")
let car2 = new Car("Corvette")
let car3 = new Car("Challanger")

console.log(Car.numbersOfCars)
Car.beginRace();




