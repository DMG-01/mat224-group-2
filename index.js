// Alert for connection (optional, can be removed)
// alert("js connected");

let x_var = []; // Initialize empty arrays for user input
let y_var = [];

xValueInputEl = document.getElementById("x_values");
yValueInputEl = document.getElementById("y_values");

yValue = document.getElementById("yValue_El");
xValue = document.getElementById("xValue_El");
let calcInterEl = document.getElementById("calcInter");
numberToCheckEl = document.getElementById("numberToCheck_El");

xValue.onclick = inputXValue;
yValue.onclick = inputYValue;
calcInterEl.onclick = calculateInterpolation;
// function that gets the  x value from the pushs and puts it in the array
function inputXValue() {
  if (xValueInputEl.value !== "") {
    x_var.push(parseFloat(xValueInputEl.value)); // Ensure parsed number
    let xNewValue = xValueInputEl.value;
    xValueInputEl.value = "";
    alert("X value: " + xNewValue + " added.");
  } else {
    alert("Empty X input. Please enter a number.");
  }
}
//function that gets the y value and pushes it to the y array
function inputYValue() {
  if (yValueInputEl.value !== "") {
    y_var.push(parseFloat(yValueInputEl.value)); // Ensure parsed number
    let yNewValue = yValueInputEl.value;
    yValueInputEl.value = "";
    alert("Y value: " + yNewValue + " added.");
  } else {
    alert("Empty Y value. Please enter a number.");
  }
}
//funcction to calculate interpolation
function calculateInterpolation() {
  let number = parseFloat(numberToCheckEl.value); // Retrieve input value
  if (!isNaN(number)) { // Check if it's a valid number
    const interpolate = dividedDifference(x_var, y_var); // Call dividedDifference to get interpolate function
    alert("Interpolated value at " + number + ": " + interpolate(number));
  } else {
    alert("Please enter a valid number to check.");
  }
}
// function to calculate the interpolation using divided difference 
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

  return interpolationPolynomial; // Return the interpolation function
}