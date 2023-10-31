let currentValue = '';
let operator = '';
let result = 0;

function clearDisplay() {
    document.getElementById('display').value = '';
    currentValue = '';
    operator = '';
    result = 0;
}

function appendToDisplay(value) {
    currentValue += value;
    document.getElementById('display').value = currentValue;
}

function calculateResult() {
    if (currentValue !== '') {
        switch (operator) {
            case '+':
                result += parseFloat(currentValue);
                break;
            case '-':
                result -= parseFloat(currentValue);
                break;
            case '*':
                result *= parseFloat(currentValue);
                break;
            case '/':
                result /= parseFloat(currentValue);
                break;
            default:
                result = parseFloat(currentValue);
        }
        document.getElementById('display').value = result;
        currentValue = '';
    }
    operator = '';
}

function setOperator(op) {
    operator = op;
}