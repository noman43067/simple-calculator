function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === "Start Calculating" || display.value === "Error") {
        display.value = value; 
    } else {
        display.value += value; 
    }
}

function clearDisplay() {
    document.getElementById('display').value = "Start Calculating"; 
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value) || "0"; 
    } catch (error) {
        display.value = "Error"; 
    }
}
