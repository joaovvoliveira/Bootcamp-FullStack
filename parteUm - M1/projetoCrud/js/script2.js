window.addEventListener('load', () => {
  prevencao();
  ativarInput();
  render();
});

const globalNomes = ['João', 'Victor', 'Patrícia', 'Larissa'];

let input = null;
let convert = null;
let isEditing = false;
let indexAtual = null;

prevencao = () => {
  prevenir = (event) => {
    event.preventDefault();
  };
  var form = document.querySelector('form');
  form.addEventListener('submit', prevenir);
};

ativarInput = () => {
  adicionarNome = (novoNome) => {
    // globalNomes.push(novoNome);
    globalNomes = [...globalNomes, novoNome];
    input.value = '';
    alert('Nome Adicionado com sucesso');
  };
};

updateName = (novoNome) => {
  globalNomes[indexAtual] = novoNome;
};

handleTyping = (event) => {
  if (event.key === 'Enter' && input.value != '') {
    if (isEditing == false) {
      var nomeAdicionar = event.target.value;
      adicionarNome(nomeAdicionar);
    } else {
      var nomeAdicionar = event.target.value;
      updateName(nomeAdicionar);
    }

    isEditing = false;
    render();
  }
};

input = document.querySelector('#inputName');
input.focus();
input.addEventListener('keyup', handleTyping);

render = () => {
  var nomes = document.querySelector('#nomes');
  nomes.innerHTML = '';
  var ul = document.createElement('ul');
  nomes.appendChild(ul);

  createButton = (index) => {
    excluir = () => {
      // globalNomes.splice(index, 1);
      globalNomes = globalNomes.filter((name, i) => {
        //   // if ( i === index){
        //   //   return false;
        //   // }
        //   // return true;
        return i !== index;
      });
      render();
    };
    var button = document.createElement('button');
    button.textContent = 'x';

    button.addEventListener('click', excluir);

    return button;
  };

  createSpan = (nomeAtual, index) => {
    editItem = () => {
      isEditing = true;
      input.value = nomeAtual;
      input.focus();
      indexAtual = index;
    };

    var span = document.createElement('span');
    span.textContent = nomeAtual;

    span.addEventListener('click', editItem);

    return span;
  };

  for (var i = 0; i < globalNomes.length; i++) {
    var nomeAtual = globalNomes[i];

    var li = document.createElement('li');

    var button = createButton(i);
    var span = createSpan(nomeAtual, i);

    span.classList.add('clicavel');
    button.classList.add('btnDeletar');

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }
};

/*
    var ul = document.createElement('ul')
    var li1 = document.createElement('li')
    var li2 = document.createElement('li')
    li1.textContent = 'Pessoa'
    li2.textContent = 'Alien'

    ul.appendChild(li1)
    ul.appendChild(li2)
    nomes.appendChild(ul)
*/
