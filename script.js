const btns = document.querySelectorAll(".button");
const text = document.querySelector("p");
const buttons = Array.from(btns);
const equal = document.querySelector("#equals");
const clear = document.querySelector("#clear");

function addition(nOne, nTwo) {
    n = Number(nOne);
    nn = Number(nTwo);
    return n+nn;
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

let equation = (text.textContent).split(" ");
let numberOne = equation[0];
let op = equation[1];
let numberTwo = equation[2];

for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        let btn = buttons[i].textContent;

        if (btn == "*" || btn == "/" || btn == "+" || btn == "-") {
            text.textContent += " " + btn + " ";
        } else {
            text.textContent += btn;
        }

        equation = (text.textContent).split(" ");
        numberOne = equation[0];
        op = equation[1];
        numberTwo = equation[2];
    });
}

let result;

equal.addEventListener("click", () => {
    result = operate(numberOne, numberTwo, op);
    text.textContent = result;
});

clear.addEventListener("click", () => {
    
});

