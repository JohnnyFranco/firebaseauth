// Obtém os elementos de botão e formulários de login/cadastro
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signUpForm = document.getElementById('signUp');
const signInForm = document.getElementById('signIn');

//Quando o botão de cadastro é clicado, esconde o formulário de login e mostra o de cadastro
signUpButton.addEventListener('click', function() {
    signInForm.style.display = "none";
    signUpForm.style.display = "block"
});

// Quando o botão de login é clicado, esconde o dormulário de cadatstro e mostra o de cadastro
signInButton.addEventListener('click', function() {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
});