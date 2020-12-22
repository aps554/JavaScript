let form = document.getElementById("form");
// let form = document.querySelector(".form");

function display(){
    let pa = document.createElement('p');       // add a new para every time so it stays 
    document.querySelector('.two').innerHTML = Date();
    pa.innerHTML = Date();
    document.querySelector(".one").appendChild(pa);     // append the node to div
 }

form.addEventListener(
    "focus",function(event){
        event.target.style.background = "lightblue";
    },true
);

form.addEventListener(
    "blur",function(event){
        event.target.style.background = "";
    },true
);


// console.log(form);