function sumCid(cid) {
  let sum = 0;
  for (let i = 0; i < cid.length; i++) {
    sum += cid[i][1];
  }
  return sum;
}

function checkCashRegister(price, cash, cid) {
  let answer = { status: "", change: [] };
  let possible_states = ["OPEN", "CLOSED", "INSUFFICIENT_FUNDS"];
  // Calculate total amount in the cid
  let cidSum = sumCid(cid);
  let change = cash - price;
  // Perform the three checks
  // *First - Check if the sum of the cid is sufficient
  if (change > cidSum) {
    answer.status = possible_states[2];
    return answer;
  } else if (change === cidSum) {
    answer.status = possible_states[1];
    answer.change = cid;
    return answer;
  } else {
    return answer;
  }
}

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

module.exports = checkCashRegister;
