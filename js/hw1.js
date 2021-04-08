'use strict'

let n = 56;
let res = (n-(n%10))/10+(n%10);
console.log(res);

let a = 2, b = 16;
a = a + b;
b = a - b;
a = a - b;
console.log(a,b);

let a1 = 8, a2=10, a3=12;
let s = a1*a2*a3;
console.log(s);

let start = -5, end = 5;
let between;
res = start<end?between=end-start:-1;
console.log(res);
