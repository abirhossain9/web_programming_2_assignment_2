// Hossain Md Abir - M24W0390



// Clearing the display
function clearResult() {
    document.getElementById("result").value = "";
}
// appending the result or inputs
function appendNumber(num) {
    document.getElementById("result").value += num;
}
// Appending the operator
function appendOperator(operator) {
    let currentValue = document.getElementById("result").value;
    if (currentValue !== "") {
        document.getElementById("result").value += operator;
    } else {
        alert("Enter a number before the operator");
    }
}





// Hossain Md Abir - M24W0390
// Calculating
function calculate() {
    let expression = document.getElementById("result").value;

    // Validating the expression
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        if (!(char >= '0' && char <= '9' || "+-*/^.".includes(char))) {
            alert("Invalid character in the expression");
            return;
        }
    }
    // trying to do calculations and if error occurs catching it and showing alert
    try {
        let result = eval(expression);
        document.getElementById("result").value = result;
    } catch (e) {
        alert("Invalid expression");
    }
}



// Hossain Md Abir - M24W0390
// Exponential calculation: x^y using eval
function calculateExponential() {
    let input = prompt("Enter base and exponent separated by '^' (For example 2^3):");
    if (input && input.includes("^")) {
        let [base, exponent] = input.split("^").map(Number);
        if (!isNaN(base) && !isNaN(exponent)) {
            let result = 1;
            for (let i = 0; i < exponent; i++) { // Use loop for power calculation
                result *= base;
            }
            document.getElementById("result").value = result;
        } else {
            alert("Invalid input");
        }
    } else {
        alert("Invalid format. Use base^exponent");
    }
}








// Hossain Md Abir - M24W0390
// Cube root calculation
function calculateCubeRoot() {
    let input = prompt("Enter a number to find the cube root:");
    let num = parseFloat(input);

    if (!isNaN(num) && num >= 0) {
         // cube root using Math.pow
        document.getElementById("result").value = Math.pow(num, 1 / 3);
    } else {
        alert("Please enter a valid non-negative number");
    }
}

// Logarithm calculation: log(x) using eval
function calculateLog() {
    let input = prompt("Enter a positive number for logarithm:");
    let num = parseFloat(input);
    if (!isNaN(num) && num > 0) {
        document.getElementById("result").value = Math.log(num); //math.log for logarithm
    } else {
        alert("Invalid input. Logarithm requires a positive number");
    }
}
