const convertToCelsius = function(f) {
  // °C = 5/9(°F – 32)
  let c = 5/9 * (f - 32);
  return Number((c).toFixed(1)) // method gives string, then is converted to num
};

const convertToFahrenheit = function(c) {
  // °F = (°C * 9/5) + 32
  let f = (c * 9/5) + 32
  return Number((f).toFixed(1)) // method gives string, then is converted to num
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
