const arr = [1,2,3,4,5,6];

const arr2 = ["1",2,[3,4,5,6],'a'];
const arr3 = [1,
    2,
    [3,4,5,6],
    'a',
    () => {
        return "amit";
    }
];


console.log(arr3[4]());


/**
 * pop             // remove from back
 * push             insert at back
 * shift            removes from front 
 * unshift          insert in front
 */

console.log(arr);
 arr.pop();
 
console.log(arr);
arr.push(6);

console.log(arr);
arr.shift();

console.log(arr);
arr.unshift(1);

console.log(arr);



// concat

const arrn = arr.concat("amit","anu");
console.log(arrn);


// slice

arrm = arr.slice(2,4);
console.log(arrm);


//splice

arr.splice(2,1,3);
console.log(arr);

arr.splice(2,1);
console.log(arr);

arr.splice(2,0,3);
console.log(arr);

// copy withen

arr.copyWithin(1,2);
console.log(arr);