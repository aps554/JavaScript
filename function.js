function Magic(){
    console.log(`${5 * 5} = ${25}`);
}

Magic();

const obj = {a:Magic};
console.log(obj.a());

function f(a,b,c){
    return (a+b+c)/3;
}

console.log(f(4,4,50));
console.log(f());

function f1(a = 'default'){
    return `a in function is ${a}`;
}
console.log(f1(4));
console.log(f1());


/**
 * function object
 * const f = func(){
 *      statement;
 * }
 * 
 * 
*/

/**
 * Arrow notation
 * 
 *  omit function keyword
 *  single parameter ... ommit paranthes
 * 
 * always annonymus
 */

 const f2 = function f(){console.log("Hello everyone")};
 f2();

 const f3 = () => {console.log("hello world")};

 const f4 = amit => {console.log(`hello  ${amit}`)};
 const f5 = (amit,anu) => {console.log(`hello  ${amit} ${anu}`)};

 f3(); 
 f4('amit');