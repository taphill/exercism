//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

function isPangram(sentence) {
  const characters = [...sentence].map(char => char.toLowerCase());
  
  return alphabet.every(character => characters.includes(character));
};

module.exports = {
  isPangram
};
