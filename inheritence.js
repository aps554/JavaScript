class vehicle{
    wheels = 2;
    avg = 20;    
    constructor(color){
        this.color = color;
    }
}

class car extends vehicle{
    constructor(model){
        super("red");
        this.model = model;
    }
    wheels = 4; 
}

const obj = new car("BMW");
console.log(obj.color);
console.log(obj);


let cars = {
    Wheel : "four",
    Model : "Tesla",
    CC : 200
};

let bike = {
    CC: 250,
    __proto__ : cars
};

console.log(bike);
//bike.__proto__ = cars;

console.log(bike.Wheel);
console.log(bike.CC);
