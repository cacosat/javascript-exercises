const add = function(a, b) {
	let add = a + b;
  return add
};

const subtract = function(a, b) {
	let subtract = a - b;
  return subtract
};

const sum = function(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
	return sum
};

const multiply = function(a) {
  let multiply = 1;
  for (let i = 0; i < a.length; i++) {
    multiply *= a[i];
  }
  return multiply
};

const power = function(a, b) {
  let pwr = a**b
	return pwr
};

const factorial = function(a) {
  let factorial = 1;
  for (let i = 1; i <= a; i++) {
    factorial *= i;
  }
	return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
