function telephoneCheck(str) {
  const regex = /^(1 |1)?([\d]{3}|[\d]{3}[-]|[\d]{3} |\([\d]{3}\)|\([\d]{3}\) )([\d]{3}|[\d]{3} |[\d]{3}[-])[\d]{4}/g;
  if (regex.test(str)) {
    return true;
  } else {
    return false;
  }
}

telephoneCheck("(555-555-5555");

module.exports = telephoneCheck;
