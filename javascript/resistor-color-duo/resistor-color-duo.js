//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const colorCodes = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
};

function decodedValue(colors) {
  return parseInt(`${colorCodes[colors[0]]}${colorCodes[colors[1]]}`);
}

module.exports = {
  decodedValue
};
