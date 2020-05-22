'use strict';

var x let x const

function withVar() {
  for (var i = 0; i < 4; i++) {
    console.log('var' + i);
  }
  i = 20;
  console.log(i);
}
function withLet() {
  for (let i = 0; i < 4; i++) {
    console.log('let' + i);
  }
  i = 20;
  console.log(i);
}
function withConst() {
  for (const i = 3; i < 4; i++) {
    console.log('var' + i);
  }
  i = 20;
  console.log(i);
}
const a = 10;
console.log('constante= ' + a);
a = 12;
console.log(a);
withConst();
withVar();
withLet();
const soma2 = function (a, b) {
  return a + b;
};
const soma3 = (a, b) => {
  return a + b;
};
const soma4 = (a, b) => console.log(a + b);
soma4(6, 2);

const impar = (n1) => {
  if (n1 % 2 === 1) {
    return true;
  }
  return false;
};
console.log(impar(70));
