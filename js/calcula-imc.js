var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var trPacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < trPacientes.length; i++) {

    trPaciente = trPacientes[i];

    var tdPeso = trPaciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = trPaciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdIMC = trPaciente.querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if (!pesoEhValido) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdIMC.textContent = "Peso inválido";
        trPaciente.classList.add("paciente-invalido");
    }
    
    if (!alturaEhValida) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdIMC.textContent = "Altura inválida";
        trPaciente.classList.add("paciente-invalido");
    }
    
    if (alturaEhValida && pesoEhValido) {
        tdIMC.textContent = calculaIMC(peso, altura);
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3) {
        return true;
    } else {
        return false;
    }
}

function calculaIMC(peso, altura) {
    var imc= 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}