const passwordInput = document.getElementById('password');
const checkButton = document.getElementById('checkStrength');
const resultDiv = document.getElementById('result');

function checkPassword() {
    const password = passwordInput.value;
    
    if (!password) {
        resultDiv.innerHTML = '';
        return;
    }
    
    let score = 0;
    
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[!@#$%^&*]/.test(password)) score++;
    
    let strength = '';
    let color = '';
    
    if (score <= 2) {
        strength = 'Weak';
        color = 'red';
    } else if (score <= 4) {
        strength = 'Medium';
        color = 'orange';
    } else {
        strength = 'Strong';
        color = 'green';
    }
    
    resultDiv.innerHTML = `<div style="color: ${color}; font-weight: bold;">${strength} Password</div>`;
}

checkButton.onclick = checkPassword;
passwordInput.oninput = checkPassword;
