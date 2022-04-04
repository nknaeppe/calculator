const inputButtons = document.querySelectorAll(".button");
const display = document.querySelector("body > div > div > div > div.display > span");
let tempValue = 0;
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
function substract() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum -= arguments[i];
    }
    return sum;
}
function multiply() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum *= arguments[i];
    }
    return sum;
}function divide() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum /= arguments[i];
    }
    return sum;
}


function clear() {
    display.textContent = "";
}

function del() {
    let content = display.textContent;   
    display.textContent = content.slice(0, content.length - 1);
}

function calc(value, operand) {
        
}

function operate(button) {
    if (button >= 0 && button < 10 || button ==="Clear" || button === "Del") {
        updateDisplay(button);
    }
    else {
        calc(display.textContent, button)              
    }
    }

function updateDisplay(content) {
    if (content === "Del") {
        del();
    }
    else if (content === "Clear") {
        clear();
    }
    else {
        display.textContent += content;
    }
}

for (const button of inputButtons) {
    button.addEventListener('click', (e) => operate(e.target.textContent));
}
// inputButtons.addEventlistener("click", () => {console.log("Hello")})
