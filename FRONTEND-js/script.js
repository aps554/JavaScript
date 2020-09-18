// alert('chutiya hai kya')

console.log("ha hai kr le jo krna hai")

// variables

let x = 25
let y = "kjghkhg"
let z = true

console.log(x)
console.log(y)
console.log(z)

console.log('x is ',typeof x)
console.log('y is ',typeof y)
console.log('z is ',typeof z)

function sayHello(Name) {
    console.log('Hello '+Name);
}

let inpUser = document.getElementById("inpUser")
let helloBtn = document.getElementById("helloBtn")

helloBtn.onclick = function () {
    document.getElementById('user')

    let name = inpUser.value
    alert('Hello '+ name)
}