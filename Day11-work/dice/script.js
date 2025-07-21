function rollDice() {
    const allDiceFaces = document.querySelectorAll('.dice-face');
    allDiceFaces.forEach(face => {
        face.style.display = 'none';
    });
    
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    const selectedDice = document.getElementById(`dice-${randomNumber}`);
    selectedDice.style.display = 'block';
    
    const resultNumber = document.getElementById('result-number');
    resultNumber.textContent = randomNumber;
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Enter' || event.code === 'Space') {
        event.preventDefault();
        rollDice();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Dice Roller loaded successfully!');
    
    const allDiceFaces = document.querySelectorAll('.dice-face');
    allDiceFaces.forEach((face, index) => {
        face.style.display = index === 0 ? 'block' : 'none';
    });
});