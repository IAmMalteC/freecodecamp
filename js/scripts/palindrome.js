function palindrome(str) {
  // *faster solution
  // create a front and a back pointer
  let front = 0;
  let back = str.length - 1;
  let regex = /[\W_]/;

  while (back > front) {
    // increment front pointer if current character is a non-alphanumeric character
    if (str[front].match(regex)) {
      front++;
      continue;
    }
    // decrement front pointer if current character is a non-alphanumeric character
    if (str[back].match(regex)) {
      back--;
      continue;
    }
    // Compare the two letters
    if (str[front].toLowerCase() !== str[back].toLowerCase()) {
      return false;
    }
    // inrease front and decrease back
    front++;
    back--;
  }
  // If we reach this point we got a palindrome
  return true;
}

palindrome("almostomla");

module.exports = palindrome;
