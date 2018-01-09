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
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdIMC.textContent = "Peso inválido";
        trPaciente.classList.add("paciente-invalido");
    }
    
    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida");
        alturaEhValida = false;
        tdIMC.textContent = "Altura inválida";
        trPaciente.classList.add("paciente-invalido");
    }
    
    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdIMC.textContent = imc.toFixed(2);
    }
}

titulo.addEventListener("click", mostraMensagem());

function mostraMensagem() {
    console.log("Olá eu fui clicado!");
}