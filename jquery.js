

let para = $(".two");
para.innerHTML = "Two para";
para[1].style.color = "red";
console.log(para[1]);

let para2 = $("<p class = 'two'>Add some text here</p>");
let div = $(".one");

div[0].appendChild(para2[0]);
console.log(div[0]);

