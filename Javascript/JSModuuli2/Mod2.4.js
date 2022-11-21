'use strict';

let input = 0;
let arr = [];

do {
  input = parseInt(prompt('ANNA NUMERO MULQ, 0 LOPETTAA'));
  arr.push(input);
} while (input !== 0);

arr.pop();
arr.sort((a, b) => b - a);

for (let number of arr) {
  console.log(number);
}
