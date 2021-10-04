//************************index.js************************ 
// super = Reference to the parent class (super class)
//         Very similar to "this" keyword
//         Can use a super class: constructor, methods

class Person{
    constructor(name, age ){
        this.name = name
        this.age = age
        

    }
    hello(){
        
        super.welcome();
        console.log("Your gpa is  ", this.gpa)

    }
    
    

}
class Student extends Person{
    constructor(name, age , gpa){
        super(name,age)
        this.gpa = gpa

    }
    hello(){
        console.log("Hello ", this.name)
        console.log("You are  ", this.age)
        console.log("Your gpa is  ", this.gpa)

    }
    


}
class Teacher extends Person{
    constructor(name, age , classSize){
        super(name,age)
        this.classSize = classSize

    }
    hello(){
        console.log("Hello ", this.name)
        console.log("You are  ", this.age)
        console.log("Your classSize is  ", this.classSize)

    }
    
    }

let student = new Student ("Alex", 21 , 2.0);
let teacher = new Teacher("Suzi", 45, 30);

console.log(student.name)
console.log(student.age)
console.log(student.gpa)

console.log(teacher.name)
console.log(teacher.age)
console.log(teacher.classSize)


student.hello()
teacher.hello()



