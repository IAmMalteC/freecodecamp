function rot13(str) {
  // Function to get the ascii number
  const ascii = (a) => a.charCodeAt(0);
  const stepsize = 13;
  // find current ascii value
  let char = ascii(str[0]);
  // transform by the prefered stepsize
  if (char < 65 || char > 90) {
    // if char isn't an uppercase character, keep the value
    char = char;
  } else if (char > 78) {
    // if char is bigger then the value for N (78), subtract the value.
    char -= stepsize;
  } else {
    // if char is smaller then the value for N (78), add 26 to subtract the stepsize and staying in the range.
    char = char + 26 - stepsize;
  }
  // reformat to str
  char = String.fromCharCode(char);
  // and return
  return char;
}

rot13("N");

module.exports = rot13;
