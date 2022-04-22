var textInput = document.querySelector("#textInput");
var textOutput = document.querySelector("#textOutput");
console.log(textOutput)

var buttom = botaoCopia();
function criptografa(){

    console.log(textOutput);
    let text = textInput.value;
    let textSaida = text.replace(/e/g, 'enter')
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    console.log(textSaida);
    textOutput.textContent = textSaida;
};



function descriptografa(){
    
    let text = textInput.value;
    let textSaida = text.replace(/enter/g, 'e')
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    

    textOutput.textContent= textSaida;
};


var botaoCriptografa = document.querySelector("#botaoCriptografar");

var botaoDescriptografa = document.querySelector("#botaoDescriptografar");

botaoCriptografa.addEventListener("click", criptografa);
botaoDescriptografa.addEventListener("click", descriptografa);

