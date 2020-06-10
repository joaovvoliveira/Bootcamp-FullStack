const users = [
  { nome: "Patrícia", idade: 26, empresa: "Cotaseg" },
  { nome: "João", idade: 24, empresa: "Santander" },
  { nome: "Lucas", idade: 29, empresa: "Unimed" },
];

const age = users.map((us) => us.idade);
console.log(age);

const firma = users.filter((us) => us.idade > 18 && us.empresa === "Unimed");
console.log(firma);

const trampo = users.find((us) => us.empresa === "Google");

console.log(trampo);

const velhos = users
  .map((us) => {
    const { nome, idade, empresa } = us;
    return {
      nome,
      idadex2: idade * 2,
      empresa,
    };
  })
  .filter((us) => us.idadex2 > 50);
console.log(velhos);

const empresa = {
  nome: "João Victor",
  idade: 24,
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC",
  },
};

const {
  nome,
  endereco: { cidade, estado },
} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

const usuario = {
  nomeU: "Richard",
  idadeU: 24,
  enderecoU: {
    cidadeU: "Rio do Sul",
    estadoU: "SC",
    paisU: "Brasil",
  },
};

const usuario2 = { ...usuario, nomeU: "Guilherme" };

console.log(usuario2);

function soma(a, b, ...c) {
  return a + b + c.reduce((acc, cur) => acc + cur);
}
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
