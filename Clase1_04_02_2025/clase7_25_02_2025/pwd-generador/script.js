const rangeElement = document.getElementById("range"); //
const pwdGenerado = document.getElementById("pwd-generated"); //
const displayLength = document.getElementById("show-length"); //
const btnGenerar = document.getElementById("buttonGenerar"); //
const uppercaseInputElement = document.getElementById("include-uppercase");
const lowercaseInputElement = document.getElementById("include-lowercase");
const numbersInputElement = document.getElementById("include-numbers");
const symbolsInputElement = document.getElementById("include-symbols");
const copyIcon = document.querySelector(".fa fa-copy");

const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const numbersCharacters = "0123456789";
const symbolsCharacters = "!@#$%&+-.(){}?*";

let passwordLength = rangeElement.value;
let allowedCharacters = "";
displayLength.textContent = passwordLength;

const setPasswordLength = event => {
    passwordLength = event.target.value;
    displayLength.textContent = passwordLength;
}

const printPassword = password => {
    pwdGenerado.value = password;
};

const setDisabledBtn = () => {
    if (allowedCharacters.length) {
        btnGenerar.disabled = false;
    } else {
        btnGenerar.disabled = true;
    }
};

const checkPasswordOptions = () => {
    allowedCharacters = "";
    if (uppercaseInputElement.checked) {
        allowedCharacters += uppercaseCharacters;
    }
    if (lowercaseInputElement.checked) {
        allowedCharacters += lowercaseCharacters;
    }
    if (numbersInputElement.checked) {
        allowedCharacters += numbersCharacters;
    }
    if (symbolsInputElement.checked) {
        allowedCharacters += symbolsCharacters;
    }

    setDisabledBtn();
    return allowedCharacters;
}

const genPassword = () => {
    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
        const randomCharacter = allowedCharacters.charAt(randomIndex);
        newPassword += randomCharacter;
    }
    printPassword(newPassword);
}

rangeElement.addEventListener("input", setPasswordLength);
btnGenerar.addEventListener("click", genPassword);

uppercaseInputElement.addEventListener("change", checkPasswordOptions);
lowercaseInputElement.addEventListener("change", checkPasswordOptions);
numbersInputElement.addEventListener("change", checkPasswordOptions);
symbolsInputElement.addEventListener("change", checkPasswordOptions);

