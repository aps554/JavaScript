/**
 * * IIFE Imidiately invoked function expression
 * (function(){
 *      // body of the function 
 *      
 * }
 * )();
 * 
 */

const f = (function(){console.log("Function called")})();

const g = (function(){return "Function called"})();
console.log(g);
