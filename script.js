function validateForm() {
  var nameInput = document.querySelector("#name").value;
  var emailInput = document.querySelector("#email").value;
  var phoneInput = document.querySelector("#phone").value;

  validateName(nameInput);
  validateEmail(emailInput);
  validatePhone(phoneInput);

  if (
    validateName(nameInput) &&
    validateEmail(emailInput) &&
    validatePhone(phoneInput) == true
  ) {
    return window.alert("Formulário enviado!");
  }
}

function validateName(nome) {
  //Função para validar o nome
  const regNome = /^[A-Za-z ]+$/; //Expressão regular do nome

  if (nome.match(regNome)) {
    return true;
  } else {
    return window.alert(
      nome + " possui outros caractéres além de letras e espaços."
    );
  }
}

function validateEmail(email) {
  //Função para validar o e-mail
  const regEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i; //Expressão regular do e-mail

  if (email.match(regEmail)) {
    return true;
  } else {
    return window.alert(email + " não é um e-mail válido.");
  }
}

function validatePhone(phone) {
  //Função para validar o telefone
  const regPhone =
    /^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/; //Expressão regular dp telefone

  if (phone.match(regPhone)) {
    return true;
  } else {
    return window.alert("O telefone " + phone + " não é válido.");
  }
}
