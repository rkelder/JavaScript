 /*

 The following function simulates a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
  
  The function should return an object with a status key and a change key.
  
  IF the cash-in-drawer is less than the change due, OR IF you cannot return the exact change: return {status: "INSUFFICIENT_FUNDS", change: []}
  
  IF the value for the key change is equal to the change due: return {status: "CLOSED", change: [...]}
  
  ELSE return {status: "OPEN", change: [...]} with the change due in coins and bills, sorted in highest to lowest order. 
  
  */

const currencyUnit = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  }
  
  
  function checkCashRegister(price, cash, cid) {
  
    let changeSum = cash * 100 - price * 100;
    let changeSumCheck = changeSum;
    let change = [];
    let status = '';
  
    let cidSum = 0;
    let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();
  
     filteredCid.forEach(elem => {
      let curr = elem[0];
      let currSum = elem[1] * 100;
      cidSum += currSum;
      let amount = 0;
      while (changeSum >= currencyUnit[curr] && currSum > 0) {
        amount += currencyUnit[curr];
        changeSum -= currencyUnit[curr];
        currSum -= currencyUnit[curr];
      }
      if (amount !== 0) {
        change.push([curr, amount / 100]);
      }
    });
    if (changeSum > 0) {
      status = 'INSUFFICIENT_FUNDS';
      change = [];
    } else if (changeSum == 0 && changeSumCheck == cidSum) {
      status = 'CLOSED';
      change = cid;
    } else {
      status = 'OPEN';
    }
    return { 'status': status, 'change': change };
  }
  
  
  
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  
 