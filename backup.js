//alert("js connected")

// 
let x_var = [2, 3, 6, 7, 9];
let y_var = [15, 39, 243, 375, 771];

xValueInputEl = document.getElementById("x_values")
yValueInputEl = document.getElementById("y_values")

yValue = document.getElementById("yValue_El")
xValue = document.getElementById("xValue_El")
let calcInterEl = document.getElementById("calcInter")
numberToCheckEl = document.getElementById("numberToCheck_El")



xValue.onclick = inputXValue
yValue.onclick = inputYValue
calcInterEl.onclick = calculateInterpolation

function inputXValue() {
    if(xValueInputEl.value != "") {
x_var.push(xValueInputEl.value)
let xNewValue = xValueInputEl.value
xValueInputEl.value = ""
alert(xNewValue)
alert(x_var.length)
} else {
    alert("empty x input")
}
}

function inputYValue() {
   if(yValueInputEl.value != "") {
    y_var.push(yValueInputEl.value)
    let yNewValue = yValueInputEl.value
    yValueInputEl.value = ""
    alert(yNewValue)
    alert(y_var.length)
} else {
    alert("empty y value")
}
}

function calculateInterpolation() {
    let number = parseFloat(numberToCheckEl.value); // Retrieve input value
    if (!isNaN(number)) { // Check if it's a valid number
        alert(interpolate(number));
    } else {
        alert("Please enter a valid number.");
    }
}



function dividedDifference(x, y) {
    if (x.length !== y.length) {
        throw new Error('Arrays must have the same length');
    }

    const n = x.length;
    const table = new Array(n).fill(0).map(() => new Array(n).fill(0));
    
    // Copy y values to the first column of the table
    for (let i = 0; i < n; i++) {
        table[i][0] = y[i];
    }

    // Calculate divided differences
    for (let j = 1; j < n; j++) {
        for (let i = 0; i < n - j; i++) {
            table[i][j] = (table[i + 1][j - 1] - table[i][j - 1]) / (x[i + j] - x[i]);
        }
    }

    // Generate the interpolation polynomial
    function interpolationPolynomial(t) {
        let result = table[0][0];
        let product = 1;
        for (let j = 1; j < n; j++) {
            product *= (t - x[j - 1]);
            result += table[0][j] * product;
        }
        return result;
    }

    return interpolationPolynomial;
}

// Define the interpolate function
const interpolate = dividedDifference(x_var, y_var);

// Display the interpolated value
