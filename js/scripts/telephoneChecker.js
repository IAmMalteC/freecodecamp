function telephoneCheck(str) {
  let telephoneNum = str.split("");
  const regex = /\d/;
  telephoneNum = telephoneNum.filter((digit) => regex.test(digit));

  // check if the length is the correct us number length
  if (telephoneNum.length === 10) {
    return true;
  } else {
    return false;
  }
}

telephoneCheck("(555-555-5555");

module.exports = telephoneCheck;
