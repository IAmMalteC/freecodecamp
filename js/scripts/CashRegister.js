function sumArr2D(arr2D) {
  let sum = 0;
  for (let i = 0; i < arr2D.length; i++) {
    sum += arr2D[i][1];
  }
  return sum;
}

function filterArr2D(arr2D, positionToCheck = 1, valueToCheck = 0) {
  let tmpArr = [];
  for (let i = 0; i < arr2D.length; i++) {
    if (arr2D[i][positionToCheck] > valueToCheck) {
      tmpArr.push(arr2D[i]);
    }
  }
  return tmpArr;
}

function checkCashRegister(price, cash, cid) {
  let answer = { status: "", change: [] };
  let answerChange = [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ];
  const possible_states = ["OPEN", "CLOSED", "INSUFFICIENT_FUNDS"];
  const cidmap = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  // Save the cid
  let sumCid = sumArr2D(cid);
  let savedCid = cid.map(function (arr) {
    return arr.slice();
  });
  // Start calculation
  let change = cash - price;
  for (let i = cidmap.length - 1; i >= 0; i--) {
    while (change >= cidmap[i] && cid[i][1] > 0) {
      if (cid[i][1] - cidmap[i] >= 0) {
        answerChange[i][1] += cidmap[i];
        cid[i][1] -= cidmap[i];
        change -= cidmap[i];
        // to prevent rounding errors
        let tmpAnswer = answerChange[i][1];
        answerChange[i][1] = Number(tmpAnswer.toFixed(2));
        let tmpCidValue = cid[i][1];
        cid[i][1] = Number(tmpCidValue.toFixed(2));
        change = Number(change.toFixed(2));
      }
    }
  }
  // Perform the three checks
  // *First - Check if the sum of the cid is sufficient
  if (change !== 0) {
    answer.status = possible_states[2];
    return answer;
  } else if (sumArr2D(answerChange) === sumCid) {
    // *Second - Check if cid now is empty
    answer.status = possible_states[1];
    answer.change = savedCid;
    return answer;
  } else {
    // *Third - everything is okay - so we return the change
    // Prepare change
    answerChange = filterArr2D(answerChange);
    answerChange = answerChange.reverse();
    answer.status = possible_states[0];
    answer.change = answerChange;
    return answer;
  }
}
// status: "CLOSED",
//     change: [
//       ["PENNY", 0.5],
//       ["NICKEL", 0],
//       ["DIME", 0],
//       ["QUARTER", 0],
//       ["ONE", 0],
//       ["FIVE", 0],
//       ["TEN", 0],
//       ["TWENTY", 0],
//       ["ONE HUNDRED", 0],
//     ]
// // Open
// checkCashRegister(3.26, 100, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]);
// // INSUFFICENT
checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

// // Closed
// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.5],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]);

module.exports = checkCashRegister;
