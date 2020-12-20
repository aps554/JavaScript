
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