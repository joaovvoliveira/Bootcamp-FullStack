"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var users = [{
  nome: "Patrícia",
  idade: 26,
  empresa: "Cotaseg"
}, {
  nome: "João",
  idade: 24,
  empresa: "Santander"
}, {
  nome: "Lucas",
  idade: 29,
  empresa: "Unimed"
}];
var age = users.map(function (us) {
  return us.idade;
});
console.log(age);
var firma = users.filter(function (us) {
  return us.idade > 18 && us.empresa === "Unimed";
});
console.log(firma);
var trampo = users.find(function (us) {
  return us.empresa === "Google";
});
console.log(trampo);
var velhos = users.map(function (us) {
  var nome = us.nome,
      idade = us.idade,
      empresa = us.empresa;
  return {
    nome: nome,
    idadex2: idade * 2,
    empresa: empresa
  };
}).filter(function (us) {
  return us.idadex2 > 50;
});
console.log(velhos);
var empresa = {
  nome: "João Victor",
  idade: 24,
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado);
var usuario = {
  nomeU: "Richard",
  idadeU: 24,
  enderecoU: {
    cidadeU: "Rio do Sul",
    estadoU: "SC",
    paisU: "Brasil"
  }
};

var usuario2 = _objectSpread(_objectSpread({}, usuario), {}, {
  nomeU: "Guilherme"
});

console.log(usuario2);

function soma(a, b) {
  for (var _len = arguments.length, c = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    c[_key - 2] = arguments[_key];
  }

  return a + b + c.reduce(function (acc, cur) {
    return acc + cur;
  });
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
