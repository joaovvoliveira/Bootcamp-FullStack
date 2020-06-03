function start() {
  async function brasil() {
    const res = await fetch(
      "https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Estados.json"
    );
    const json = await res.json();
    const estados = json.map((estado) => {
      const { ID, Sigla, Nome } = estado;
      return {
        idEstado: ID,
        siglaEstado: Sigla,
        nomeEstado: Nome,
      };
    });

    const result = await fetch(
      "https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Cidades.json"
    );
    const jsons = await result.json();
    const cidades = jsons.map((cidade) => {
      const { ID, Nome, Estado } = cidade;
      return {
        idCidade: ID,
        nomeCidade: Nome,
        estadoCidade: Estado,
      };
    });

    const destructurin = [...estados, ...cidades];

    console.log(destructurin);
    const brasil = destructurin
      .map((element) => {
        const {
          siglaEstado,
          idEstado,
          estadoCidade,
          nomeEstado,
          nomeCidade,
          idCidade,
        } = element;
        return {
          siglaEstado: siglaEstado,
          idEstado: idEstado,
          estadoCidade: estadoCidade,
          nomeEstado,
          nomeCidade,
          idCidade,
        };
      })
      .filter((teste) => {
        return teste.estadoCidade === "1";
      });
    console.log(brasil);
  }
  brasil();
}

start();
