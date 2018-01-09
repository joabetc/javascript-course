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
    
  var nomeTD = document.createElement("td");
  var pesoTD = document.createElement("td");
  var alturaTD = document.createElement("td");
  var gorduraTD = document.createElement("td");
  var imcTD = document.createElement("td");

  nomeTD.textContent = paciente.nome;
  pesoTD.textContent = paciente.peso;
  alturaTD.textContent = paciente.altura;
  gorduraTD.textContent = paciente.gordura;
  imcTD.textContent = paciente.imc;

  pacienteTR.appendChild(nomeTD);
  pacienteTR.appendChild(pesoTD);
  pacienteTR.appendChild(alturaTD);
  pacienteTR.appendChild(gorduraTD);
  pacienteTR.appendChild(imcTD);

  return pacienteTR;
}