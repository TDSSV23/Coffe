const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const nextStepButton = document.getElementById('nextStep');
const prevStepButton = document.getElementById('prevStep');
const formStep1 = document.getElementById('form-step-1');
const formStep2 = document.getElementById('form-step-2');

// Alterna para a próxima etapa do formulário
nextStepButton.addEventListener('click', () => {
    formStep1.classList.add('hidden');
    formStep2.classList.remove('hidden');
});

// Alterna de volta para a primeira etapa do formulário
prevStepButton.addEventListener('click', () => {
    formStep2.classList.add('hidden');
    formStep1.classList.remove('hidden');
});

// Lógica de alternância entre telas de login e criar conta
signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Supondo que você tenha uma referência ao contêiner e ao painel de login e registro
const completeRegistrationBtn = document.getElementById('complete-registration');
const container = document.querySelector('.container');

completeRegistrationBtn.addEventListener('click', () => {
  container.classList.remove('right-panel-active');  // Remove a classe que mostra o painel de registro
});



// Função para ir para o painel de criar conta
signInButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

// Função para voltar ao painel "Hello"
completeRegistrationBtn.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});



signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active'); // Remove a classe para voltar ao painel "Welcome"
});

