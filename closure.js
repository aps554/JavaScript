function counter(){
    let count = 0;
    return ++count;
}

let c = counter();
console.log(c);
console.log(c);
console.log(c);
console.log(c);

console.log("\n");

/**
 * Closure is fnction inside a function 
 * can be of the type return 
 * can be of the name of the outer function
 */





let closur;
{
    let variable = "character";
    closur = function(){
        console.log(variable);
    }
}

closur();


let f;
{
    const obj = {
        name:"amit",
        year: "Final",
        branch: "IT"
    };
    f = () => {return obj;}
}

console.log(f());
console.log(`${f().name} ${f().year} ${f().branch}`);