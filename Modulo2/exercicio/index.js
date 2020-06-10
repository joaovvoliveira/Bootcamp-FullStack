let allCidades = [];
let allEstados = [];
let allCidadesEstados = [];
let countEstados = 0;
let countCidades = 0;

function start() {
  render();
}

function capEstados() {
  allEstados = estados.map((estado) => {
    const { ID, Sigla, Nome } = estado;
    return {
      idEstado: ID,
      Sigla,
      nomeEstado: Nome,
    };
  });
  console.log(allEstados);
}
function capCidades() {
  allCidades = cidades.map((cidade) => {
    const { ID, Nome, Estado } = cidade;
    return {
      idCidade: ID,
      nomeCidade: Nome,
      fkCidadeEstado: Estado,
    };
  });
}

function render() {
  capEstados();
  capCidades();
  capCidadeEstados();
  countCidadesPorEstado();
  maiorNome();
  menorNome();
  teste();
}

function capCidadeEstados() {
  allCidades.forEach((cidade) => {
    const cidadeEstado = allEstados.filter((estado) => {
      return estado.idEstado === cidade.fkCidadeEstado;
    });

    allCidadesEstados.push({ cidadeEstado, ...cidade });
  });
  console.log(allCidadesEstados);
}

function teste() {
  let num = 0;
  const res = allCidadesEstados.map((cidade) => {
    const {
      idCidade,
      nomeCidade,
      cidadeEstado: { Sigla, nomeEstado },
    } = cidade;
    return {
      idCidade,
      nomeCidade,
      siglaEstado: cidade.cidadeEstado.sigla,
      nomeEstado,
    };
    num++;
  });
  console.log(res);
}

/*(x) Criar um método que recebe como parâmetro o UF do estado, realize a leitura do arquivo JSON 
correspondente e retorne a quantidade de cidades daquele estado.*/
function countCidadesPorEstado() {
  const qtdCidades = allCidadesEstados.filter((acc) => {
    return acc.fkCidadeEstado === "15";
  });
}

/*(X) Criar um método que imprima no console a cidade de maior nome entre todos os estados, seguido do seu UF. 
Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. 
Exemplo: “Nome da Cidade - UF".*/

function maiorNome() {
  const nomeMaior = allCidadesEstados.sort((a, b) => {
    if (a.nomeCidade.length > b.nomeCidade.length) {
      return -1;
    } else if (a.nomeCidade.length < b.nomeCidade.length) {
      return 1;
    } else if (a.nomeCidade.length === b.nomeCidade.length) {
      return b.nomeCidade.localeCompare(a.nomeCidade);
    }
  });
  // .sort((a, b) => {
  //   if (a.nomeCidade.length === b.nomeCidade.length) {

  //     b.nomeCidade.localeCompare(a.nomeCidade);
  //     console.log(b.nomeCidade);
  //   }
  // });
}

/*(X) Criar um método que imprima no console a cidade de menor nome entre todos os estados, seguido do seu UF. 
Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. 
Exemplo: “Nome da Cidade - UF".*/

function menorNome() {
  const nomeMenor = allCidadesEstados.sort((a, b) => {
    if (a.nomeCidade.length < b.nomeCidade.length) {
      return -1;
    } else if (a.nomeCidade.length > b.nomeCidade.length) {
      return 1;
    } else if (a.nomeCidade.length === b.nomeCidade.length) {
      return a.nomeCidade.localeCompare(b.nomeCidade);
    }
  });
  // console.log(nomeMenor[0]);
}

/*(x) Criar um método que imprima no console um array com a cidade de maior nome de cada estado, seguida de seu UF. 
Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. 
Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].*/

/*(x) Criar um método que imprima no console um array com a cidade de menor nome de cada estado, seguida de seu UF. 
Em caso de empate, considerar a ordem alfabética para ordená-los e então retorne o primeiro.
 Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].*/

/*() Criar um método que imprima no console um array com o UF dos cinco estados que mais possuem cidades, 
seguidos da quantidade, em ordem decrescente. 
Utilize o método criado no tópico anterior. Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”]*/

/*
() Criar um método que imprima no console um array com o UF dos cinco estados que menos possuem cidades, 
seguidos da quantidade, em ordem decrescente.
 Utilize o método criado no tópico anterior. Exemplo de impressão: [“UF - 30”, “UF - 27”, “UF - 25”, “UF - 23”, “UF - 21”]*/

start();
