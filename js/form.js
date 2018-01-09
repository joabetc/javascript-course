var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPaciente(form);

    var pacienteTR = montarTR(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTR);
});

function obtemPaciente(form) {

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(peso, altura)
  }

  return paciente;
}

function montarTR(paciente) {
  var pacienteTR = document.createElement("tr");
  pacienteTR.classList.add("paciente");
    
  var nomeTD = montarTD(paciente.nome, "info-nome");
  var pesoTD = montarTD(paciente.peso, "info-peso");
  var alturaTD = montarTD(paciente.altura, "info-altura");
  var gorduraTD = montarTD(paciente.gordura, "info-gordura");
  var imcTD = montarTD(paciente.imc, "info-imc");

  pacienteTR.appendChild(nomeTD);
  pacienteTR.appendChild(pesoTD);
  pacienteTR.appendChild(alturaTD);
  pacienteTR.appendChild(gorduraTD);
  pacienteTR.appendChild(imcTD);

  return pacienteTR;
}

function montarTD(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}