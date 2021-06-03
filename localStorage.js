console.log('YOu are in localStorege.js file');

localStorage.setItem("name","amit");
localStorage.setItem("name2","anu");


console.log(localStorage.getItem("name"));


// Clears the local strage
// localStorage.clear() ;

console.log(localStorage)


// Storing array is difficult but can be done bu pasring it as JSON string and retriving back


let impArray = ["amit","anu","manish"];

localStorage.setItem("names",JSON.stringify(impArray));

console.log(localStorage.getItem("names"));
console.log(JSON.parse(localStorage.getItem("names")));
