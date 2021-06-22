const negate = a => !a;

const both = (a, b) =>  a && b;

const either = (a, b) => a || b;

const none = (a, b) => !a && !b;

const one = (a, b) => a !== b;

const truthiness = a => Boolean(a);

const isEqual = (a, b) => a === b;

const isGreaterThan = (a, b) => a > b;

const isLessThanOrEqualTo = (a, b) => a <= b;

const isOdd = a => Boolean(a%2);

const isEven = a => !Boolean(a%2);

const isSquare = a => a >= 0 && !Boolean(Math.sqrt(a)%1);

const startsWith = (char, string) => string[0] === char;

const containsVowels = string => /[aeiou]/gi.test(string);

const isLowerCase = string => string.toLowerCase() === string;

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
