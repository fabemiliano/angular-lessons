// 'use strict'

//1
let mistypeVariable;

mistypeVarible = 17; 

//2
function teste(a, a, b) {
  console.log(a, a, b)
}
teste(1, 2, 3)


//3
const o = { p: 1, p: 2 }
console.log(o)

//4
const obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // throws a TypeError
console.log(obj1.x)

// 5 Assignment to a getter-only property
const obj2 = { get x() { return 17; } };
obj2.x = 5; //