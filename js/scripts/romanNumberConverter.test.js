const { test } = require("@jest/globals");
const convertToRoman = require("./romanNumberConverter");

test('Check if 2 returns "II"', () => {
  expect(convertToRoman(2)).toBe("II");
});
test('Check if 4 returns "IV"', () => {
  expect(convertToRoman(4)).toBe("IV");
});
test('Check if 5 returns "V"', () => {
  expect(convertToRoman(5)).toBe("V");
});
test('Check if 9 returns "IX"', () => {
  expect(convertToRoman(9)).toBe("IX");
});
test('Check if 10 returns "X"', () => {
  expect(convertToRoman(10)).toBe("X");
});
test('Check if 29 returns "XXIX', () => {
  expect(convertToRoman(29)).toBe("XXIX");
});
test('Check if 44 returns "XLIV"', () => {
  expect(convertToRoman(44)).toBe("XLIV");
});
test('Check if 68 returns "LXVIII"', () => {
  expect(convertToRoman(68)).toBe("LXVIII");
});
test('Check if 99 returns "XCIX"', () => {
  expect(convertToRoman(99)).toBe("XCIX");
});
test('Check if 400 returns "CD"', () => {
  expect(convertToRoman(400)).toBe("CD");
});
test('Check if 500 returns "D"', () => {
  expect(convertToRoman(500)).toBe("D");
});
test('Check if 798 returns "DCCXCVIII"', () => {
  expect(convertToRoman(798)).toBe("DCCXCVIII");
});
test('Check if 1000 returns "M"', () => {
  expect(convertToRoman(1000)).toBe("M");
});
test('Check if 3999 returns "MMMCMXCIX"', () => {
  expect(convertToRoman(3999)).toBe("MMMCMXCIX");
});
