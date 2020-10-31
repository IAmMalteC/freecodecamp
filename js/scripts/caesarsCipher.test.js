const rot13 = require("./caesarsCipher");

test("Returns B if O is inserted", () => {
  expect(rot13("O")).toMatch(/B/);
});
test("Returns O if B is inserted", () => {
  expect(rot13("B")).toMatch(/O/);
});
test('Returns " " if " " is inserted', () => {
  expect(rot13(" ")).toMatch(/ /);
});
