let currentInput = '';
let previousInput = '';
let operator = null;

function appendNumber(number) {
  if (number === '.' && currentInput.includes('.')) return;
  currentInput += number;
  updateDisplay();
}

function setOperator(op) {
  if (currentInput === '' && operator) {
    operator = op;
    updateDisplay();
    return;
  }
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  operator = op;
  previousInput = currentInput;
  currentInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay();
  clearResult();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculate() {
  if (!previousInput || !currentInput) return;
  let computation;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }

  showResult(computation);
  operator = null;
  previousInput = '';
  currentInput = '';
}

function updateDisplay() {
  const inputDisplay = document.getElementById('input-display');
  inputDisplay.textContent = `${previousInput} ${operator || ''} ${currentInput}`;
}

function showResult(result) {
  const resultDisplay = document.getElementById('result-display');
  resultDisplay.textContent = `= ${result}`;
}

function clearResult() {
  const resultDisplay = document.getElementById('result-display');
  resultDisplay.textContent = '';
}

function refreshPage() {
  location.reload();
}
