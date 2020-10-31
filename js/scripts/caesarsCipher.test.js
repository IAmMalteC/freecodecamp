const rot13 = require("./caesarsCipher");

test("Returns a str 13 chars of", () => {
  expect(rot13("N")).toMatch(/A/);
});
