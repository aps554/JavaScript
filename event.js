 //  click

 function display(){
    let pa = document.createElement('p');       // add a new para every time so it stays 
    document.querySelector('.two').innerHTML = Date();
    pa.innerHTML = Date();
    document.querySelector(".one").appendChild(pa);     // append the node to div
 }



 // add event listner

 document.querySelector(".btn").addEventListener("click",function(){
    document.querySelector('.two').innerHTML = "using add event listner";
 });

 document.querySelector(".btn").addEventListener("mouseover",function(){
    document.querySelector('.two').innerHTML = "using add event listner";
 });