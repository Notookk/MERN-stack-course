const passlength = document.getElementById('length');
const includeUppercase = document.getElementById('include-uppercase');
const includeLowercase = document.getElementById('include-lowercase');
const includeNumbers = document.getElementById('include-numbers');
const includeSpecial = document.getElementById('include-special');
const generatedPassword = document.getElementById('generated-password');
const passwordForm = document.getElementById('password-form');

const charset = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    special: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

function generatePassword(event) {
    if (event) {
        event.preventDefault();
    }

    const length = parseInt(passlength.value);
    if (!length || length < 4 || length > 50) {
        alert('Please enter a valid password length between 4 and 50.');
        return;
    }

    let characters = '';
    if (includeUppercase.checked) characters += charset.uppercase;
    if (includeLowercase.checked) characters += charset.lowercase;
    if (includeNumbers.checked) characters += charset.numbers;
    if (includeSpecial.checked) characters += charset.special;

    if (characters.length === 0) {
        alert('Please select at least one character type.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    generatedPassword.innerText = password;
}
passwordForm.addEventListener('submit', generatePassword);