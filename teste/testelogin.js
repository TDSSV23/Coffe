const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const nextStepButton = document.getElementById('nextStep');
const prevStepButton = document.getElementById('prevStep');
const formStep1 = document.getElementById('form-step-1');
const formStep2 = document.getElementById('form-step-2');
const nextStep2Button = document.getElementById('nextStep2'); // Botão para ir para a terceira etapa
const prevStep2Button = document.getElementById('prevStep2'); // Botão para voltar da terceira etapa

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

const formStep3 = document.getElementById('form-step-3');

// Alterna para a próxima etapa (da etapa 1 para a etapa 2)
nextStepButton.addEventListener('click', () => {
	formStep1.classList.add('hidden');
	formStep2.classList.remove('hidden');
});

// Alterna para a terceira etapa (da etapa 2 para a etapa 3)
nextStep2Button.addEventListener('click', () => {
	formStep2.classList.add('hidden');
	formStep3.classList.remove('hidden');
});

// Volta para a segunda etapa (da etapa 3 para a etapa 2)
prevStep2Button.addEventListener('click', () => {
	formStep3.classList.add('hidden');
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

// Função para completar o registro
completeRegistrationBtn.addEventListener('click', () => {
	container.classList.remove('right-panel-active');  // Remove a classe que mostra o painel de registro
});

// Lista de países
const countries = [
	"Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria",
	"Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
	"Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
	"Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
	"Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
	"Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
	"Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
	"Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
	"Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
	"Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
	"Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
	"Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
	"Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
	"North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay",
	"Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
	"Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
	"Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
	"South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
	"Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
	"Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
	"Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

// Preencher o select de países
const countrySelect = document.getElementById("country");

countries.forEach(country => {
	const option = document.createElement("option");
	option.value = country;
	option.textContent = country;
	countrySelect.appendChild(option);
});
