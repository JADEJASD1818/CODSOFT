function appendToDisplay(value) {
    var display = document.getElementsByName('display')[0];
    display.value += value;
}

function clearDisplay() {
    var display = document.getElementsByName('display')[0];
    display.value = '';
}

function deleteLast() {
    var display = document.getElementsByName('display')[0];
    display.value = display.value.toString().slice(0,-1);
}

function calculateResult() {
    var display = document.getElementsByName('display')[0];
    display.value = eval(display.value);
}
