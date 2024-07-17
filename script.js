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

let nOne;
let operator;
let nTwo;

function operate(nOne, operator, nTwo) {
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