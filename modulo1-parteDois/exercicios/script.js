function start() {
  const pessoal = [
    {
      nome: "Felipe",
      sobrenome: "Augusto Lima",
    },
    {
      nome: "Antônio",
      sobrenome: "Damous",
    },
    {
      nome: "João",
      sobrenome: "Oliveira",
    },
    {
      nome: "Fabrício",
      sobrenome: "Brandi",
    },
  ];

  function getGroupMembers() {
    const result = pessoal.sort((a, b) => {
      return a.nome.localeCompare(b.nome);
    });
    console.log(result);
  }
  function getFullName(...nome) {
    let nomeConcat = nome.join(" ");

    console.log(nomeConcat);
  }
  const num = [61, 72, 83, 94];
  function transform() {
    let i = 0;
    const valor = num.map((num) => {
      return {
        numero: num / 10 + 1,
      };
    });
    console.log(valor);
  }

  /*
  function onlyNumberOnly(value){
    return value.split(',').filter((item) => {
      return (
        item === '0' ||
        item === '1' ||
        item === '2' ||
        item === '3' ||
        item === '4' ||
        item === '5' ||
        item === '6' ||
        item === '7' ||
        item === '8' ||
        item === '9' ||
        );
    }).join('');
  function onlyNumberOnly(value){
    return value.split(',').filter((item) => {
      return !isNaN(item) && item === ' ';
    */

  function onlyNumbersFrom(codigo) {
    let arrCodigo = Array.from(codigo);
    let arrCodigoFiltrado = arrCodigo.filter(
      (caracter) => caracter !== " " && isNaN(caracter) === false
    );
    console.log(arrCodigoFiltrado.join(""));
  }

  getGroupMembers();
  getFullName("João", "Victor", "de", "Oliveira");
  transform();
  onlyNumbersFrom("5262462v!!!!!@---4j2^^ov427b3588b2v35v56");
}

start();
