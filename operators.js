let x=5,y=4;

// strict equality
console.log(x===y);
console.log(x!==y);


console.log('\n');
//abstract equality
let str = '5';
console.log(x==y);
console.log(x==str);

console.log('\n');
console.log(x===Number(str));



// logical operator

// and &&
// or ||
// not !

console.log(typeof 1);
console.log(typeof "1");
console.log(typeof '1');
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof function() {});

//distrupting operator

const obj = {a:1,b:2,c:3,e:5,r:7};
// const {a,b,c,d,e} = obj;
({a,b,c,d,e} = obj);

console.log(`${a},${b},${c},${d},${e}`);

// console.log(`${r}`);



// object operators

const car = {"cname":"BMW",model:'i8', year:2018};
console.log(car["year"]);
console.log(car.cname);
console.log(car.model);
console.log("model" in car);
console.log("cname" in car);
console.log(`${"year" in car} \n\n`);


class Model{
    
    constructor(){
        console.log("constructor called");
    }
}

const c1 = new Model();
console.log(typeof c1)


console.log((c1 instanceof Object)) ;

const xx = {a:1,b:2};

console.log("a" in xx);

delete xx.a

console.log("a" in xx);

const arr = [1,2,3,4,5,6,7,8];

console.log(arr[3]);

delete arr[3]

console.log(arr[3]);
console.log(arr);

