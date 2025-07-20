let display = document.getElementById('result');
let currentInput = '';

function appendToDisplay(value) {
    if (value === '*') {
        currentInput += '*';
        display.value += '×';
    } else if (value === '/') {
        currentInput += '/';
        display.value += '÷';
    } else {
        currentInput += value;
        display.value += value;
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (currentInput === '') return;
        
        let result = eval(currentInput);
        
        if (result === Infinity || result === -Infinity) {
            display.value = 'Error';
            currentInput = '';
            return;
        }
        
        if (result % 1 !== 0) {
            result = parseFloat(result.toFixed(8));
        }
        
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-') {
        appendToDisplay(key);
    } else if (key === '*') {
        appendToDisplay('*');
    } else if (key === '/') {
        event.preventDefault();
        appendToDisplay('/');
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    }
});
