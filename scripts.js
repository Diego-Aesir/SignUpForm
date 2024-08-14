const buttonSend = document.querySelector("#sendForm");
const passwordInput = document.querySelector("#passwordLabel");
const confirmPasswordInput = document.querySelector("#confirmPasswordLabel");
const passwordText = document.querySelector(".passwordText");
const confirmPasswordText = document.querySelector(".confirmPassworText");

passwordText.className = "disabled";

buttonSend.addEventListener("click", validatePassword);

function validatePassword() {
    if(passwordInput.value === "") {
        passwordInput.className = "invalid";
        passwordText.innerHTML = "Escreva uma senha para este campo acima!";
        passwordText.className = "enabled";
    } else if(passwordInput.value != "" && confirmPasswordInput.value == "") {
        passwordText.innerHTML = "Por favor, confirme sua senha!";
        confirmPasswordText.className = "enabled"
        confirmPasswordInput.className = "invalid";
        passwordInput.className = "invalid";
    } else if (passwordInput.value != confirmPasswordInput.value) {
        passwordText.innerHTML = "Por favor, escreva a mesma senha nos campos!";
        confirmPasswordInput.className = "invalid";
        passwordInput.className = "invalid";
    } else {
        passwordText.className = "disabled";
        confirmPasswordInput.className = "valid";
        passwordInput.className = "valid";
        window.alert("Obrigado, este e o seu primeiro passo para o corpo perfeito");
    }
}