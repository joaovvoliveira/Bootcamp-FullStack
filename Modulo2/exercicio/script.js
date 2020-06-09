let cidadesAll = [];
let estadosAll = [];
let cidadesEstadosAll = [];
let countEstados = 0;
let contaCidades = [];

window.addEventListener("load", () => {
  console.log("js comunicando...");

  render();
});

function allCidades() {
  cidadesAll = cidades.map(({ ID, Nome, Estado }) => {
    return {
      ID: ID,
      NomeCidade: Nome,
      IDestadoCidade: Estado,
    };
  });
}
function allEstados() {
  estadosAll = estados.map(({ ID, Sigla, Nome }) => {
    return {
      ID: ID,
      Sigla: Sigla,
      NomeEstado: Nome,
    };
  });
}

function render() {
  allCidades();
  allEstados();
  allCidadesEstados();
  countCidadeEstado();
  maxNomeCidade();
  minNomeCidade();
  maxNomeCidadeporEstado();
  minNomeCidadeporEstado();
}

function allCidadesEstados() {
  cidadesAll.forEach((cidade) => {
    const cidadesEstados = estadosAll.filter((estado) => {
      return estado.ID === cidade.IDestadoCidade;
    });

    cidadesEstadosAll.push({ ...cidade, ...cidadesEstados });
  });
}

/*(x) Criar um método que recebe como parâmetro o UF do estado, realize a leitura do arquivo JSON 
correspondente e retorne a quantidade de cidades daquele estado.*/

function countCidadeEstado() {
  let countCidadesEstados = cidadesEstadosAll.filter((count) => {
    return count.IDestadoCidade === "1";
  });
  console.log(countCidadesEstados.length);
}

/*(X) Criar um método que imprima no console a cidade de maior nome entre todos os estados, seguido do seu UF. 
Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. 
Exemplo: “Nome da Cidade - UF".*/

function maxNomeCidade() {
  let addlengthName = cidadesEstadosAll;
  addlengthName.forEach((cidade) => {
    cidade.nameSize = cidade.NomeCidade.length;
  });
  addlengthName.sort(function (a, b) {
    if (a.IDestadoCidade === a.IDestadoCidade && a.nameSize === b.nameSize) {
      if (a.NomeCidade < b.NomeCidade) return -1;
      if (a.NomeCidade > b.NomeCidade) return 1;
      return 0;
    }
    return b.nameSize - a.nameSize;
  });

  console.log(addlengthName);
}
/*(X) Criar um método que imprima no console a cidade de menor nome entre todos os estados, seguido do seu UF. 
Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. 
Exemplo: “Nome da Cidade - UF".*/

function minNomeCidade() {
  let addlengthName = cidadesEstadosAll;
  addlengthName.forEach((cidade) => {
    cidade.nameSize = cidade.NomeCidade.length;
  });
  addlengthName.sort(function (a, b) {
    if (a.IDestadoCidade === a.IDestadoCidade && a.nameSize === b.nameSize) {
      if (a.NomeCidade < b.NomeCidade) return -1;
      if (a.NomeCidade > b.NomeCidade) return 1;
      return 0;
    }
    return a.nameSize - b.nameSize;
  });
  console.log("uau");
  console.log(addlengthName[0]);
}

/*(x) Criar um método que imprima no console um array com a cidade de maior nome de cada estado, seguida de seu UF. 
Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. 
Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].*/
function maxNomeCidadeporEstado() {
  let addlengthName = cidadesEstadosAll;
  addlengthName.forEach((cidade) => {
    cidade.nameSize = cidade.NomeCidade.length;
  });
  addlengthName.sort(function (a, b) {
    if (a.Sigla === a.Sigla) {
      if (a.Sigla < b.Sigla) {
        return -1;
      }
      if (a.Sigla > b.Sigla) {
        return 1;
      }
      return b.nameSize - a.nameSize;
    }
  });

  function countcidadeporEstado() {
    let contaCidades = addlengthName.filter((count) => {
      return count.IDestadoCidade === "1";
    });
    console.log(contaCidades);
  }

  countcidadeporEstado();
}

/*(x) Criar um método que imprima no console um array com a cidade de menor nome de cada estado, seguida de seu UF. 
Em caso de empate, considerar a ordem alfabética para ordená-los e então retorne o primeiro.
 Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].*/

function minNomeCidadeporEstado() {
  let addlengthName = cidadesEstadosAll;
  addlengthName.forEach((cidade) => {
    cidade.nameSize = cidade.NomeCidade.length;
  });
  addlengthName.sort(function (a, b) {
    if (a.Sigla === a.Sigla) {
      if (a.Sigla < b.Sigla) {
        return -1;
      }
      if (a.Sigla > b.Sigla) {
        return 1;
      }
      return a.nameSize - b.nameSize;
    }
  });

  function countcidadeporEstado() {
    let contaCidades = addlengthName.filter((count) => {
      return count.IDestadoCidade === "1";
    });
    console.log(contaCidades);
  }

  countcidadeporEstado();
}

/*() Criar um método que imprima no console um array com o UF dos cinco estados que mais possuem cidades, 
seguidos da quantidade, em ordem decrescente. 
Utilize o método criado no tópico anterior. Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”]*/

/*
() Criar um método que imprima no console um array com o UF dos cinco estados que menos possuem cidades, 
seguidos da quantidade, em ordem decrescente.
 Utilize o método criado no tópico anterior. Exemplo de impressão: [“UF - 30”, “UF - 27”, “UF - 25”, “UF - 23”, “UF - 21”]*/
