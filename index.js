// npm init
// enter for all the fields
// npm install nodemon
// in package.json file add "start": "nodemon index.js" in scripts
// npm start
// (make sure you have a file called index.js)

// const SamsungPhone = {
//     brand: "Samsung",
//     model: "Galaxy s21",
//     battery: 40000,
//     camera: 64,
//     storage: 128, 

//     getDetails() {
//         return `This phone is a ${this.brand} ${this.model} with a ${this.camera}MP camera`
//     }

// }

// console.log(SamsungPhone.getDetails());

// PRACTICING Encapsulation!!!!!!
//encapsulation: bundling data and methods that operate on htat data within one unit. It hides internal details.

//set the Developer true so can access the properties inside the object
const isDeveloper = true;

//This discrabe the property of the Phone for all 
class Phone {
    #brand; //meaning of #: these properties are going to be private
    #model;  // properties with a #, only accessable inside the project
    #battery;  //to access private properties outside of the object, need to use methods
    #camera;
    #storage;


    constructor(brand, model, battery, camera, storage) {
        this.#brand = brand;
        this.#model = model;
        this.#battery = battery;
        this.camera = camera;
        this.storage = storage;
    }
    get brand() {
        //outside of the object we stated that isDeveloper = true 
        if (isDeveloper) {
          return this.#brand; //now the developer can access of the property
        }  
        return "Access Denied"
    }

    //use setter the change the value of the property
    set brand(newBrand) {
        if (isDeveloper) {
            this.#brand = newBrand;
            return;
        }
        else {
            console.log("Access Denied");
        }
    }
}

const SamsungS21 = new Phone("Samsung", "Galaxy S21", 4000, 64, 128);
//because the properites are private, they cannot be accessed using console.log only
//console.log(SamsungS21.#brand)
//to access, need to use getters and setters (inside the object) get brand
//now we can call it
console.log(SamsungS21.brand)

//it gives more control, we can give more details, inside the object, who can access the property.


//set the brand from Samsung to iPhone
SamsungS21.brand = "Apple"
console.log(SamsungS21.brand);

//PRACTICING Inheritance!!!!!!

class Vehicle {
    #type;
    #vheels;
    #color;

    constructor(type, wheels, color) {
        this.#type = type;
        this.#vheels = wheels;
        this.#color = color;
    }
    //make our own method
    getDetails() {
        return `This vehicle is a ${this.#color} ${this.#type} with ${this.#vheels} wheels.`;
    }
}

const Train = new Vehicle("Train", 16, "Blue");
//const Car = new Vehicle("Car",4, "Red");
const Bike = new Vehicle("Bike", 2, "Green");

console.log(Train.getDetails());

//we have properties that, has something that others aren't 
//such as not all vehicle is a car
//inheritance means, one calss can inherit properties nad methods from another
//take an object and extend to another object
class Car extends Vehicle {
    #make;     //created new properties
    #engineType;
    #model;
    #LicencePlate;
   
    constructor(type, wheels, color, make, engineType, model, LicencePlate) {
        super(type, wheels, color);
        this.#make = make;
        this.#engineType = engineType;
        this.#model = model;
        this.#LicencePlate = LicencePlate;
    }
}

const myCar = new Car("Car", 4, "Red","Toyota", "Petrol", "Camry", "ABC123");
console.log(myCar.getDetails());
console.log(myCar.type);

class Parent {
    #eyeColor
    #hairColor;
    #height;

    constructor(eyeColor, hairColor, height) {
        this.#eyeColor = eyeColor;
        this.#hairColor = hairColor;
        this.#height = height;
    }

    getTraits() {
        return `{
          Eye Color: ${this.#eyeColor};
          Hair Color: ${this.#eyeColor};
          Height: ${this.#height};
        }`
    }
}

const mum = new Parent("Brown", "Black", 172);
const dad = new Parent("Blue", "Blonde", 185);

console.log(mum.getTraits());
console.log(dad.getTraits());

class Child extends Parent {
    #name;

    constructor(eyeColor, hairColor, height, name) {
        super(eyeColor, hairColor, height);
        this.#name = name;
    }

    getTraits () {
        return `Name: ${this.#name}, Traits: ${super.getTraits()}`; //we can override the things from the parent class
    }
}

const Child1 = new Child("Green", "Brown", 125, "Alice");

console.log(Child1.getTraits());

//Polymorphism: objects can take on many forms. A method like drive() might behave differently for car, bike or truck.
//abstraction: showing only essential features and hiding the complex implementation.
