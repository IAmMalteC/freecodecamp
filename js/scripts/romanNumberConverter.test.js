const { test } = require("@jest/globals");
const convertToRoman = require("./romanNumberConverter");

test('Check if 2 returns "II"', () => {
  expect(convertToRoman(2)).toMatch(/II/);
});
test('Check if 4 returns "IV"', () => {
  expect(convertToRoman(4)).toMatch(/IV/);
});
test('Check if 5 returns "V"', () => {
  expect(convertToRoman(5)).toMatch(/V/);
});
test('Check if 9 returns "IX"', () => {
  expect(convertToRoman(9)).toMatch(/IX/);
});
test('Check if 10 returns "X"', () => {
  expect(convertToRoman(10)).toMatch(/X/);
});
test('Check if 29 returns "XXIX', () => {
  expect(convertToRoman(29)).toMatch(/XXIX/);
});
test('Check if 44 returns "XLIV"', () => {
  expect(convertToRoman(44)).toMatch(/XLIV/);
});
test('Check if 68 returns "LXVIII"', () => {
  expect(convertToRoman(68)).toMatch(/LXVIII/);
});
test('Check if 99 returns "XCIX"', () => {
  expect(convertToRoman(99)).toMatch(/XCIX/);
});
test('Check if 400 returns "CD"', () => {
  expect(convertToRoman(400)).toMatch(/CD/);
});
test('Check if 500 returns "D"', () => {
  expect(convertToRoman(500)).toMatch(/D/);
});
test('Check if 798 returns "DCCXCVIII"', () => {
  expect(convertToRoman(798)).toMatch(/DCCXCVIII/);
});
test('Check if 1000 returns "M"', () => {
  expect(convertToRoman(1000)).toMatch(/M/);
});
test('Check if 3999 returns "MMMCMXCIX"', () => {
  expect(convertToRoman(3999)).toMatch(/MMMCMXCIX/);
});
