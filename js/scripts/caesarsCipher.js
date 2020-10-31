function rot13(str) {
  // Function to get the ascii number
  const offset = 13;
  let decryptedMessage = "";
  // Decipher
  for (let i = 0; i < str.length; i++) {
    // find current ascii value
    let char = str[i].charCodeAt(0);
    // transform by the prefered stepsize
    if (char < 65 || char > 90) {
      // if char isn't an uppercase character, keep the value
      char = char;
    } else if (char > 77) {
      // if char is bigger then the value for M (77), subtract the value.
      char -= offset;
    } else {
      // if char is smaller then the value for M (77), add 26 to subtract the stepsize and staying in the range.
      char = char + 26 - offset;
    }
    decryptedMessage += String.fromCharCode(char);
  }
  return decryptedMessage;
}

rot13("N");

module.exports = rot13;
