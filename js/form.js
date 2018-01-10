var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPaciente(form);

    var pacienteTR = montarTR(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
      exibeMensagensErro(erros);
      return;
    } 

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTR);

    form.reset();
});

function exibeMensagensErro(erros) {
  var ul = document.querySelector("#mensagens-erro");

  ul.innerHTML = "";
  
  erros.forEach(function(erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

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

function validaPaciente(paciente) {

  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser vazio");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("O peso é inválido!");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("A altura é inválida!");
  }

  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser vazio");
  }

  if (paciente.peso.length == 0) {
    erros.push("O peso não pode ser vazio");
  }

  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser vazio");
  }

  return erros;
}