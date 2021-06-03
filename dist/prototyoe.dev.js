"use strict";

/**
 * Prototype mai tb dekhi jb object ke pass vo propert na ho
 * prefer properties specific to obj
 *
*/
var f = function f() {
  this.a = 1; // this.b = 2;
};

var obj = new f();
obj.c = 5;
f.prototype.b = 3;
f.prototype.d = 4;
console.log(obj.a);
console.log(obj.b);
console.log(obj.d);
console.log(f.prototype.b);
console.log(f);
console.log(f.prototype);