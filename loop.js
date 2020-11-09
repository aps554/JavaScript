/*
loops
    while
    do/while
    for
    for in
*/

/*
while loop

    while(condition){

    }

*/

// let count  = 0;
// while(count!=12){
//     console.log(count);
//     // count += 1;
//     count++;
// }


// for(let i = 0,j = 6;i<5;i++,j--){
//     console.log(`numbers are ${i} and ${j}`);
//     console.log(`${i}`);
// }


// for 


let arr = [1,2,4,5,6];
let map = {a:1,b:2,c:3,d:4};

for (let a in arr){
    console.log(`${a} is ${arr[a]}`);
}

for (let a in map){
    console.log(`${a} is ${map[a]}`);
}
console.log("\n");

for (let a of arr){
    console.log(`${a} is ${arr[a]}`);
}
// ERROR: Uncaught TypeError: map is not iterable at loop.js: 51
// for (let a of map){
//     console.log(`${a} is ${map[a]}`);
// }

// const brr = 


// label break works with while
let i = 0, ii = 0;;
label:while(i<4){
    ii = 0;
    i++;
    while(ii<5){
        console.log(`${i} ${ii} `);
        ii++;
        if(i === 3 && ii === 2)
            // break label;
            continue label;
    }
    console.log('\n');
}