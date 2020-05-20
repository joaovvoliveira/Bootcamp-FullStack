window.addEventListener('load',start)

var red = '177', green = '177', blue = '177'

function start(){
    
    pintarVermelho();
    pintarVerde();
    pintarAzul();
    colorir();
    prevenir();
    alterarFont();
    descerSubir();
}

function alterarFont(){
    var btn1 = document.querySelector('#btn1')
    btn1.addEventListener('click', alterarFonte)
    btn1.addEventListener('dblclick', voltarOriginal)

    function alterarFonte(event){
        var table = document.querySelector('#formu')
        event.target.value = 'Clique 2x'
        table.classList.add('alterarFonte')

    }
    function voltarOriginal(){
        var table = document.querySelector('#formu')
        event.target.value = 'Clique 1x'
        table.classList.remove('alterarFonte')
    }
}

function descerSubir(){
    var btn2 = document.getElementById('btn2')
    btn2.addEventListener('click', descer)
    btn2.addEventListener('dblclick', subir)
    var center = document.querySelector('#center')
    function descer(event){
        event.target.value = 'Subir(2x)'
        center.classList.add('arrastarParaBaixo')
    }

    function subir(event){
        event.target.value = 'Descer(1x)'
        center.classList.remove('arrastarParaBaixo')
        center.classList.add('arrastarParaCima')

    }


}

function prevenir(){
    function loader(event){
        event.preventDefault();
    }
    
    var form = document.querySelector('#formu')
    form.addEventListener('submit', loader)
}

function pintarVermelho(){
    var rangeRed = document.querySelector('#rangeRed')
    rangeRed.addEventListener('change', alterRed)

    function alterRed(event){
        var txtRed = document.querySelector('#textRed')
        txtRed.value = event.target.value;
        red = event.target.value;
        colorir();
    }

}

function pintarVerde(){
    var rangeGreen = document.querySelector('#rangeGreen')
    rangeGreen.addEventListener('change', alterGreen)

    function alterGreen(event){
        var txtGreen = document.querySelector('#textGreen')
        txtGreen.value = event.target.value;
        green = event.target.value;
        colorir();
    }
}

function pintarAzul(){
    var rangeBlue = document.querySelector('#rangeBlue')
    rangeBlue.addEventListener('change', alterBlue)

    function alterBlue(event){
        var txtBlue = document.querySelector('#textBlue')
        txtBlue.value = event.target.value;
        blue = event.target.value;
        colorir();
    }
}

function colorir(){
    var body = document.querySelector('body')
    body.style.backgroundColor = `rgb(${red},${green},${blue})`
}

