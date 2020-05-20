window.addEventListener('load', start);

var nomes = ['João', 'Maria', 'Tadeu', 'Rui'];

function start() {
  btnEnviar();
}

function btnEnviar() {
  var btn = document.querySelector('#btnEnviar');
  btn.addEventListener('click', validar);

  function validar(event) {
    var inputName = document.querySelector('#exampleInputEmail1');
    createList(inputName.value);
  }
  function createList(nome) {
    var div = document.createElement('div');
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    for (var i = 0; i < nomes.length; i++) {
      li = nomes[i].value;
      nomes.push(nome);
    }
    ul.appendChild(li);
    div.appendChild(ul);
  }
}
