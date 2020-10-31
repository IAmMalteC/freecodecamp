function rot13(str) {
  // Function to get the ascii number
  const ascii = (a) => a.charCodeAt(0);
  const stepsize = 13;
  let decryptedMessage = "";
  let char;
  // Decipher
  for (let i = 0; i < str.length; i++) {
    // find current ascii value
    char = ascii(str[i]);
    // transform by the prefered stepsize
    if (char < 65 || char > 90) {
      // if char isn't an uppercase character, keep the value
      char = char;
    } else if (char > 77) {
      // if char is bigger then the value for M (77), subtract the value.
      char -= stepsize;
    } else {
      // if char is smaller then the value for M (77), add 26 to subtract the stepsize and staying in the range.
      char = char + 26 - stepsize;
    }
    // reformat to str
    char = String.fromCharCode(char);
    // add to message
    decryptedMessage += char;
  }
  return decryptedMessage;
}

rot13("N");

module.exports = rot13;
