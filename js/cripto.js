var textInput = document.querySelector("#textInput");
var textOutput = document.querySelector("#textOutput");



function criptografa(){
    let text = textInput.value;
    let textSaida = text.replace(/e/g, 'enter')
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    var p = document.createElement("p");
    textOutput.appendChild(p);
    p.textContent = textSaida;

};
console.log(textOutput)


function descriptografa(){
    
    let text = textInput.value;
    let textSaida = text.replace(/enter/g, 'e')
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    

    var p = document.createElement("p");
    textOutput.appendChild(p);
    p.textContent = textSaida;
};


var botaoCriptografa = document.querySelector("#botaoCriptografar");

var botaoDescriptografa = document.querySelector("#botaoDescriptografar");

botaoCriptografa.addEventListener("click", criptografa);
botaoDescriptografa.addEventListener("click", descriptografa);

