let para = document.getElementById("para");
console.log(para);

para.innerHTML = "Amit from dom.js";

let p2 = document.getElementById("p2");
 
p2.innerText = "Print from p2";
p2.innerHTML = "Print from p3";



// get element by tag name

let obj = document.getElementsByTagName("p");

console.log(para);
console.log(obj[0]);
console.log((para==obj[0]) && (para===obj[0]));



// query selector and query sellector all


// for first matching first element
let obj1 = document.querySelector(".two");
console.log(obj1);

let obj4 = document.querySelector("p");
console.log(obj4);


let obj2 = document.querySelector("#two");
console.log(obj2);


let obj3 = document.querySelectorAll(".two");
console.log(obj3);



// styling form js by particullarly selecting it from quesry selector

let sub = document.querySelector(".submit");
// console.log(sub);

// sub.style.backgroundColor = "SkyBlue";
// sub.style.color = "Green";
// sub.style.padding = "1em";
// sub.style.fontSize = "3em";

sub.classList.add("className");


let pa = document.createElement("p");
let pb = document.createElement("p");

pa.innerText = "Paragraph 1";
pb.innerHTML = "<h2>Paragraph 2</h2>"

let div = document.querySelector(".content");
div.appendChild(pa);

div.appendChild(pb);


// seeting and removing attributes is also possible
div.setAttribute("class","name");
div.removeAttribute("class");