///// default values 
let x_var = [1,3,5,8,10,12,15,16,18,19,22,24,25,29,30];
let yOne_var = [1635.382, 1545.991, 1559.160, 1540.759, 1546.098, 1430.118, 1391.971, 1413.034, 1415.819, 1240.260, 1237.000, 1529.764, 1558.667, 1660.256, 1687.388];
let yTwo_var = [];

//// array values in case user wants to enter their own data 
let nonX_var = []
let nonY_var = []
let nonYTwo_var = []

// Get HTML DOM elements
let xEl = document.getElementById("x_values");
let yOneEl = document.getElementById("y_values");
let yTwoEl = document.getElementById("z_values");

// Display yOne_var values
yOneEl.innerHTML += yOne_var.join(', ');

// Calculate and display yTwo_var values
calculateY2(x_var, yOne_var);

function calculateY2(x, y) {
    if (x.length != y.length) {
        alert("The length of the x array and the y array are unequal");
    } else {
        for (let index = 0; index < x.length; index++) {
            let newYTwoVar = (0.000174 * Math.pow(x[index], 8)) - (0.0137 * Math.pow(x[index], 7)) + (0.446412 * Math.pow(x[index], 6)) - (7.781532 * Math.pow(x[index], 5)) + (78.354 * Math.pow(x[index], 4)) - (459.233 * Math.pow(x[index], 3)) + (1496.813 * Math.pow(x[index], 2)) - (2402.580 * (x[index])) + 2929.378;
            yTwo_var.push(newYTwoVar.toFixed(2));
            xEl.innerHTML += x_var[index] + ", ";
        }
        yTwoEl.innerHTML += yTwo_var.join(', '); // Display yTwo_var values
    }
}