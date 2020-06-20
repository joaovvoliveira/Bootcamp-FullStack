var globalNames = [
  'João Victor',
  'Patrícia Saretto',
  'Rui terra',
  'Elaine Teixeira',
];
isEditing = false;
var inputName = null;
var currentIndex = null;

function start() {
  preventFormSubmit();
  activeInput();
  render();
}
window.addEventListener('load', start);

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activeInput() {
  function insertName(newName) {
    globalNames.push(newName);
    inputName.value = '';
  }

  function updateName(newName) {
    globalNames[currentIndex] = newName;
  }

  function handleTyping(event) {
    if (event.key === 'Enter') {
      if (isEditing == false) {
        insertName(event.target.value);
      } else {
        updateName(event.target.value);
      }

      isEditing = false;
      render();
    }
  }

  function clearInput() {
    inputName.value = '';
  }

  inputName = document.querySelector('#inputName');
  inputName.focus();
  inputName.addEventListener('keyup', handleTyping);
}

function render() {
  var divNames = document.querySelector('#divNames');
  divNames.classList.add('center');
  divNames.innerHTML = '';
  var ul = document.createElement('ul');
  divNames.appendChild(ul);

  function createButton(index) {
    function deleteName() {
      globalNames.splice(index, 1);
      render();
    }

    var btn = document.createElement('button');
    btn.textContent = 'X';

    btn.addEventListener('click', deleteName);

    return btn;
  }

  function createSpan(nome, index) {
    function editItem() {
      isEditing = true;
      inputName.value = nome;
      inputName.focus();
      currentIndex = index;
    }
    var span = document.createElement('span');
    span.textContent = nomeAtual;

    span.addEventListener('click', editItem);

    return span;
  }

  for (var i = 0; i < globalNames.length; i++) {
    var nomeAtual = globalNames[i];

    var li = document.createElement('li');

    var button = createButton(i);
    var span = createSpan(nomeAtual, i);

    btn.classList.add('btnExcluir');
    span.classList.add('cursorP');

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }
}
