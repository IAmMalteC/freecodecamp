function telephoneCheck(str) {
  // for validation of regex --> insert here: https://regex101.com/ and test with number combinations from the test file.
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

telephoneCheck("(555-555-5555");

module.exports = telephoneCheck;
