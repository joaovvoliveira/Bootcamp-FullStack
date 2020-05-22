window.addEventListener('load', start);

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
  inputName = document.querySelector('#inputName');

  preventFormSubmit();
  activeInput();
  render();
}

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
    render();
  }
  function updateName(newName) {
    globalNames[currentIndex] = newName;
    render();
  }

  function handleTyping(event) {
    if (event.key === 'Enter') {
      if (isEditing) {
        updateName(event.target.value);
      } else {
        insertName(event.target.value);
        clearInput();
      }

      isEditing = false;
    }
  }
  function clearInput() {
    inputName.value = '';
  }
  inputName.focus();
  inputName.addEventListener('keyup', handleTyping);
}

function render() {
  var divNames = document.querySelector('#divNames');
  divNames.classList.add('center');
  divNames.innerHTML = '';
  var ul = document.createElement('ul');

  function createButton(index) {
    function deleteName() {
      globalNames.splice(index, 1);
      render();
    }

    var btn = document.createElement('button');
    btn.textContent = 'X';
    btn.classList.add('btnExcluir');

    btn.addEventListener('click', deleteName);

    return btn;
  }

  function createSpan(nome, index) {
    function editItem() {
      inputName.value = nome;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }
    var span = document.createElement('span');
    span.textContent = nomeAtual;
    span.classList.add('cursorP');

    span.addEventListener('click', editItem);

    return span;
  }

  for (var i = 0; i < globalNames.length; i++) {
    var nomeAtual = globalNames[i];
    var li = document.createElement('li');

    var button = createButton(i);
    var span = createSpan(nomeAtual, i);

    li.appendChild(button);
    li.appendChild(span);

    ul.appendChild(li);
  }
  divNames.appendChild(ul);
}
