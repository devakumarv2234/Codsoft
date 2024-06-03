document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', handleKeyPress);
});

function appendCharacter(character) {
    document.getElementById('display').innerText += character;
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function deleteCharacter() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}

function handleKeyPress(event) {
    const key = event.key;
    if (isFinite(key) || key === '.') {
        appendCharacter(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendCharacter(key);
    } else if (key === 'Enter') {
        event.preventDefault();
        calculateResult();
    } else if (key === 'Backspace') {
        deleteCharacter();
    } else if (key === 'Escape') {
        clearDisplay();
    }
}