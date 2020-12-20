
'use strict'
// this is hello world program
// this line print to console
console.log("Hello World");

// creating a variable
let firstName,secondName = "Amit",Age = 14;
console.log(Age);

// creating a const variabee
// whose value cant be changed
// use CAPITAL LETTERS for specifing constants
const rollNo = 5;

// identifier
// starts with $ or _
 
const obj = {
    f1 : "Amit",
    f2 : "Pratap",
    f3 : "Singh",
    f4 : "From DTU",
    

}

for (let f in obj){
    console.log(`${f} is ${obj[f]}`);
}

console.log("\n");
console.log("\n");
console.log("\n");

const obj1 = {};
const y = obj1;
y.d = "Property created";

console.log(obj1);


console.log("\n");
console.log("\n");
console.log("\n");


/**
 * Class : syntax
 * class model{
 *  constructor(){
 *      
 * 
 *  }
 * }
*/

class Model{
    constructor(Mno,Mname){
        // console.log("object created");
        this.Mno = Mno;
        this.Mname = Mname;
    }

    show(){
        console.log(`Model No: ${this.Mno}
Model Name: ${this.Mname}`);
    }
}

const obj3 = new Model(1,"Dzire");
const obj2 = new Model(2,"Swift");


console.log(obj3 instanceof Model);
console.log(obj1 instanceof Model);
console.log(obj1 instanceof Object);

console.log(obj2);
console.log(obj3);

obj2.show();