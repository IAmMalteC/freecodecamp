function rot13(str) {
  // Function to get the ascii number
  const ascii = (a) => a.charCodeAt(0);
  const stepsize = 13;
  // find current ascii value
  let char = ascii(str[0]);
  // reduce by the prefered stepsize
  char -= stepsize;
  // reformat to str
  char = String.fromCharCode(char);
  // and return
  return char;
}

rot13("N");

module.exports = rot13;
