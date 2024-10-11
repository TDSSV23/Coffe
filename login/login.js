// Seleciona os elementos do DOM
const createAccountBtn = document.getElementById('createAccountBtn');
const signInBtn = document.getElementById('signInBtn');
const container = document.getElementById('container');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const welcomeSection = document.getElementById('welcome-section');

// Função para alternar para a página de cadastro
createAccountBtn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
    createAccountBtn.classList.add('d-none');
    signInBtn.classList.remove('d-none');
});

// Função para voltar para a página de login
signInBtn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
    signInBtn.classList.add('d-none');
    createAccountBtn.classList.remove('d-none');
});
