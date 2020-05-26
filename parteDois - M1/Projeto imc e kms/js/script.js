window.addEventListener("load", () => {
  carregarFormIMC();
  carregarFormKM();
  calculoIMC();
  calculoKM();
  mostrarTabela();
});
// --> Inicio do Calculo IMC
function calculoIMC() {
  var btn2 = document.getElementById("btnCalculoImc");
  btn2.addEventListener("click", calcular);
  btn2.addEventListener("dblclick", limpar);
  const nome = document.querySelector("#txtNome");
  const peso = document.querySelector("#txtPeso");
  const altura = document.querySelector("#txtAltura");
  const divResultado = document.querySelector("#resultadoImc");

  function calcular(event) {
    if (nome.value === "" || peso.value === "" || altura.value === "") {
      alert("Preencha corretamente");
    } else {
      event.target.value = "Limpar";
      const result = peso.value / (altura.value * 2);
      divResultado.classList.add("result");
      divResultado.textContent = `${nome.value}, seu IMC é de: ${result.toFixed(
        2
      )}`;
    }
  }
  function limpar(event) {
    console.log(event);
    nome.value = "";
    peso.value = "";
    altura.value = "";
    divResultado.textContent = "";
    event.target.value = "Calcular Novamente";
  }
} // <-- Fim do Calculo IMC

// --> Adicionando a info do IMC
function mostrarTabela() {
  const tabela = document.querySelector("#tabela");
  const info = document.querySelector("#info");
  info.addEventListener("click", showTable);
  info.addEventListener("dblclick", ocultar);
  function showTable(event) {
    tabela.classList.remove("active");
    event.target.title = "Clique 2x para Ocultar";
  }
  function ocultar(event) {
    tabela.classList.add("active");
    event.target.title = "Clique para mais informações";
  }
}
// <-- Final das Infos IMC

// --> Inicio do Calculo de Kms
function calculoKM() {
  var btnKm = document.querySelector("#btnCalculoKm");
  btnKm.addEventListener("click", calcular);
  btnKm.addEventListener("dblclick", limpar);
  const modelo = document.querySelector("#txtVeiculo");
  const km = document.querySelector("#txtKm");
  const distancia = document.querySelector("#txtDistancia");
  const divKm = document.querySelector("#resultadoKm");

  function calcular(event) {
    if (modelo.value === "" || km.value === "" || distancia.value === "") {
      alert("Digite corretamente os dados");
    } else {
      event.target.value = "Limpar";
      const result = distancia.value / km.value;
      divKm.classList.add("result");
      divKm.textContent = `Seu carro ${
        modelo.value
      }, precisa de ${result.toFixed(2)} litros para concluir a viagem.`;
    }
  }

  function limpar(event) {
    modelo.value = "";
    km.value = "";
    distancia.value = "";
    divKm.textContent = "";
    event.target.value = "Calcular novamente";
  }
}
// <--Fim do Calculo de Kms

// --> Removendo Atividades padrões dos formulários
function carregarFormIMC() {
  function preventIMC(event) {
    event.preventDefault();
  }
  const form1 = document.querySelector("#formIMC");
  form1.addEventListener("submit", preventIMC);
}
function carregarFormKM() {
  function preventKM(event) {
    event.preventDefault();
  }
  const form2 = document.querySelector("#formKM");
  form2.addEventListener("submit", preventKM);
}
