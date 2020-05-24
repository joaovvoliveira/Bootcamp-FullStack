'use strict';

var total = 0;
var total1 = 0;
var total2 = 0;

//the first multiple is number 3
var a = 1;
var b = 0;
var aux = 0;
for (var i = 1; i < 100; i++) {
  aux = a;
  a = a + b;
  b = aux;
  if (a < 4000000) {
    console.log(a);
  }
}

/*
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
*/
