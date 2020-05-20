window.addEventListener('load', start)

globalNomes = ['João', 'Victor', 'Patrícia', 'Larissa']
var input = null;
var convert = null;
var isEditing = false;
var indexAtual = null;

function start(){

    prevencao();
    ativarInput();
    render();
}    

function prevencao(){
    function prevenir(event){
        event.preventDefault();
    }
    var form = document.querySelector('form')
    form.addEventListener('submit', prevenir)
}

function ativarInput(){

    function adicionarNome(novoNome){
        globalNomes.push(novoNome)
        input.value = "";
        alert('Nome Adicionado com sucesso')
    }

    function updateName(novoNome){
        globalNomes[indexAtual] = novoNome;
    }

    function handleTyping(event){
        if(event.key === 'Enter' && input.value != ''){
            if(isEditing == false){
                var nomeAdicionar = event.target.value;
                adicionarNome(nomeAdicionar);
            }
            else{
                var nomeAdicionar = event.target.value;
                updateName(nomeAdicionar)
            }
            
            isEditing = false;
            render()
        } 

    }

    input = document.querySelector('#inputName');
    input.focus();
    input.addEventListener('keyup', handleTyping)
}

function render(){

    var nomes = document.querySelector('#nomes')
    nomes.innerHTML = ""
    var ul = document.createElement('ul')
    nomes.appendChild(ul)

    function createButton(index){
        function excluir(){
            globalNomes.splice(index, 1)
            render();
        }
        var button = document.createElement('button')
        button.textContent = 'x';

        button.addEventListener('click', excluir)

        return button
    }

    function createSpan(nomeAtual, index){
        function editItem(){
            isEditing = true;
            input.value = nomeAtual;
            input.focus();
            indexAtual = index
        }

        var span = document.createElement('span')
        span.textContent = nomeAtual

        span.addEventListener('click', editItem)

        return span
    }

    for(var i = 0; i < globalNomes.length; i++){
        var nomeAtual = globalNomes[i];
        
        var li = document.createElement('li');
        
        var button = createButton(i);
        var span = createSpan(nomeAtual, i);

        span.classList.add('clicavel')
        button.classList.add('btnDeletar')

        li.appendChild(button)
        li.appendChild(span)
        ul.appendChild(li);
    }


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
}
