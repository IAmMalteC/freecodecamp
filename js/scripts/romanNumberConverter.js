function convertToRoman(num) {
  // *Remember
  //I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
  const romandigits = new Map()
    .set(1, "I")
    .set(4, "IV")
    .set(5, "V")
    .set(9, "IX")
    .set(10, "X")
    .set(40, "XL")
    .set(90, "XC")
    .set(100, "C")
    .set(400, "CD")
    .set(500, "D")
    .set(900, "CM")
    .set(1000, "M");

  let arabicArr = Array.from(String(num), Number);

  // *First try with way to many ifs
  // let arabicNum = num;
  // let romanNum = [];
  // while (arabicNum > 0) {
  //   if (arabicNum >= 1000) {
  //     romanNum.push("M");
  //     arabicNum -= 1000;
  //   } else {
  //     // Check if the first digit is a 9
  //     // function math(ntn, number) {
  //     //   var len = Math.floor(Math.log(number) / Math.LN10) - ntn;
  //     //   return (number / Math.pow(10, len)) % 10 | 0;
  //     // }
  //     let firstDigit =
  //       (arabicNum /
  //         Math.pow(10, Math.floor(Math.log(Math.abs(arabicNum)) / Math.LN10))) %
  //         10 |
  //       0;
  //     if (firstDigit === 9) {
  //       if (arabicNum >= 900) {
  //         romanNum.push("CM");
  //         arabicNum -= 900;
  //       } else if (arabicNum >= 90) {
  //         romanNum.push("XC");
  //         arabicNum -= 90;
  //       } else {
  //         // If it is === 9
  //         romanNum.push("IX");
  //         arabicNum -= 9;
  //       }
  //     } else {
  //       // If the first digit isn't a 9
  //       if (arabicNum >= 500) {
  //         romanNum.push("D");
  //         arabicNum -= 500;
  //       } else {
  //         // check if first digit is a 4
  //         if (firstDigit === 4) {
  //           if (arabicNum >= 400) {
  //             romanNum.push("CD");
  //             arabicNum -= 400;
  //           } else if (arabicNum >= 40) {
  //             romanNum.push("XL");
  //             arabicNum -= 40;
  //           } else {
  //             // if first digit is a 4
  //             romanNum.push("IV");
  //             arabicNum -= 4;
  //           }
  //         } else {
  //           // if first digit isn't a 4
  //           if (arabicNum >= 100) {
  //             romanNum.push("C");
  //             arabicNum -= 100;
  //           } else if (arabicNum >= 50) {
  //             romanNum.push("L");
  //             arabicNum -= 50;
  //           } else if (arabicNum >= 10) {
  //             romanNum.push("X");
  //             arabicNum -= 10;
  //           } else if (arabicNum >= 5) {
  //             romanNum.push("V");
  //             arabicNum -= 5;
  //           } else {
  //             romanNum.push("I");
  //             arabicNum -= 1;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // return romanNum.join("");
}

convertToRoman(3999);

module.exports = convertToRoman;
