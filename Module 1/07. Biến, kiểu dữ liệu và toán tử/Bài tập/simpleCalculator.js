function addition() {
    let first = document.getElementById('firstNumber').value;
    let second = document.getElementById('secondNumber').value;
    let result = parseFloat(first) + parseFloat(second);
    alert('Result: ' + result)
}
function subtraction() {
    let first = document.getElementById('firstNumber').value;
    let second = document.getElementById('secondNumber').value;
    let result = parseFloat(first) - parseFloat(second);
    alert('Result: ' + result);
}
function multiplication() {
    let first = document.getElementById('firstNumber').value;
    let second = document.getElementById('secondNumber').value;
    let result = parseFloat(first) * parseFloat(second);
    alert('Result: ' + result);
}
function division() {
    let first = document.getElementById('firstNumber').value;
    let second = document.getElementById('secondNumber').value;
    let result = parseFloat(first) / parseFloat(second);
    alert('Result: ' + result);
}
