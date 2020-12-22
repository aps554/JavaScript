

let nav = document.querySelectorAll(".navbar");


console.log(nav[1].getAttribute("data-name"));
console.log(nav[1].getAttribute("data-number"));

console.log(nav[0].dataset.name);
console.log(nav[0].dataset.number);


let para = document.querySelector(".two");

let color = function(flag){
    if(flag)
        para.className = "togle_in";
    else
        para.className = "togle_out";
}


color(false);


