console.log("Hello World");

let Age = 24;
console.log(Age);

let firstName, lastName = "Singh";

// declaring multiple varialbles
console.log(firstName);
console.log(lastName);

// constants
// always keep in capital letter
const PI = 3.414;
console.log(PI);


// data types
// Primitive data types are all immutable in nature

let age = 52;
console.log(age);
age = "skjef" + "kjfad" + 54;

// string not concatinated but added as immutable
console.log(age);


//String 
// Boolean
let Do=true ;

// Symbols

const blue = Symbol();

const white = Symbol("White");


console.log(blue===white)


// Null and notdefined

// OBJECT TYPE


// Array Data Regex map Set

// objects are muitable

// sntex:{}

const obj = {};
obj.Age = 25;

console.log(obj);
console.log(obj.Age);

let obj2 = {
    Name : "amit",
    Class : "FinalYear",
    age : 22

};
console.log(obj2);
console.log(obj2.Name);

// deleting properties 

delete obj2.Name;


console.log(obj2);
console.log(obj2.Name);