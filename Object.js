// *************** index.js ****************

// object = a container for properties/methods

// property = values/variables that describe what an object has
// methods = functions  that describe what a object can do

var human1 = {
    name : "Alex",
    age : 21,


    eat : function(){
        console.log("Alex is eating food")
    },

    drink : function(){
        console.log("Alex is drinking alcohol")
    },

    sleep : function(){
        console.log("Alex has passed out!")
    }

}

human1.name // dot notation
human1["name"]// bracket notation

console.log(human1.name)
console.log(human1.age)

human1.eat();
human1.drink();
human1.sleep();

var human2 = {
    name : "Ju",
    age : 29,


    eat : function(){
        console.log("Ju is eating food")
    },

    drink : function(){
        console.log("Ju is drinking water")
    },

    sleep : function(){
        console.log("Ju has passed out!")
    }

}
human2.eat();
human2.drink();
human2.sleep()