const inputButtons = document.querySelectorAll(".button");
const display = document.querySelector("body > div > div > div > div.display > span");
let tempValue = 0;
let operation = "";

function add(a,b) {
    return a + b;
}
function substract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}


function clear() {
    display.textContent = "";
}

function del() {
    const content = display.textContent;   
    display.textContent = content.slice(0, content.length - 1);
}

function calc(value, operand) {
        
}

function operate(button) {
    if (button >= 0 && button < 10 || button ==="Clear" || button === "Del") {
        updateDisplay(button);
    }
    
    else if (button === "+" || button === "-" || button === "*" || button === "/" ) {
        tempValue = Number(display.textContent);
        clear();
        operation = button;
    }
    else if (button === "=") {
        let output = 0;
        const displayContent = Number(display.textContent);
        console.log(tempValue, displayContent)
        if (operation === "+")
        {
            output = add(tempValue, displayContent);
        }
        else if (operation === "-")
        {
            output = substract(tempValue, displayContent);
        }
        else if (operation === "*")
        {
            output = multiply(tempValue, displayContent);
        }
        else if (operation === "/")
        {
            output = divide(tempValue, displayContent);
        }
        clear();
        updateDisplay(output)
    }
    }

function updateDisplay(content) {
    if (content === "Del") {
        del();
    }
    else if (content === "Clear") {
        clear();
        tempValue = 0;
        operation = "";
    }
    else {
        display.textContent += content;
    }
}

for (const button of inputButtons) {
    button.addEventListener('click', (e) => operate(e.target.textContent));
}
// inputButtons.addEventlistener("click", () => {console.log("Hello")})
