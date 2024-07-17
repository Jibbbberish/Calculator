const btns = document.querySelectorAll(".button");
const text = document.querySelector("p");
const buttons = Array.from(btns);
const equal = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");

function addition(nOne, nTwo) {
    n = Number(nOne);
    nn = Number(nTwo);
    return n+nn;
}

function subtraction(nOne, nTwo) {
    n = Number(nOne);
    nn = Number(nTwo);
    return n-nn;
}

function multiplication(nOne, nTwo) {
    n = Number(nOne);
    nn = Number(nTwo);
    return n*nn;
}

function division(nOne, nTwo) {
    if (nTwo!=0) {
        n = Number(nOne);
        nn = Number(nTwo);
        return n/nn;
    } else {
        return "I think dividing by zero is a great idea!"
    }
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

let equation = [];
let numberOne;
let op;
let numberTwo;

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
        console.log(equation, equation.length);
    });
}

decimal.addEventListener("click", () => {
    text.textContent += ".";
});

let result;

equal.addEventListener("click", () => {
    result = (operate(numberOne, numberTwo, op));
    text.textContent = result;
});

clear.addEventListener("click", () => {
    text.textContent = null;
    numberOne = null;
    op = null;
    numberTwo = null;
    equation = [];
    result = null;
});
