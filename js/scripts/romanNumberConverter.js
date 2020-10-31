function convertToRoman(num) {
  // Create a conversion table
  let map = [
    { digit: 1, roman: "I" },
    { digit: 4, roman: "IV" },
    { digit: 5, roman: "V" },
    { digit: 9, roman: "IX" },
    { digit: 10, roman: "X" },
    { digit: 40, roman: "XL" },
    { digit: 50, roman: "L" },
    { digit: 90, roman: "XC" },
    { digit: 100, roman: "C" },
    { digit: 400, roman: "CD" },
    { digit: 500, roman: "D" },
    { digit: 900, roman: "CM" },
    { digit: 1000, roman: "M" },
  ];
  // Array to store the roman numbers
  let romanNum = [];
  // Find the roman numbers
  while (num > 0) {
    let counter = 0;
    // Run through the conversion table to find the highest possible roman number
    for (let i = 0; i < map.length; i++) {
      if (map[i].digit <= num) {
        counter = i;
      } else {
        break;
      }
    }
    // Add the found roman number
    romanNum.push(map[counter].roman);
    // remove the value of the number
    num -= map[counter].digit;
  }
  // Return the array of roman numbers as a string
  return romanNum.join("");

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

const roman = convertToRoman(3999);

module.exports = convertToRoman;
