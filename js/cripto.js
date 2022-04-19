var textDescriptado = document.querySelector("#textInput");
var textEncriptado = document.querySelector("#textOutput");
function criptografa(){

    let text = textDescriptado.value;
    let textSaida = text.replace(/e/g, 'enter')
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    textEncriptado.value = textSaida;
};

function descriptografa(){
    
    let text = textEncriptado.value;
    let textSaida = text.replace(/enter/g, 'e')
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    

    textDescriptado.value = textSaida;
};

var botaoCriptografa = document.querySelector("#botaoCriptografar");

var botaoDescriptografa = document.querySelector("#botaoDescriptografar");

botaoCriptografa.addEventListener("click", criptografa);
botaoDescriptografa.addEventListener("click", descriptografa);