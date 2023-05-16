class animal {
    constructor(age, food){
        this.age = age;
        this.food = food;
    }
}

// Dog Inheritance Class

class dog extends animal{
    constructor(age, food, name){
        super(age, food);
        this.name = name;
    }

    showDogProperties(){
        console.log(`${this.name} is ${this.age} years old and eat ${this.food}.`);
    }
}

let dogObject1 = new dog(04, "Beef", "Tomy");
dogObject1.showDogProperties();


// Cat Inheritance Class
class cat extends animal{
    constructor(name, color, age, food,){
        super(age, food);
        this.name = name;
        this.color = color;
    }

    showCatProperties(){
        console.log(`${this.name} has ${this.color} color and ${this.age} years old and eat ${this.food}.`);
    }
}

let catObject1 = new cat("Oreo", "white", 02, "Chicken");
catObject1.showCatProperties(); 


// Cow Inheritance Class
class cow extends animal{
    constructor(age, food, product){
        super(age, food);
        this.product = product;
    }

    showCowProperties(){
        console.log(`This cow is ${this.age} years old and eat ${this.food} and produced ${this.product} milk.`);
    }
}

let cowObject1 = new cow(04, "Grass", "15 Litter");
cowObject1.showCowProperties();