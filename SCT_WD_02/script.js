function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}

// Handle keyboard input
document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        appendToDisplay(event.key);
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculateResult();
    } else if (event.key === 'Backspace') {
        clearDisplay();
    }
});