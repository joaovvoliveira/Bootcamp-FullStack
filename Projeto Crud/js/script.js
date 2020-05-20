window.addEventListener('load', start)

var globalNames = ['João','Maria','Pedro','Laura','Plínio']
var inputName = null;
var isEditing = false;
var currentIndex = null;

function start(){
    inputName = document.querySelector('#inputName')
    
    preventFormSubmit();
    activeInput();
    render();
}

function preventFormSubmit(){
    function prevencao(event){
        event.preventDefault();
    }

    var form = document.querySelector('form')
    form.addEventListener('submit', prevencao)
}

function updateName(newName){
    globalNames[currentIndex] = newName;
}

function activeInput(){

    function insertName(newName){
        globalNames.push(newName)
    }

    function handleTyping(event){
        if(event.key === 'Enter'){
            if(isEditing){
                updateName(event.target.value)
            }else{    
                insertName(event.target.value);
                clearInput();
            }
            
            render()
            isEditing = false;
            clearInput();
        }
    }
    inputName.focus();
    inputName.addEventListener('keyup', handleTyping)
}

function clearInput(){
    inputName.value = '';
    inputName.focus();
}

function render(){
    function createButton(index){
        function deleteName(){
            globalNames.splice(index,1);
            render();
        }
        var button = document.createElement('button')
        button.textContent = 'x';
        button.classList.add('btnDeletar')

        button.addEventListener('click', deleteName)
        return button;
    }

    function createSpan(newName, index){
        function editItem(){
            inputName.value = newName;
            inputName.focus();
            isEditing = true;
            currentIndex = index;
        }
        var span = document.createElement('span')
        span.textContent = newName;
        span.classList.add('clicavel')

        span.addEventListener('click', editItem);

        return span
    }

    var divNames = document.querySelector('#nomes')
    divNames.innerHTML = '';

    var ul = document.createElement('ul')
    
    for(var i =0; i < globalNames.length;i++){
        var currentName = globalNames[i];

        var li = document.createElement('li')
        var button = createButton(i);
        var span = createSpan(currentName, i);

        li.appendChild(button)
        li.appendChild(span)

        ul.appendChild(li);
    }

    divNames.appendChild(ul)
}