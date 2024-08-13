const buttonSend = document.querySelector("#sendForm");
const passwordInput = document.querySelector("#passwordLabel");

console.log(passwordInput.value);

buttonSend.addEventListener("click", () => {
    if(passwordInput.value === "") {
        window.alert("Por favor, escreva uma senha");
    }
});

