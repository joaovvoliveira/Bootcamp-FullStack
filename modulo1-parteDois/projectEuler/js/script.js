"use strict";
window.addEventListener("load", () => {
  const div = document.querySelector("#center");
  let count = 0;

  console.log(gitJoao());
  console.log(gitJooao());
});

function gitJooao() {
  const gitJ = fetch("https://api.github.com/users/joaovvoliveira").then(
    (res) => {
      res.json().then((json) => {
        return console.log(json);
      });
    }
  );
}

async function gitJoao() {
  const res = await fetch("https://api.github.com/users/joaovvoliveira");
  const json = await res.json();
  return console.log(json);
}
/*
async function peoplesArray() {
  const res = await fetch(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
  );
  const peoples = await res.json();

  const loginAge = peoples.results.map((person) => {
    const { name, location, login, dob } = person;
    return {
      firstName: name.first,
      city: location.city,
      user: login.username,
      age: dob.age,
    };
  });
  const menor30 = loginAge.filter((person) => {
    return person.age < 30;
  });
  console.log(menor30);
  const maior50 = loginAge.filter((person) => {
    return person.age > 50;
  });
  console.log(maior50);

  const menor30maior50 = [...menor30, ...maior50];
  console.log(menor30maior50);

  const mappedPeople = loginAge;

  mappedPeople.forEach((person) => {
    person.fullName = person.firstName + " Oliveira";
  });

  console.log(mappedPeople);

  const array = [1, 2, 3, 4, 5, 6];
  function f2() {
    return array
      .map((item) => item * 2)
      .filter((item) => item % 3 === 0)
      .reduce((acc, cur) => acc + cur, 0);
  }
  console.log(f2());
}
peoplesArray();

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
