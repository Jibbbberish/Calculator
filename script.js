let nOne;
let operator;
let nTwo;
const btns = document.querySelectorAll(".button");
const text = document.querySelector("p");
const buttons = Array.from(btns);

function addition(nOne, nTwo) {
    return nOne+nTwo;
}

function subtraction(nOne, nTwo) {
    return nOne-nTwo;
}

function multiplication(nOne, nTwo) {
    return nOne*nTwo;
}

function division(nOne, nTwo) {
    return nOne/nTwo;
}

function operate(nOne, nTwo, operator) {
    switch (operator) {
        case "+":
            return addition(nOne, nTwo);
        case "-":
            return subtraction(nOne, nTwo);
        case "*":
            return multiplication(nOne, nTwo);
        case "/":
            return division(nOne, nTwo);
    }
}

let equation = text.textContent;

for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        text.textContent += buttons[i].textContent + " "; 
        equation = text.textContent;
    });
}
