//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const rnaComplements = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

function toRna(dnaStrand) {
  const rna = dnaStrand.split('').map(nucleotide => rnaComplements[nucleotide]);

  return rna.join('');
};

module.exports = {
  toRna
};
