var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPaciente(form);

    var pacienteTR = montarTR(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTR);

    form.reset();
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

  pacienteTR.appendChild(montarTD(paciente.nome, "info-nome"));
  pacienteTR.appendChild(montarTD(paciente.peso, "info-peso"));
  pacienteTR.appendChild(montarTD(paciente.altura, "info-altura"));
  pacienteTR.appendChild(montarTD(paciente.gordura, "info-gordura"));
  pacienteTR.appendChild(montarTD(paciente.imc, "info-imc"));

  return pacienteTR;
}

function montarTD(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}