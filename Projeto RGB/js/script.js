window.addEventListener('load', start)

function start(){
    var rangeRed = document.querySelector('#rangeRed')
    rangeRed.addEventListener('change', alteracaoRed)
    
    var rangeGreen = document.querySelector('#rangeGreen')
    rangeGreen.addEventListener('change', alteracaoGreen)
    
    var rangeBlue = document.querySelector('#rangeBlue')
    rangeBlue.addEventListener('change', alteracaoBlue)    
}

function alteracaoRed(event){
    var textRed = document.querySelector('#textRed')
    textRed.value = event.target.value
}

function alteracaoGreen(event){
    var textGreen = document.querySelector('#textGreen')
    textGreen.value = event.target.value;
}
    
function alteracaoBlue(event){
    var textBlue = document.querySelector('#textBlue')
    textBlue.value = event.target.value;
}





