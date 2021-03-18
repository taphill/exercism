//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  // JS dates work in miliseconds which is why I needed to multiply by 1000
  return new Date(date.getTime() + (1000 * 1_000_000_000));
};
