//************************index.js **************************

// This = A Reference to the object that we're currently working with

class Car{
    constructor(make, model, year, color){
this.make = make;
this.model = model;
this.year = year;
this.color = color;
    }

    drive(){
        console.log("You drive the", this.model);
    }
    brake(){
        console.log("You step on the",this.model+"'s brakes!");
    }
    whatIsThis(){
        return this;
    }
}
let car1 = new Car("Ford","Mustang", "2022","red")
let car2 = new Car("Chevy","Corbette", "2021","Black")

console.log(car1.whatIsThis());

car1.drive();
car2.brake()
