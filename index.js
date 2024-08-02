const passwordLengthSlider = document.getElementById("password-length-slider");
const lengthValue = document.getElementById("length-value");

// password length slider listener
passwordLengthSlider.addEventListener('input', function() {
    lengthValue.textContent = this.value;
    givePasswords()
});

// load fresh password immediately on page refresh/visit
givePasswords()

// copy to clipboard listener
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.password').forEach(field => {
        field.addEventListener('click', function() {
            const tempInput = document.createElement('input');
            tempInput.value = this.textContent || this.innerText;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
        });
    });
});

function givePasswords() {
    let passwordOneEl = document.getElementById("password-one")
    let passwordTwoEl = document.getElementById("password-two")

    const length = document.getElementById("password-length-slider").value;
    const includeUppercase = document.getElementById("include-uppercase").checked;
    const includeLowercase = document.getElementById("include-lowercase").checked;
    const includeNumbers = document.getElementById("include-numbers").checked;
    const includeSymbols = document.getElementById("include-symbols").checked;

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let chars = "";
    
    if (includeUppercase) chars += uppercase;
    if (includeLowercase) chars += lowercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (chars === "") {
        alert('Please select at least one character type');
        return;
    }

    const generatePassword = () => {
        let password = "";
        for (let counter = 0; counter < length; counter++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    };

    
    passwordOneEl.textContent = generatePassword()
    passwordTwoEl.textContent = generatePassword()
}




