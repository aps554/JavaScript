function add(a, b) {
    mult(a, b);
    console.log(a + b);
}

let mult = (a,b)=>{
    console.log(a*b);
}

export {mult, add};