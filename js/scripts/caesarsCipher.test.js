const rot13 = require("./caesarsCipher");

// One letter test
test("Returns B if O is inserted", () => {
  expect(rot13("O")).toMatch(/B/);
});
test("Returns O if B is inserted", () => {
  expect(rot13("B")).toMatch(/O/);
});
test('Returns " " if " " is inserted', () => {
  expect(rot13(" ")).toMatch(/ /);
});

// Several letters test
test('Returns "Free Code Camp" if "SERR PBQR PNZC" is inserted', () => {
  expect(rot13("SERR PBQR PNZC")).toMatch(/FREE CODE CAMP/);
});
